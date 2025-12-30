const scenarios = [

/* ===== 0 ===== */
{
  title: "第0章：最初の判断",
  preText: () =>
    "集団は定住し始めていた。\n" +
    "狩猟や採集によって得られる資源は限られており、\n" +
    "分配の仕方によって、生き残れる者とそうでない者が生まれ始めていた。",
  text: () =>
    "誰が、どのように資源の分配を決めるのか。\n" +
    "それを明確にしなければならない段階に来ていた。",
  choices: [
    {
      text: "その場で最も経験のある者が分配を決める",
      effects: { bias_speed: 1, A: -5, D: -5 },
      next: 1
    },
    {
      text: "役割を定め、分配の手順を決める",
      effects: { bias_procedure: 1, A: +5 },
      next: 1
    },
    {
      text: "なぜそう分けるのかを全員に説明する",
      effects: { bias_narrative: 1, D: +5 },
      next: 1
    },
    {
      text: "今回は明確に決めず、状況を見ながら対応する",
      effects: { bias_avoidance: 1, timePressure: +5 },
      next: 1
    }
  ]
},

/* ===== 1 ===== */
{
  title: "第1章：分配の結果",
  preText: (s) => {
    let t = "";
    if (s.bias_speed > 0) t += "資源の分配は迅速に行われていた。\n";
    if (s.bias_procedure > 0) t += "分配には一定の手順が設けられていた。\n";
    if (s.bias_narrative > 0) t += "分配の理由は、何らかの形で共有されていた。\n";
    if (s.bias_avoidance > 0) t += "分配の基準は、明確に定められていなかった。\n";
    if (s.timePressure > 25) t += "判断を先送りにした負荷が、少しずつ積み重なっていた。\n";
    return t.trim();
  },
  text: () =>
    "分配の結果に対して、不満を示す者が現れ始めた。\n" +
    "誰がその不満を受け止め、どのように対応するのかを決める必要があった。",
  choices: [
    { text: "影響力のある者がその場で調整する", effects: { bias_speed: 1, D: -5 }, next: 2 },
    { text: "不満を受け取る手順を定める", effects: { bias_procedure: 1, A: +5 }, next: 2 },
    { text: "分配の考え方を改めて説明する", effects: { bias_narrative: 1, D: +5 }, next: 2 },
    { text: "今は深刻ではないとして様子を見る", effects: { bias_avoidance: 1, timePressure: +5 }, next: 2 }
  ]
},

/* ===== 2 ===== */
{
  title: "第2章：不足",
  preText: (s) => {
    let t = "";
    if (s.bias_procedure > 0) t += "分配には一定の手順が残っていた。\n";
    if (s.bias_speed > 0) t += "調整は速かったが、粗さが残っていた。\n";
    if (s.timePressure > 25) t += "判断を先送りした影響が、目に見え始めていた。\n";
    return t.trim();
  },
  text: () =>
    "季節の変化により、資源が不足し始めた。\n" +
    "不足への対応を、誰がどのように決めるのかが問われていた。",
  choices: [
    { text: "経験のある者が配分を調整する", effects: { bias_speed: 1, D: -5 }, next: 3 },
    { text: "不足時の配分規則を定める", effects: { bias_procedure: 1, A: +5 }, next: 3 },
    { text: "不足の理由を共有する", effects: { bias_narrative: 1, D: +5 }, next: 3 },
    { text: "自然回復を待つ", effects: { bias_avoidance: 1, timePressure: +5 }, next: 3 }
  ]
},

/* ===== 3 ===== */
{
  title: "第3章：逸脱",
  preText: (s) => {
    let t = "";
    if (s.D < 70) t += "判断の理由は十分に共有されていなかった。\n";
    if (s.A > 70) t += "手順は参照されるようになっていた。\n";
    return t.trim();
  },
  text: () =>
    "分配に従わない者が現れ始めた。\n" +
    "逸脱への対処をどう決めるかが求められた。",
  choices: [
    { text: "影響力のある者が裁定する", effects: { bias_speed: 1, B: -5 }, next: 4 },
    { text: "逸脱時の手続きを定める", effects: { bias_procedure: 1, A: +5 }, next: 4 },
    { text: "規範を説明し直す", effects: { bias_narrative: 1, D: +5 }, next: 4 },
    { text: "深刻化するまで待つ", effects: { bias_avoidance: 1, timePressure: +5 }, next: 4 }
  ]
},

/* ===== 4 ===== */
{
  title: "第4章：集団の拡大",
  preText: (s) => {
    let t = "";
    if (s.bias_narrative > 0) t += "集団のあり方が言葉で共有されていた。\n";
    if (s.bias_speed > 1) t += "判断は少数に集中していた。\n";
    return t.trim();
  },
  text: () =>
    "新たな成員が加わり、集団は拡大し始めた。\n" +
    "受け入れの基準をどう決めるかが問題となった。",
  choices: [
    { text: "その都度判断する", effects: { bias_speed: 1 }, next: 5 },
    { text: "受け入れの基準を定める", effects: { bias_procedure: 1, A: +5 }, next: 5 },
    { text: "集団の考え方を共有する", effects: { bias_narrative: 1, D: +5 }, next: 5 },
    { text: "明確な基準を設けない", effects: { bias_avoidance: 1 }, next: 5 }
  ]
},

/* ===== 5 ===== */
{
  title: "第5章：境界",
  preText: (s) => {
    let t = "";
    if (s.bias_avoidance > 0) t += "決めなかった事項が積み重なっていた。\n";
    if (s.A > 75) t += "基準は参照可能になっていた。\n";
    return t.trim();
  },
  text: () =>
    "集団の内と外を分ける必要が語られ始めた。\n" +
    "境界をどう決めるかが問われた。",
  choices: [
    { text: "明確な線を引く", effects: { D: -5 }, next: 6 },
    { text: "柔軟な境界を保つ", effects: { D: +5 }, next: 6 },
    { text: "警戒を強める", effects: { B: -5 }, next: 6 },
    { text: "判断を先送りする", effects: { bias_avoidance: 1, timePressure: +5 }, next: 6 }
  ]
},

/* ===== 6 ===== */
{
  title: "第6章：定住の兆し",
  preText: (s) => {
    let t = "";
    if (s.timePressure > 35) t += "移動による調整は難しくなっていた。\n";
    if (s.A > 70) t += "継続的な運用が可能になりつつあった。\n";
    return t.trim();
  },
  text: () =>
    "移動ではなく、留まるという選択が現実味を帯びてきた。\n" +
    "定住に向けた判断をどう進めるかが求められた。",
  choices: [
    { text: "経験を頼りに判断する", effects: { bias_speed: 1 }, next: 7 },
    { text: "定住に関する取り決めを作る", effects: { bias_procedure: 1, A: +5 }, next: 7 },
    { text: "定住の意味を共有する", effects: { bias_narrative: 1, D: +5 }, next: 7 },
    { text: "決断を先延ばしにする", effects: { bias_avoidance: 1, timePressure: +5 }, next: 7 }
  ]
},

/* ===== 7 ===== */
{
  title: "第7章：蓄積",
  preText: (s) => {
    let t = "";
    if (s.bias_procedure > 1) t += "運用は繰り返され、蓄積が生まれていた。\n";
    if (s.D > 75) t += "判断の意味は共有されていた。\n";
    return t.trim();
  },
  text: () =>
    "資源が蓄えられるようになった。\n" +
    "蓄積の管理をどう決めるかが問われた。",
  choices: [
    { text: "信頼できる者に任せる", effects: { bias_speed: 1 }, next: 8 },
    { text: "管理の仕組みを作る", effects: { bias_procedure: 1, A: +5 }, next: 8 },
    { text: "管理方針を説明する", effects: { bias_narrative: 1, D: +5 }, next: 8 },
    { text: "特に決めずに運用する", effects: { bias_avoidance: 1 }, next: 8 }
  ]
},

/* ===== 8 ===== */
{
  title: "第8章：不均衡",
  preText: (s) => {
    let t = "";
    if (s.A < 65) t += "管理は人に依存していた。\n";
    if (s.bias_speed > 2) t += "判断の集中が目立っていた。\n";
    return t.trim();
  },
  text: () =>
    "蓄積の偏りが指摘され始めた。\n" +
    "不均衡への対応をどう決めるかが必要だった。",
  choices: [
    { text: "その場で調整する", effects: { bias_speed: 1 }, next: 9 },
    { text: "再配分の基準を作る", effects: { bias_procedure: 1, A: +5 }, next: 9 },
    { text: "納得を得るため説明する", effects: { bias_narrative: 1, D: +5 }, next: 9 },
    { text: "大きな問題ではないとする", effects: { bias_avoidance: 1 }, next: 9 }
  ]
},

/* ===== 9 ===== */
{
  title: "第9章：緊張",
  preText: (s) => {
    let t = "";
    if (s.D < 65) t += "不満は十分に解消されていなかった。\n";
    if (s.timePressure > 40) t += "判断の遅れが緊張を高めていた。\n";
    return t.trim();
  },
  text: () =>
    "集団内の緊張が高まっていた。\n" +
    "衝突をどう防ぐかを決める必要があった。",
  choices: [
    { text: "強い調停で抑える", effects: { bias_speed: 1, B: -5 }, next: 10 },
    { text: "衝突時の手順を定める", effects: { bias_procedure: 1, A: +5 }, next: 10 },
    { text: "共通の目的を語る", effects: { bias_narrative: 1, D: +5 }, next: 10 },
    { text: "事態が動くのを待つ", effects: { bias_avoidance: 1, timePressure: +5 }, next: 10 }
  ]
}
,
/* ===== 10 ===== */
{
  title: "第10章：安定",
  preText: (s) => {
    let t = "";
    if (s.A > 75) t += "運用は一定の安定を見せていた。\n";
    if (s.bias_avoidance > 1) t += "未処理の問題も残っていた。\n";
    return t.trim();
  },
  text: () =>
    "集団は、しばらくの安定を得ていた。\n" +
    "この状態をどう扱うかが次の判断となった。",
  choices: [
    { text: "現状を維持する", effects: { bias_avoidance: 1 }, next: 11 },
    { text: "仕組みを整理する", effects: { bias_procedure: 1, A: +5 }, next: 11 },
    { text: "価値観を再確認する", effects: { bias_narrative: 1, D: +5 }, next: 11 },
    { text: "次の拡張を考える", effects: { bias_speed: 1 }, next: 11 }
  ]
},

/* ===== 11 ===== */
{
  title: "第11章：転換点",
  preText: (s) => {
    let t = "";
    if (s.bias_procedure > 2) t += "判断は手順として定着しつつあった。\n";
    if (s.bias_narrative > 2) t += "集団の意味は語られ続けていた。\n";
    return t.trim();
  },
  text: () =>
    "移動と定住、拡張と維持のどちらを選ぶか。\n" +
    "集団は転換点に差し掛かっていた。",
  choices: [
    { text: "定住を前提に進む", effects: { A: +5 }, next: 12 },
    { text: "柔軟な移動を保つ", effects: { A: -5 }, next: 12 },
    { text: "方向性を語り合う", effects: { D: +5 }, next: 12 },
    { text: "判断を保留する", effects: { timePressure: +5 }, next: 12 }
  ]
}
];