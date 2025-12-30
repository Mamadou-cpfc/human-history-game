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
      detail: "形式や合意よりも、即時性と実地の知恵を信頼する判断。",
      effects: { bias_speed: 1, A: -5, D: -5 },
      next: 1
    },
    {
      text: "役割を定め、分配の手順を決める",
      detail: "人ではなく、やり方に判断を委ねようとする姿勢。",
      effects: { bias_procedure: 1, A: +5 },
      next: 1
    },
    {
      text: "なぜそう分けるのかを全員に説明する",
      detail: "配分そのものより、納得される過程を重視する考え方。",
      effects: { bias_narrative: 1, D: +5 },
      next: 1
    },
    {
      text: "今回は明確に決めず、状況を見ながら対応する",
      detail: "今は踏み込まず、柔軟さを保つことを選ぶ判断。",
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
    {
      text: "影響力のある者がその場で調整する",
      detail: "手続きを整えるより、今の不満を抑えることを優先する。",
      effects: { bias_speed: 1, D: -5 },
      next: 2
    },
    {
      text: "不満を受け取る手順を定める",
      detail: "誰の不満でも同じように扱える形を残そうとする判断。",
      effects: { bias_procedure: 1, A: +5 },
      next: 2
    },
    {
      text: "分配の考え方を改めて説明する",
      detail: "納得されることを通じて、対立を和らげようとする姿勢。",
      effects: { bias_narrative: 1, D: +5 },
      next: 2
    },
    {
      text: "今は深刻ではないとして様子を見る",
      detail: "問題を確定させず、事態の推移に委ねる判断。",
      effects: { bias_avoidance: 1, timePressure: +5 },
      next: 2
    }
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
    {
      text: "経験のある者が配分を調整する",
      detail: "緊急時には個人の判断力に頼るという考え方。",
      effects: { bias_speed: 1, D: -5 },
      next: 3
    },
    {
      text: "不足時の配分規則を定める",
      detail: "今回だけでなく、次の不足も想定して判断を残す姿勢。",
      effects: { bias_procedure: 1, A: +5 },
      next: 3
    },
    {
      text: "不足の理由を共有する",
      detail: "不満を抑えるより、理解される状況を作ろうとする立場。",
      effects: { bias_narrative: 1, D: +5 },
      next: 3
    },
    {
      text: "自然回復を待つ",
      detail: "人為的な調整を控え、環境の変化に賭ける判断。",
      effects: { bias_avoidance: 1, timePressure: +5 },
      next: 3
    }
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
    {
      text: "影響力のある者が裁定する",
      detail: "秩序の維持を優先し、判断を権威に集中させる考え方。",
      effects: { bias_speed: 1, B: -5 },
      next: 4
    },
    {
      text: "逸脱時の手続きを定める",
      detail: "誰が逸脱しても同じ扱いになる状態を目指す判断。",
      effects: { bias_procedure: 1, A: +5 },
      next: 4
    },
    {
      text: "規範を説明し直す",
      detail: "従わせるのではなく、理解されることを重視する姿勢。",
      effects: { bias_narrative: 1, D: +5 },
      next: 4
    },
    {
      text: "深刻化するまで待つ",
      detail: "今は介入せず、問題が明確になるのを待つ判断。",
      effects: { bias_avoidance: 1, timePressure: +5 },
      next: 4
    }
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
    {
      text: "その都度判断する",
      detail: "明確な基準を設けず、状況対応を重ねる姿勢。",
      effects: { bias_speed: 1 },
      next: 5
    },
    {
      text: "受け入れの基準を定める",
      detail: "拡大による混乱を防ぐため、線引きを明確にする判断。",
      effects: { bias_procedure: 1, A: +5 },
      next: 5
    },
    {
      text: "集団の考え方を共有する",
      detail: "価値観への同意を重視して、受け入れを進める立場。",
      effects: { bias_narrative: 1, D: +5 },
      next: 5
    },
    {
      text: "明確な基準を設けない",
      detail: "排除を避け、柔軟さを保つことを優先する判断。",
      effects: { bias_avoidance: 1 },
      next: 5
    }
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
    {
      text: "明確な線を引く",
      detail: "内と外をはっきり区別し、秩序を保とうとする判断。",
      effects: { D: -5 },
      next: 6
    },
    {
      text: "柔軟な境界を保つ",
      detail: "状況に応じて関係を変えられる余地を残す姿勢。",
      effects: { D: +5 },
      next: 6
    },
    {
      text: "警戒を強める",
      detail: "外部との摩擦を前提に、防御的に構える考え方。",
      effects: { B: -5 },
      next: 6
    },
    {
      text: "判断を先送りする",
      detail: "境界を確定させず、曖昧さを維持する判断。",
      effects: { bias_avoidance: 1, timePressure: +5 },
      next: 6
    }
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
    {
      text: "経験を頼りに判断する",
      detail: "過去の成功体験を基準に、柔軟に進める姿勢。",
      effects: { bias_speed: 1 },
      next: 7
    },
    {
      text: "定住に関する取り決めを作る",
      detail: "留まることを前提に、長期運用を考え始める判断。",
      effects: { bias_procedure: 1, A: +5 },
      next: 7
    },
    {
      text: "定住の意味を共有する",
      detail: "なぜ留まるのかを言葉で揃えようとする立場。",
      effects: { bias_narrative: 1, D: +5 },
      next: 7
    },
    {
      text: "決断を先延ばしにする",
      detail: "移動と定住のどちらにも賭けず、判断を保留する姿勢。",
      effects: { bias_avoidance: 1, timePressure: +5 },
      next: 7
    }
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
    {
      text: "信頼できる者に任せる",
      detail: "仕組みよりも人間関係に管理を委ねる考え方。",
      effects: { bias_speed: 1 },
      next: 8
    },
    {
      text: "管理の仕組みを作る",
      detail: "人が変わっても続く管理方法を残そうとする判断。",
      effects: { bias_procedure: 1, A: +5 },
      next: 8
    },
    {
      text: "管理方針を説明する",
      detail: "蓄積の扱いについて納得を得ることを重視する姿勢。",
      effects: { bias_narrative: 1, D: +5 },
      next: 8
    },
    {
      text: "特に決めずに運用する",
      detail: "明文化を避け、慣行に任せる判断。",
      effects: { bias_avoidance: 1 },
      next: 8
    }
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
    {
      text: "その場で調整する",
      detail: "不満が出た都度、即応的に修正する姿勢。",
      effects: { bias_speed: 1 },
      next: 9
    },
    {
      text: "再配分の基準を作る",
      detail: "偏りが生じた場合の対処を事前に決めておく判断。",
      effects: { bias_procedure: 1, A: +5 },
      next: 9
    },
    {
      text: "納得を得るため説明する",
      detail: "数値よりも、理解される理由を重視する立場。",
      effects: { bias_narrative: 1, D: +5 },
      next: 9
    },
    {
      text: "大きな問題ではないとする",
      detail: "現時点では許容範囲とみなし、介入を控える判断。",
      effects: { bias_avoidance: 1 },
      next: 9
    }
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
    {
      text: "強い調停で抑える",
      detail: "衝突を未然に防ぐため、力による制御を選ぶ姿勢。",
      effects: { bias_speed: 1, B: -5 },
      next: 9
    },
    {
      text: "衝突時の手順を定める",
      detail: "衝突そのものを前提に、被害を抑える考え方。",
      effects: { bias_procedure: 1, A: +5 },
      next: 9
    },
    {
      text: "共通の目的を語る",
      detail: "対立よりも、共有される意味を再確認する立場。",
      effects: { bias_narrative: 1, D: +5 },
      next: 9
    },
    {
      text: "事態が動くのを待つ",
      detail: "今は介入せず、状況の変化に委ねる判断。",
      effects: { bias_avoidance: 1, timePressure: +5 },
      next: 9
    }
  ]
}

];