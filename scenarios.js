// scenarios.js
// 文明形成シミュレーション：完全動作保証版

const scenarios = [

/* ===== 0 ===== */
{
  title: "第0章：群れとして生きる",
  preText: () =>
    "寒暖の差が激しく、獲物の移動も安定しない時代だった。\n\n" +
    "人は一人では生きられず、小さな群れを作り、互いに依存していた。",
  text: () =>
    "狩りに成功する日もあれば、何日も成果が得られないこともあった。\n\n" +
    "それでも群れは分かれず、共に移動し、共に眠り、共に食べていた。\n\n" +
    "この群れが、どのように判断を下していくのかは、\n" +
    "まだ誰にも決められていなかった。",
  choices: [
    { text: "経験豊富な者の判断に従う", effects: { bias_speed: 1, D: -2 }, next: 1 },
    { text: "年長者たちが話し合って決める", effects: { bias_procedure: 1, D: +2 }, next: 1 },
    { text: "全員の合意を重視する", effects: { bias_avoidance: 1, D: +3 }, next: 1 },
    { text: "状況次第で判断を変える", effects: { bias_avoidance: 1, timePressure: +2 }, next: 1 }
  ]
},

/* ===== 1 ===== */
{
  title: "第1章：獲物の分配",
  preText: (s) => {
    let t = "";
    if (s.bias_speed > 0) t += "判断は、経験や勘に基づいて下されていた。\n";
    if (s.bias_procedure > 0) t += "話し合いが、群れの判断を支えていた。\n";
    if (s.bias_avoidance > 0) t += "結論を急がない姿勢が残っていた。\n";
    return t.trim();
  },
  text: () =>
    "狩りは成功したが、全員が同じだけ貢献したわけではない。\n\n" +
    "この獲物をどう分けるかは、\n" +
    "群れが何を正しいとするかを示す判断だった。",
  choices: [
    { text: "貢献度に応じて分ける", effects: { B: +2, D: -2 }, next: 2 },
    { text: "年長者が配分する", effects: { A: +2 }, next: 2 },
    { text: "全員に均等に分ける", effects: { D: +3 }, next: 2 },
    { text: "今回は基準を作らない", effects: { timePressure: +2 }, next: 2 }
  ]
},

/* ===== 2 ===== */
{
  title: "第2章：不足",
  preText: (s) => {
    let t = "";
    if (s.timePressure > 0) t += "決めきらなかったことが積み重なっていた。\n";
    return t.trim();
  },
  text: () =>
    "季節が変わり、獲物は減り始めていた。\n\n" +
    "移動するか、留まるか。\n" +
    "群れは判断を迫られていた。",
  choices: [
    { text: "獲物を求めて移動する", effects: { B: +2 }, next: 3 },
    { text: "留まってやりくりする", effects: { D: +2 }, next: 3 },
    { text: "偵察を出して様子を見る", effects: { timePressure: +2 }, next: 3 },
    { text: "群れを分ける", effects: { D: -2 }, next: 3 }
  ]
},

/* ===== 3 ===== */
{
  title: "第3章：留まるという選択",
  preText: (s) => {
    let t = "";
    if (s.D > 72) t += "群れの結束は保たれていた。\n";
    if (s.timePressure > 2) t += "判断の遅れが不安を生んでいた。\n";
    return t.trim();
  },
  text: () =>
    "移動を減らし、同じ場所に留まる時間が増えていた。\n\n" +
    "この選択は、群れの在り方を変え始めていた。",
  choices: [
    { text: "周囲を拠点として使う", effects: { A: +2 }, next: 4 },
    { text: "状況次第で再び移動する", effects: { bias_avoidance: 1 }, next: 4 },
    { text: "拠点を守る意識を持つ", effects: { B: +1 }, next: 4 },
    { text: "深く考えない", effects: { timePressure: +1 }, next: 4 }
  ]
},

/* ===== 4 ===== */
{
  title: "第4章：蓄積",
  preText: () =>
    "同じ場所に留まることで、\n" +
    "道具や資源が蓄えられるようになっていた。",
  text: () =>
    "余剰が生まれ始めていた。\n\n" +
    "それをどう扱うかは、\n" +
    "これまでになかった判断だった。",
  choices: [
    { text: "信頼できる者に管理を任せる", effects: { A: +2 }, next: 5 },
    { text: "皆で使うものとする", effects: { D: +2 }, next: 5 },
    { text: "必要な時だけ使う", effects: { bias_avoidance: 1 }, next: 5 },
    { text: "特に決めない", effects: { timePressure: +2 }, next: 5 }
  ]
},

/* ===== 5 ===== */
{
  title: "第5章：兆し",
  preText: () =>
    "留まる場所は、\n" +
    "単なる通過点ではなくなりつつあった。",
  text: () =>
    "人は、同じ場所で生き続ける可能性を意識し始めていた。\n\n" +
    "それが何を意味するのかは、\n" +
    "まだ誰にも分からなかった。",
  choices: [
    { text: "この場所を大切にする", effects: { A: +2 }, next: 6 },
    { text: "まだ移動の自由を残す", effects: { D: +1 }, next: 6 },
    { text: "外敵を意識し始める", effects: { B: +1 }, next: 6 },
    { text: "判断を急がない", effects: { timePressure: +2 }, next: 6 }
  ]
}

];

// engine.js から参照可能にする
window.scenarios = scenarios;