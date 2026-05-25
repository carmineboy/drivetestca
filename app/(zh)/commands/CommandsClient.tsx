"use client";

import { useState, useEffect, useRef } from "react";
import { COMMAND_GROUPS, CommandItem } from "@/lib/commands-data";
import { FloatingShape } from "@/components/FloatingShape";
import audioMap from "@/lib/commands-audio-map.json";

export function CommandsClient() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [currentlySpeaking, setCurrentlySpeaking] = useState<string | null>(null);
  const [speechSupported, setSpeechSupported] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Check Web Speech API support
  useEffect(() => {
    if (typeof window !== "undefined") {
      const support = "speechSynthesis" in window;
      setSpeechSupported(support);

      // Pre-load voices (crucial for Chrome/Safari)
      if (support && window.speechSynthesis) {
        window.speechSynthesis.getVoices();
        window.speechSynthesis.onvoiceschanged = () => {
          window.speechSynthesis.getVoices();
        };
      }
    }
  }, []);

  const handlePlay = (text: string) => {
    // If currently speaking/playing, stop it first
    if (currentlySpeaking) {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
      if (typeof window !== "undefined" && window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
      
      // If we clicked the same item that was already playing, toggle it off and return
      if (currentlySpeaking === text) {
        setCurrentlySpeaking(null);
        return;
      }
    }

    // Look up generated minimax TTS filename
    const filename = (audioMap as Record<string, string>)[text];
    if (filename) {
      const audio = new Audio(`/audio/commands/${filename}`);
      audio.preload = "none"; // Explicitly tell the browser not to preload anything
      audioRef.current = audio;

      audio.onplay = () => {
        setCurrentlySpeaking(text);
      };
      audio.onended = () => {
        setCurrentlySpeaking(null);
        audioRef.current = null;
      };
      audio.onerror = () => {
        console.warn(`Failed to play minimax audio for "${text}", falling back to speech synthesis`);
        runSpeechSynthesis(text);
      };

      audio.play().catch((err) => {
        console.warn("Playback failed, falling back to speech synthesis", err);
        runSpeechSynthesis(text);
      });
      return;
    }

    runSpeechSynthesis(text);
  };

  const runSpeechSynthesis = (text: string) => {
    if (!speechSupported || typeof window === "undefined" || !window.speechSynthesis) {
      alert("抱歉，您的浏览器不支持语音播报，请尝试使用 Chrome, Safari 或 Edge 浏览器。");
      return;
    }

    const cleanText = text
      .replace(/\(.*?\)/g, "")
      .replace(/\//g, " or ");

    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = "en-US";
    
    const voices = window.speechSynthesis.getVoices();
    const femaleVoice = voices.find(
      (v) =>
        v.lang.startsWith("en") &&
        (v.name.toLowerCase().includes("samantha") ||
          v.name.toLowerCase().includes("zira") ||
          v.name.toLowerCase().includes("google us english") ||
          v.name.toLowerCase().includes("hazel") ||
          v.name.toLowerCase().includes("female"))
    );

    if (femaleVoice) {
      utterance.voice = femaleVoice;
    }

    utterance.rate = 0.85; 

    utterance.onstart = () => {
      setCurrentlySpeaking(text);
    };

    utterance.onend = () => {
      setCurrentlySpeaking(null);
    };

    utterance.onerror = () => {
      setCurrentlySpeaking(null);
    };

    window.speechSynthesis.speak(utterance);
  };

  // Filter commands
  const filteredGroups = COMMAND_GROUPS.map((group) => {
    // If category is selected and it doesn't match this group, skip all items
    if (selectedCategory !== "all" && group.id !== selectedCategory) {
      return { ...group, items: [] };
    }

    // Filter items inside the group
    const matchedItems = group.items.filter(
      (item) =>
        item.english.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.chinese.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.note && item.note.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    return { ...group, items: matchedItems };
  }).filter((group) => group.items.length > 0);

  // Total match count
  const totalCount = filteredGroups.reduce((acc, g) => acc + g.items.length, 0);

  return (
    <div className="relative max-w-6xl mx-auto px-6 pt-12 pb-24 md:pt-16">
      {/* Background Ornaments */}
      <FloatingShape variant="sun" size={76} className="top-4 right-[15%] hidden md:block" />
      <FloatingShape variant="ripple" size={92} rotate={-6} className="bottom-1/3 left-4 hidden lg:block" />

      {/* Hero Section */}
      <div className="mb-12">
        <span className="sticker text-sm bg-[var(--color-mint)]">
          路考通关神器 · 考官口令
        </span>
        <h1 className="mt-6 font-[family-name:var(--font-display)] text-5xl md:text-6xl leading-[1.05] max-w-4xl">
          G2 / G 路考考官<span className="underline-wobble">英文指令大全</span>
          <span className="text-[var(--color-coral)]">。</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl max-w-3xl leading-relaxed">
          加拿大路考是全英文进行的。许多学员因为听不懂考官口令而紧张出错。这里整理了安大略省路考所有的考官常用单词、检查指令和标准长句。带双语对照与在线语音发音，帮您在考试前练熟“听力”！
        </p>
      </div>



      {/* Control Bar: Search & Category Tabs */}
      <section className="mb-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between border-t-4 border-[var(--color-ink)] pt-8">
        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedCategory("all")}
            className="sticker text-xs md:text-sm transition-transform hover:scale-105 active:scale-95 cursor-pointer"
            style={{
              backgroundColor: selectedCategory === "all" ? "var(--color-coral)" : "var(--color-paper)",
              color: selectedCategory === "all" ? "var(--color-paper)" : "var(--color-ink)",
            }}
          >
            全部 ({COMMAND_GROUPS.reduce((acc, g) => acc + g.items.length, 0)})
          </button>
          {COMMAND_GROUPS.map((group) => (
            <button
              key={group.id}
              onClick={() => setSelectedCategory(group.id)}
              className="sticker text-xs md:text-sm transition-transform hover:scale-105 active:scale-95 cursor-pointer"
              style={{
                backgroundColor: selectedCategory === group.id ? "var(--color-coral)" : "var(--color-paper)",
                color: selectedCategory === group.id ? "var(--color-paper)" : "var(--color-ink)",
              }}
            >
              {group.title.split(" ")[0]} ({group.items.length})
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full max-w-sm">
          <input
            type="text"
            placeholder="搜索中英文指令..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-2 border-2 border-[var(--color-ink)] bg-white rounded-xl text-sm focus:outline-none"
            style={{ boxShadow: "3px 3px 0 var(--color-ink)" }}
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs"
            >
              清除
            </button>
          )}
        </div>
      </section>

      {/* Match Stats */}
      {searchQuery && (
        <p className="mb-6 text-sm text-slate-600 font-medium">
          找到 <span className="text-[var(--color-coral-deep)] font-bold">{totalCount}</span> 个符合搜索条件的指令
        </p>
      )}

      {/* Empty State */}
      {filteredGroups.length === 0 && (
        <div className="text-center py-16 card-flat bg-white border-2 border-dashed border-slate-300">
          <span className="text-4xl">🔍</span>
          <h3 className="mt-4 font-semibold text-lg">没有找到相关的指令</h3>
          <p className="mt-2 text-sm text-slate-500">试试其他关键词，或者清除搜索条件</p>
          <button
            onClick={() => {
              setSearchQuery("");
              setSelectedCategory("all");
            }}
            className="mt-4 sticker bg-[var(--color-canary)] text-xs"
          >
            重置筛选
          </button>
        </div>
      )}

      {/* Grid Content */}
      <div className="space-y-12">
        {filteredGroups.map((group) => (
          <section key={group.id} className="scroll-mt-6">
            {/* Group Header */}
            <div className="flex items-center gap-3 border-b-2 border-[var(--color-ink)] pb-3 mb-6">
              <span 
                className="w-4 h-4 rounded-full border border-[var(--color-ink)]"
                style={{ backgroundColor: group.color }}
              />
              <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl">
                {group.title}
              </h2>
              <span className="sticker text-xs bg-[var(--color-paper-warm)]">
                {group.items.length} 条
              </span>
            </div>

            {/* Cards Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {group.items.map((item, index) => (
                <article
                  key={`${item.english}-${index}`}
                  className="card-flat bg-[var(--color-paper)] p-5 flex justify-between gap-4 transition-transform hover:-translate-y-0.5"
                  style={{ 
                    borderLeft: `6px solid ${group.color}`,
                    transform: `rotate(${(index % 2 === 0 ? -0.15 : 0.15)}deg)`
                  }}
                >
                  <div className="flex-1 min-w-0">
                    <h3 className="font-[family-name:var(--font-accent)] italic text-lg md:text-xl font-bold text-[var(--color-ink)] leading-snug break-words">
                      "{item.english}"
                    </h3>
                    <p className="mt-2 text-sm md:text-base font-semibold text-[var(--color-lake-deep)] break-words">
                      {item.chinese}
                    </p>
                    {item.note && (
                      <p className="mt-3 text-xs text-slate-500 leading-relaxed bg-white/60 p-2 rounded-lg border border-dashed border-slate-300">
                        💡 {item.note}
                      </p>
                    )}
                  </div>

                  <div className="flex-shrink-0">
                    <button
                      onClick={() => handlePlay(item.english)}
                      className={`flex items-center justify-center w-10 h-10 rounded-full border-2 border-[var(--color-ink)] transition-all cursor-pointer ${
                        currentlySpeaking === item.english
                          ? "bg-[var(--color-mint)] scale-110"
                          : "bg-white hover:bg-[var(--color-canary)] hover:scale-105 active:scale-95"
                      }`}
                      style={{ boxShadow: "2px 2px 0 var(--color-ink)" }}
                      title="点击发音"
                      aria-label={`朗读 "${item.english}"`}
                    >
                      {currentlySpeaking === item.english ? (
                        <span className="text-sm animate-pulse">🔊</span>
                      ) : (
                        <span className="text-sm">🔈</span>
                      )}
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Quick Tips Footer */}
      <section className="mt-16 p-6 card-flat bg-[var(--color-paper)] border-2 border-[var(--color-ink)] text-sm md:text-base leading-relaxed space-y-3">
        <h3 className="font-[family-name:var(--font-display)] text-xl mb-4">💡 闫教练小贴士 (Road Test Quick Tips)</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>不用担心语法</strong>：路考考官常用祈使句或短句指令，只要听清关键动词（如 Turn, Pull over, Change lanes, Park）即可。</li>
          <li><strong>注意动作要坚决</strong>：当考官说 <code className="bg-white px-1.5 py-0.5 rounded border">When safe...</code> 时，意思是在“确保安全的前提下”做动作，绝不是让你立即盲目变道或起步，安全第一。</li>
          <li><strong>夸张的观察动作</strong>：执行所有的 <code className="bg-white px-1.5 py-0.5 rounded border">Check blind spots</code> 或转向指令时，转头动作一定要明显（下巴扫到肩膀），只用余光看考官可能认为你没看。</li>
          <li><strong>完全停稳</strong>：在所有的 <code className="bg-white px-1.5 py-0.5 rounded border">Stop sign</code> 面前，必须完全停稳（感受车身回弹，时速归零）并默数3秒，千万不能溜车（Rolling Stop）。</li>
        </ul>
      </section>
    </div>
  );
}
