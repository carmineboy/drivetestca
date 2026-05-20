import { mkdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";

// ccdriving.ca currently serves a certificate chain that Node does not verify
// with the bundled CA set, while browsers/curl accept it. This scraper is a
// one-off local importer, so we relax TLS verification for this process.
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const LANGUAGE = process.argv.includes("--language=en") ? "en" : "zh_HK";
const IS_ENGLISH = LANGUAGE === "en";
const BASE_URL = "https://www.ccdriving.ca/";
const PAGE_URL = `${BASE_URL}index.php?route=test/mock&test_type=view&language=${LANGUAGE}`;
const START_URL = `${BASE_URL}index.php?route=test/mock/start&test_type=view&language=${LANGUAGE}`;
const NEXT_URL = `${BASE_URL}index.php?route=test/mock/next&test_type=view&language=${LANGUAGE}`;
const SUBMIT_URL = `${BASE_URL}index.php?route=test/mock/submit&test_type=view`;
const OUT_FILE = path.join(process.cwd(), IS_ENGLISH ? "lib/g1-questions-en.ts" : "lib/g1-questions.ts");
const IMAGE_DIR = path.join(process.cwd(), IS_ENGLISH ? "public/g1-images-en" : "public/g1-images");

let cookie = "";

function updateCookie(headers) {
  const setCookie = headers.getSetCookie?.() ?? [];
  if (setCookie.length === 0) return;

  const jar = new Map(
    cookie
      .split(";")
      .map((part) => part.trim())
      .filter(Boolean)
      .map((part) => {
        const [name, ...value] = part.split("=");
        return [name, value.join("=")];
      }),
  );

  for (const raw of setCookie) {
    const [pair] = raw.split(";");
    const [name, ...value] = pair.split("=");
    jar.set(name, value.join("="));
  }

  cookie = [...jar.entries()].map(([name, value]) => `${name}=${value}`).join("; ");
}

async function fetchWithCookie(url) {
  const res = await fetch(url, {
    headers: cookie ? { cookie } : {},
    redirect: "follow",
  });
  updateCookie(res.headers);
  if (!res.ok) throw new Error(`${res.status} ${res.statusText}: ${url}`);
  return res;
}

function decodeHtml(value) {
  return value
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/\s+/g, " ")
    .trim();
}

function extractImage(html) {
  const match = html.match(/<img[^>]+src=["']([^"']+)["']/i);
  if (!match) return null;
  return new URL(match[1], BASE_URL).toString();
}

function stripHtml(html) {
  return decodeHtml(html.replace(/<[^>]*>/g, " "));
}

function imageFileName(url, index) {
  if (url.startsWith("data:")) {
    const extension = url.match(/^data:image\/([^;,]+)/i)?.[1] ?? "png";
    return `image-${String(index).padStart(3, "0")}.${extension === "jpeg" ? "jpg" : extension}`;
  }

  const parsed = new URL(url);
  const base = path.basename(parsed.pathname);
  return base || `image-${String(index).padStart(3, "0")}.jpg`;
}

async function downloadImage(url, index) {
  await mkdir(IMAGE_DIR, { recursive: true });
  const fileName = imageFileName(url, index);
  const publicPath = `/g1-images/${fileName}`;
  const languagePublicPath = IS_ENGLISH ? `/g1-images-en/${fileName}` : publicPath;
  const outPath = path.join(IMAGE_DIR, fileName);

  if (url.startsWith("data:")) {
    const [, payload = ""] = url.split(",");
    await writeFile(outPath, Buffer.from(payload, "base64"));
    return languagePublicPath;
  }

  const res = await fetchWithCookie(url);
  const data = new Uint8Array(await res.arrayBuffer());
  await writeFile(outPath, data);
  return languagePublicPath;
}

async function getJson(url) {
  const res = await fetchWithCookie(url);
  return res.json();
}

async function main() {
  await rm(IMAGE_DIR, { recursive: true, force: true });
  await fetchWithCookie(PAGE_URL);
  await getJson(START_URL);

  const questions = [];
  const seen = new Set();

  for (let i = 0; i < 500; i++) {
    const json = await getJson(NEXT_URL);
    if (!json.question) break;

    const source = json.question;
    const id = String(source.test_question_id);
    if (seen.has(id)) break;
    seen.add(id);

    const imageUrl = extractImage(source.question);
    const questionText = stripHtml(source.question);
    const image = imageUrl ? await downloadImage(imageUrl, questions.length + 1) : undefined;

    questions.push({
      q: questionText || (IS_ENGLISH ? "Choose the correct meaning of this traffic sign:" : "请选择正确的交通标志含义："),
      image,
      options: [
        stripHtml(source.option_1),
        stripHtml(source.option_2),
        stripHtml(source.option_3),
        stripHtml(source.option_4),
      ],
      correct: Number(source.answer) - 1,
    });

    await getJson(`${SUBMIT_URL}&test_result=1&question_id=${encodeURIComponent(id)}`);

    const total = Number(json.summary?.total ?? 0);
    const left = Number(json.summary?.left ?? 1);
    if (total > 0 && questions.length >= total) break;
    if (left === 0) break;
  }

  const expectedMinimum = IS_ENGLISH ? 180 : 200;
  if (questions.length < expectedMinimum) {
    throw new Error(`Expected at least ${expectedMinimum} questions, got ${questions.length}`);
  }

  const body = IS_ENGLISH ? `import type { Question } from "./g1-questions";

export const QUESTIONS_EN: Question[] = ${JSON.stringify(questions, null, 2)};
` : `export type Question = {
  q: string;
  image?: string;
  options: string[];
  correct: number;
};

export const QUESTIONS: Question[] = ${JSON.stringify(questions, null, 2)};
`;

  await writeFile(OUT_FILE, body);
  console.log(`Wrote ${questions.length} ${LANGUAGE} questions to ${OUT_FILE}`);
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
