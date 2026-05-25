export interface CommandItem {
  english: string;
  chinese: string;
  note?: string;
}

export interface CommandGroup {
  id: string;
  title: string;
  tag: string;
  color: string;
  intro: string;
  items: CommandItem[];
}

export const COMMAND_GROUPS: CommandGroup[] = [
  {
    id: "start-park",
    title: "启动与停车 (Start & Park)",
    tag: "13 个词条",
    color: "var(--color-coral)",
    intro: "路考最基础的开始、结束及各类泊车指令，包括平行泊车、倒车入位和三点掉头准备等。",
    items: [
      { english: "Start the car", chinese: "启动汽车", note: "通常在考官上车检查完设备后发出" },
      { english: "Stop the car", chinese: "停车", note: "临时靠边或到达目的地时" },
      { english: "Pull over", chinese: "靠边停车", note: "听到后应打右转向灯，观察后视镜与盲点并靠右平稳停下" },
      { english: "Parallel park", chinese: "平行泊车", note: "侧方位停车，路考必考项目之一" },
      { english: "Park the car", chinese: "泊车", note: "将车辆停好" },
      { english: "Back into the parking space", chinese: "倒车入位", note: "尾进泊车，常用于考试结束返回考场时" },
      { english: "Pull forward into the parking space", chinese: "前进入位", note: "车头扎入停车位，通常在考试结束时" },
      { english: "Parallel park behind the car", chinese: "在车后进行平行停车", note: "考官会指定路边的一辆车让你在它后面平行停车" },
      { english: "Angle park", chinese: "斜向停车", note: "斜对角停车，部分考场地形会用到" },
      { english: "Reverse out of the parking space", chinese: "从停车位倒车出来", note: "倒车出库" },
      { english: "Head in parking", chinese: "车头入位停车", note: "车头朝内停入车位" },
      { english: "Park between the lines", chinese: "停在停车线之间", note: "停正，不要压两边的车位线" },
      { english: "Use the parking brake", chinese: "使用手刹 (停车刹车)", note: "车辆停稳后拉起手刹" }
    ]
  },
  {
    id: "turn-lane",
    title: "转弯与变道 (Turn & Lane Change)",
    tag: "8 个词条",
    color: "var(--color-canary)",
    intro: "行车过程中最核心的变道与转向指令，合并高速路也是其中重点。",
    items: [
      { english: "Turn left", chinese: "左转", note: "绿灯左转注意礼让直行车，红灯时必须在停止线前停稳" },
      { english: "Turn right", chinese: "右转", note: "右转前需观察右侧自行车道与行人" },
      { english: "Change lanes", chinese: "变道", note: "在普通道路变道" },
      { english: "Change lanes to the left", chinese: "向左变道", note: "打左转向灯、看后视镜、回头看盲点、安全后变道" },
      { english: "Change lanes to the right", chinese: "向右变道", note: "打右转向灯、看后视镜、回头看盲点、安全后变道" },
      { english: "Merge", chinese: "合流 / 并道", note: "多车道汇合或并线" },
      { english: "Merge onto the highway", chinese: "并入高速公路", note: "在加速道上加速到交通流速度后并入高速" },
      { english: "Exit the highway", chinese: "驶离 / 驶出高速公路", note: "听到后变道进入减速道驶离高速" }
    ]
  },
  {
    id: "speed-control",
    title: "速度与控制 (Speed & Control)",
    tag: "13 个词条",
    color: "var(--color-mint)",
    intro: "考官对车速、信号灯和行车观察发出的指令，是判断安全驾驶意识的关键。",
    items: [
      { english: "Speed up", chinese: "加速", note: "在安全且不超速的前提下提升速度" },
      { english: "Slow down", chinese: "减速", note: "降低车速" },
      { english: "Follow the speed limit", chinese: "遵守限速", note: "路考中切勿超速，但也不要无故低于限速太多" },
      { english: "Yield", chinese: "让行", note: "在有让牌（Yield）或辅路汇入时礼让有优先权的车辆" },
      { english: "Stop at the stop sign", chinese: "在停车标志处停车", note: "在Stop Sign前必须完全停稳（Complete Stop）至少3秒" },
      { english: "Make a complete stop", chinese: "完全停止", note: "车辆必须彻底静止，轮子不能有任何滑动" },
      { english: "Proceed with caution", chinese: "小心前行", note: "观察四周确认安全后缓慢通过" },
      { english: "Turn on your signal", chinese: "打开转向灯", note: "打指示灯（方向灯）" },
      { english: "Turn off your signal", chinese: "关闭转向灯", note: "变道或转弯完成后，如果转向灯没有自动弹回，需手动关闭" },
      { english: "Check your mirrors", chinese: "检查后视镜", note: "考官希望看到你规律地用余光或稍微转头观察后视镜" },
      { english: "Check your blind spots", chinese: "检查盲点", note: "转弯或变道时必须有明显的转头动作检查肩膀后的盲点（Mirror-Signal-Manoeuvre）" },
      { english: "Move into the right lane", chinese: "进入右侧车道", note: "向右变道行驶" },
      { english: "Move into the left lane", chinese: "进入左侧车道", note: "向左变道行驶" }
    ]
  },
  {
    id: "safety-inspect",
    title: "安全检查与仪表 (Safety & Instruments)",
    tag: "17 个词条",
    color: "var(--color-lake)",
    intro: "考试开始前考官在车外或车内进行的设备安全检测指令，需熟悉对应的车辆部件名称。",
    items: [
      { english: "Fasten your seatbelt", chinese: "系好安全带", note: "上车第一件事" },
      { english: "Check your brakes", chinese: "检查刹车", note: "踩刹车看刹车灯是否正常" },
      { english: "Adjust your mirrors", chinese: "调整后视镜", note: "考官上车前调整好内外后视镜" },
      { english: "Turn on the windshield wipers", chinese: "打开雨刷", note: "测试雨刮器是否工作" },
      { english: "Check your tire pressure", chinese: "检查轮胎气压", note: "考官可能口头询问或做仪表检查" },
      { english: "Check your oil level", chinese: "检查油位", note: "安全常识" },
      { english: "Check your headlights", chinese: "检查车头灯", note: "前大灯测试" },
      { english: "Check your brake lights", chinese: "检查刹车灯", note: "考官在车尾让你踩刹车测试" },
      { english: "Check your indicators", chinese: "检查转向灯", note: "测试左右转向灯" },
      { english: "Headlights", chinese: "车头灯", note: "车辆大灯" },
      { english: "High beams", chinese: "远光灯", note: "路考中如果视线不好或雨雪天可能需要" },
      { english: "Brake lights", chinese: "刹车灯", note: "后刹车尾灯" },
      { english: "Turn signal", chinese: "转向灯", note: "指示方向的闪烁灯" },
      { english: "Hazard lights", chinese: "危险警示灯", note: "俗称双闪（红色三角按钮）" },
      { english: "Dashboard", chinese: "仪表盘", note: "显示车速、油量等" },
      { english: "Fuel gauge", chinese: "燃油表", note: "燃油指示" },
      { english: "Speedometer", chinese: "速度计", note: "时速表，路考中要经常用余光扫视" }
    ]
  },
  {
    id: "road-signs",
    title: "道路状况与标志 (Road & Signs)",
    tag: "27 个词条",
    color: "var(--color-coral)",
    intro: "路考中经常路过或提及的各类地形、区域和路标的英文说法。",
    items: [
      { english: "Intersection", chinese: "十字路口 / 交叉路口", note: "注意观察交通流及左右视线" },
      { english: "Crosswalk", chinese: "人行横道", note: "人行道前有行人准备通过时必须停车礼让" },
      { english: "Traffic light", chinese: "交通信号灯", note: "红绿灯" },
      { english: "Roundabout", chinese: "环岛", note: "礼让环岛内车辆，顺时针单向行驶" },
      { english: "Pedestrian", chinese: "行人", note: "行人在路考中有绝对优先权" },
      { english: "Bicycle lane", chinese: "自行车道", note: "转弯前变道切入时要注意检查盲点是否有自行车" },
      { english: "Heavy traffic", chinese: "交通拥堵", note: "车流量大时注意保持车距" },
      { english: "Light traffic", chinese: "交通顺畅", note: "路况良好" },
      { english: "Construction zone", chinese: "施工区域", note: "通常会有临时的低限速，必须严格遵守" },
      { english: "School zone", chinese: "学校区域", note: "上下学时间有非常严格的限速（通常是 30 km/h 或 40 km/h）" },
      { english: "Residential area", chinese: "住宅区", note: "一般默认限速为 40 km/h（除非有路标指明）" },
      { english: "Road is clear", chinese: "道路畅通", note: "路面无障碍" },
      { english: "Obstruction ahead", chinese: "前方有障碍", note: "注意提前避让或减速" },
      { english: "Emergency vehicle approaching", chinese: "紧急车辆接近", note: "听到警报声或看到红蓝警灯应立即安全靠右停下礼让" },
      { english: "Accident ahead", chinese: "前方有事故", note: "慢行" },
      { english: "Detour", chinese: "绕行", note: "路口封闭需要改道" },
      { english: "Lane closed", chinese: "车道关闭", note: "注意提前并线" },
      { english: "Stop sign", chinese: "停车标志", note: "红色八角形停牌" },
      { english: "Yield sign", chinese: "让行标志", note: "红色倒三角形让牌" },
      { english: "Speed limit sign", chinese: "限速标志", note: "指示当前路段的最大法定车速" },
      { english: "No entry sign", chinese: "禁止进入标志", note: "切勿驶入单行道逆行方向" },
      { english: "No U-turn", chinese: "禁止掉头", note: "不能在此路口做U转" },
      { english: "No left turn", chinese: "禁止左转", note: "标志时间内或全天禁左" },
      { english: "No right turn", chinese: "禁止右转", note: "标志时间内或红灯时禁止右转" },
      { english: "One-way street", chinese: "单行道", note: "注意单行道的入口和转弯车道选择" },
      { english: "No parking", chinese: "禁止停车", note: "路边红色或黄色禁停标线/牌" },
      { english: "Speed bump", chinese: "减速带", note: "慢速通过，避免颠簸" },
      { english: "Railroad crossing", chinese: "铁路道口", note: "通过时需注意听、看，切勿在铁轨上停车或换挡" }
    ]
  },
  {
    id: "examiner-sentences",
    title: "考官常用长句 (Examiner Sentences)",
    tag: "21 个词条",
    color: "var(--color-canary)",
    intro: "路考实车考试中，考官在不同路况下可能会说出的完整长句，包括具体转向、泊车和三点掉头指令。",
    items: [
      { english: "Please turn on your headlights.", chinese: "请打开车头灯。", note: "检查灯光时用" },
      { english: "Make a U-turn when it's safe.", chinese: "安全时请掉头。", note: "在合适的路口进行U转" },
      { english: "At the next intersection, turn right.", chinese: "在下一个十字路口右转。", note: "普通路口转弯指令" },
      { english: "Keep to the right.", chinese: "靠右行驶。", note: "加拿大是右侧通行，无特殊情况变道回右车道" },
      { english: "Follow the traffic signs.", chinese: "遵循交通标志。", note: "考官提醒你根据标志行车" },
      { english: "Prepare to stop.", chinese: "准备停车。", note: "前方即将有红灯或停牌" },
      { english: "Watch for pedestrians.", chinese: "注意行人。", note: "过斑马线或转弯时考官可能提醒" },
      { english: "Yield to oncoming traffic.", chinese: "让行迎面而来的车辆。", note: "无保护左转时必须礼让直行车" },
      { english: "Stay in your lane.", chinese: "保持在你的车道内。", note: "不要压线或无故偏离" },
      { english: "Follow the vehicle ahead.", chinese: "跟随前车。", note: "保持安全距离跟随" },
      { english: "Use your horn if necessary.", chinese: "如有必要使用喇叭。", note: "紧急避险安全警示" },
      { english: "Maintain a safe following distance.", chinese: "保持安全跟车距离。", note: "下雨或高速上尤为重要（通常是2-3秒车距）" },
      { english: "Smooth acceleration.", chinese: "平稳加速。", note: "起步或提速时不要猛踩油门" },
      { english: "Smooth braking.", chinese: "平稳刹车。", note: "减速停车时要线性平稳，避免急刹" },
      { english: "Use hand-over-hand steering.", chinese: "使用交叉手法转向。", note: "安省交通手册推荐双手交叉打方向盘方式" },
      { english: "Control the steering wheel.", chinese: "控制方向盘。", note: "保持方向盘稳定" },
      { english: "Coast to a stop.", chinese: "滑行停车。", note: "松开油门带刹车缓缓停下" },
      { english: "Look both ways.", chinese: "两边观察。", note: "过路口或起步前做左右左（Left-Right-Left）观察" },
      { english: "Check for cyclists.", chinese: "注意自行车。", note: "右转前必看右侧盲点" },
      { english: "Watch for children.", chinese: "注意儿童。", note: "经过学校或游乐场区域时" },
      { english: "Observe all signs.", chinese: "注意所有标志。", note: "保持对交通标志的警觉" },
      { english: "Look over your shoulder.", chinese: "回头查看。", note: "做盲点检查（Over-the-shoulder check）" },
      { english: "First street please turn right.", chinese: "第一条街右转。", note: "在看到的第一个路口右转" },
      { english: "First street please turn left.", chinese: "第一条街左转。", note: "在看到的第一个路口左转" },
      { english: "First traffic lights please make right.", chinese: "第一个红绿灯右转。", note: "指示在第一个有红绿灯的十字路口右转" },
      { english: "First traffic lights please make left.", chinese: "请在第一个红绿灯左转。", note: "指示在第一个有红绿灯的十字路口左转" },
      { english: "Stop sign please turn right.", chinese: "停牌右转。", note: "在停牌路口停稳后再右转" },
      { english: "Stop sign please turn left.", chinese: "停牌左转。", note: "在停牌路口停稳后再左转" },
      { english: "Please stay in this lane.", chinese: "请保持在这条线行驶。", note: "考官指示继续沿当前车道前进" },
      {
        english: "At the first tree/fire hydrant/electrical box/recycling bin/lamppost, please pull over safely and demonstrate a three point turn using the road space only.",
        chinese: "第一棵树/消防栓/电箱/回收箱/灯柱，用道路的宽度安全示范三点掉头。",
        note: "G2考试核心必考项目。考官会指定一个路边标志物让你靠边后做三点掉头"
      },
      {
        english: "When safe, pull over beside the first car and parallel park behind the car.",
        chinese: "安全情况下，请靠近右手边第一辆车做平行泊车。",
        note: "考官指示你在路边停着的车旁做侧方位停车"
      },
      {
        english: "When safe, pull over at the first tree/fire hydrant/electrical box/recycling bin/lamp post and please demonstrate an uphill/downhill park.",
        chinese: "安全情况下，请靠近第一棵树/消防栓/电箱/回收箱/灯柱，并示范上坡/下坡停车。",
        note: "斜坡停车。注意打方向盘的方向和拉手刹（上坡有路沿向左打，其余向右打）"
      },
      { english: "When safe, please continue driving.", chinese: "安全情况下，请继续行驶。", note: "完成某项目（如路边停车）后重新起步" },
      { english: "Resume.", chinese: "继续行驶（继续吧）。", note: "从靠边停车状态恢复行车" },
      { english: "When safe, please lane change to the left.", chinese: "安全情况下，请换到左线。", note: "路考常规项目" },
      { english: "When safe, please lane change to the right.", chinese: "安全情况下，请换到右线。", note: "路考常规项目" },
      {
        english: "Pull over to the side of the road and please demonstrate a roadside stop/emergency stop.",
        chinese: "请靠边示范路边停车/紧急停车（仅G牌路考）。",
        note: "模拟高速或路边紧急情况停车，需开启双闪（Hazard lights）"
      },
      {
        english: "We will now be entering the highway, when you are at traffic speed please merge safely.",
        chinese: "我们现在要驶入高速公路，当你达到交通速度时请安全并入（仅G牌路考）。",
        note: "G牌路考必考。需要在匝道提速至100km/h左右并入主车道"
      },
      { english: "I would like you to front in or head park in.", chinese: "我想让你车辆头进停车位。", note: "车头扎入车位停车" },
      { english: "I would like you to back in or reverse park in.", chinese: "我想让你车辆尾进停车位。", note: "倒车入库停车" },
      { english: "Please turn off the engine (ignition).", chinese: "请熄火（关闭发动机）。", note: "路考结束停好车后的最后一步" }
    ]
  },
  {
    id: "general-dialogue",
    title: "日常对话与结果 (General Dialogue & Results)",
    tag: "9 个词条",
    color: "var(--color-mint)",
    intro: "考试开始前后的寒暄对话，以及考试结束时考官宣布通过或未通过的官方通知。",
    items: [
      { english: "Do you have any questions?", chinese: "你有什么问题吗？", note: "考官在上车后会询问你是否理解规则" },
      { english: "Are you ready?", chinese: "你准备好了吗？", note: "考试即将开始时的询问" },
      { english: "Please follow my instructions.", chinese: "请按照我的指示做。", note: "考官申明考试纪律" },
      { english: "We will start now.", chinese: "我们现在开始。", note: "宣布路考正式开始" },
      { english: "Please drive back to the testing center.", chinese: "请驾驶回到考试中心。", note: "路考接近尾声，宣布返回考场" },
      { english: "Well done.", chinese: "做得好 / 表现不错。", note: "表扬" },
      { english: "Please wait here.", chinese: "请在这里等待。", note: "停好车后考官在车内写分数表，让你在车里等候" },
      {
        english: "Congratulations, you've met ministry standards (passed), please proceed to the information counter to get your license upgraded.",
        chinese: "恭喜你，你已经符合交通部的标准（通过了），请前往咨询台办理升级驾照手续。",
        note: "最期待的一句话！通过路考后去前台换取临时纸质驾照，正式驾照会邮寄到家"
      },
      {
        english: "Unfortunately, you did not meet the ministry standards (not pass), if you go to the information counter and rebook your test, you are eligible for another test in 10 days.",
        chinese: "很抱歉，你没有符合交通部的标准（未通过），如果你去咨询台重新预约，10天后可以再次参加考试。",
        note: "如果没过，不要灰心，听取考官反馈后，10天后即可重新预约重试"
      }
    ]
  }
];
