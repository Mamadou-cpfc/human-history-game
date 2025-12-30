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
},
/* ===== 6 ===== */
{
  title: "第6章：耕すという発想",
  preText: (s) => {
    let t = "";
    if (s.A > 70) t += "物事を継続的に管理しようとする意識が芽生えていた。\n";
    if (s.D > 70) t += "集団の合意は比較的保たれていた。\n";
    return t.trim();
  },
  text: () =>
    "同じ場所に留まる時間が長くなるにつれ、\n" +
    "人は気づき始めていた。\n\n" +
    "獲物を追うだけでなく、\n" +
    "食べ物を育てることはできないだろうか。",
  choices: [
    { text: "試しに植物を育ててみる", effects: { A: +2 }, next: 7 },
    { text: "狩猟採集を続ける", effects: { D: +1 }, next: 7 },
    { text: "一部の者だけに試させる", effects: { B: +1 }, next: 7 },
    { text: "深く考えない", effects: { timePressure: +2 }, next: 7 }
  ]
},

/* ===== 7 ===== */
{
  title: "第7章：労力の偏り",
  preText: (s) => {
    let t = "";
    if (s.A > 72) t += "役割の分担が意識され始めていた。\n";
    if (s.timePressure > 3) t += "決めきらなかった問題が残っていた。\n";
    return t.trim();
  },
  text: () =>
    "耕す者と、そうでない者。\n\n" +
    "労力の差が、\n" +
    "次第に目に見える形で現れ始めていた。",
  choices: [
    { text: "役割として認める", effects: { A: +2 }, next: 8 },
    { text: "全員が同じだけ関わるべきとする", effects: { D: +2 }, next: 8 },
    { text: "成果を出した者を優遇する", effects: { B: +2 }, next: 8 },
    { text: "問題視しない", effects: { timePressure: +2 }, next: 8 }
  ]
},

/* ===== 8 ===== */
{
  title: "第8章：余剰の発生",
  preText: (s) => {
    let t = "";
    if (s.A > 74) t += "管理の仕組みが参照され始めていた。\n";
    if (s.B > 72) t += "判断が一部に集まりつつあった。\n";
    return t.trim();
  },
  text: () =>
    "収穫は安定し始め、\n" +
    "消費しきれない余剰が生まれていた。\n\n" +
    "それは豊かさであると同時に、\n" +
    "新たな緊張の種でもあった。",
  choices: [
    { text: "備蓄として管理する", effects: { A: +2 }, next: 9 },
    { text: "必要な者に分け与える", effects: { D: +2 }, next: 9 },
    { text: "管理者を置く", effects: { B: +2 }, next: 9 },
    { text: "特に決めない", effects: { timePressure: +2 }, next: 9 }
  ]
},

/* ===== 9 ===== */
{
  title: "第9章：所有という概念",
  preText: (s) => {
    let t = "";
    if (s.B > 74) t += "権限の所在が意識され始めていた。\n";
    if (s.D < 70) t += "不満は完全には解消されていなかった。\n";
    return t.trim();
  },
  text: () =>
    "蓄えは、\n" +
    "誰のものなのか。\n\n" +
    "共有か、管理か、個人か。\n" +
    "明確な答えはまだ無かった。",
  choices: [
    { text: "集団のものとする", effects: { D: +2 }, next: 10 },
    { text: "管理者の裁量に任せる", effects: { B: +2 }, next: 10 },
    { text: "労働に応じて分ける", effects: { A: +2 }, next: 10 },
    { text: "あいまいにしておく", effects: { timePressure: +2 }, next: 10 }
  ]
},

/* ===== 10 ===== */
{
  title: "第10章：差異の固定",
  preText: (s) => {
    let t = "";
    if (s.B > 76) t += "判断の権限は特定の者に集中し始めていた。\n";
    if (s.A > 76) t += "制度としての形が整い始めていた。\n";
    return t.trim();
  },
  text: () =>
    "役割、所有、発言力。\n\n" +
    "それらの差は一時的なものではなく、\n" +
    "固定されたものになりつつあった。",
  choices: [
    { text: "差を前提として秩序を作る", effects: { A: +2 }, next: 11 },
    { text: "平等を保とうとする", effects: { D: +2 }, next: 11 },
    { text: "権威を明確にする", effects: { B: +2 }, next: 11 },
    { text: "深く触れない", effects: { timePressure: +2 }, next: 11 }
  ]
},

/* ===== 11 ===== */
{
  title: "第11章：支配と服従",
  preText: (s) => {
    let t = "";
    if (s.B > 78) t += "命令と従属の関係が現れていた。\n";
    if (s.D < 68) t += "不満は水面下で蓄積していた。\n";
    return t.trim();
  },
  text: () =>
    "誰かが決め、\n" +
    "誰かが従う。\n\n" +
    "それは効率的であり、\n" +
    "同時に危うさも孕んでいた。",
  choices: [
    { text: "支配を正当化する", effects: { B: +2 }, next: 12 },
    { text: "合意を重視し直す", effects: { D: +2 }, next: 12 },
    { text: "ルールとして固定する", effects: { A: +2 }, next: 12 },
    { text: "問題を先送りする", effects: { timePressure: +2 }, next: 12 }
  ]
},

/* ===== 12 ===== */
{
  title: "第12章：社会の輪郭",
  preText: (s) => {
    let t = "";
    if (s.A > 78) t += "社会は制度として認識され始めていた。\n";
    if (s.B > 78) t += "権力構造は明確になりつつあった。\n";
    return t.trim();
  },
  text: () =>
    "この集団は、\n" +
    "もはや単なる群れではなかった。\n\n" +
    "秩序があり、\n" +
    "役割があり、\n" +
    "従うべきものが生まれていた。",
  choices: [
    { text: "秩序を維持する", effects: { A: +1 }, next: 13 },
    { text: "権威を強める", effects: { B: +1 }, next: 13 },
    { text: "価値観の共有を重視する", effects: { D: +1 }, next: 13 },
    { text: "次の変化を待つ", effects: { timePressure: +1 }, next: 13 }
  ]
}

];

// engine.js から参照可能にする
window.scenarios = scenarios;