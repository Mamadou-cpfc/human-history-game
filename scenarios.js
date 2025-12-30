{
  title: "第0章：最初の判断",

  /* 【A】前提状況（初期状態の提示） */
  preText: () =>
    "集団は定住し始めていた。\n" +
    "狩猟や採集によって得られる資源は限られており、\n" +
    "分配の仕方によって、生き残れる者とそうでない者が生まれ始めていた。",

  /* 【B】現在の局面（何を決める章か） */
  text: () =>
    "誰が、どのように資源の分配を決めるのか。\n" +
    "それを明確にしなければならない段階に来ていた。",

  /* 【C】選択肢（決め方の差） */
  choices: [

    {
      text: "その場で最も経験のある者が分配を決める",
      effects: {
        bias_speed: 1,   // 即応の癖
        A: -5,           // 制度化されない
        D: -5            // 説明は省かれる
      },
      next: 1
    },

    {
      text: "役割を定め、分配の手順を決める",
      effects: {
        bias_procedure: 1, // 手続き志向
        A: +5              // 制度の芽
      },
      next: 1
    },

    {
      text: "なぜそう分けるのかを全員に説明する",
      effects: {
        bias_narrative: 1, // 語り志向
        D: +5              // 正当性の芽
      },
      next: 1
    },

    {
      text: "今回は明確に決めず、状況を見ながら対応する",
      effects: {
        bias_avoidance: 1, // 回避の癖
        timePressure: +5   // 未決の負債
      },
      next: 1
    }

  ]
}
{
  title: "第1章：分配の結果",

  /* 【A】前章までの結果（因果を断定しない） */
  preText: (s) => {
    let t = "";

    if (s.bias_speed > 0) {
      t += "資源の分配は迅速に行われていた。\n";
    }
    if (s.bias_procedure > 0) {
      t += "分配には一定の手順が設けられていた。\n";
    }
    if (s.bias_narrative > 0) {
      t += "分配の理由は、何らかの形で共有されていた。\n";
    }
    if (s.bias_avoidance > 0) {
      t += "分配の基準は、明確に定められていなかった。\n";
    }

    if (s.timePressure > 25) {
      t += "判断を先送りにした負荷が、少しずつ積み重なっていた。\n";
    }

    return t.trim();
  },

  /* 【B】現在の局面（判断対象の明示） */
  text: () =>
    "分配の結果に対して、不満を示す者が現れ始めた。\n" +
    "誰がその不満を受け止め、どのように対応するのかを決める必要があった。",

  /* 【C】次の判断（決め方の差） */
  choices: [

    {
      // L0：即応・経験
      text: "影響力のある者がその場で調整する",
      effects: {
        bias_speed: 1,
        D: -5
      },
      next: 2
    },

    {
      // L1：制度・手続き
      text: "不満を受け取る手順を定める",
      effects: {
        bias_procedure: 1,
        A: +5
      },
      next: 2
    },

    {
      // L2：語り・正当化
      text: "分配の考え方を改めて説明する",
      effects: {
        bias_narrative: 1,
        D: +5
      },
      next: 2
    },

    {
      // β：回避・先送り
      text: "今は深刻ではないとして様子を見る",
      effects: {
        bias_avoidance: 1,
        timePressure: +5
      },
      next: 2
    }

  ]
}
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
},

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
/* ===== 12 ===== */
{
  title: "第12章：定住の決断",
  preText: (s) => {
    let t = "";
    if (s.A > 70) t += "取り決めは継続的に参照されていた。\n";
    if (s.timePressure > 40) t += "移動による調整は限界に近づいていた。\n";
    return t.trim();
  },
  text: () =>
    "移動ではなく、同じ場所に留まることが現実の前提となった。\n" +
    "定住に伴う運用を、どのように決めていくかが問われた。",
  choices: [
    { text: "経験者の判断に委ねる", effects: { bias_speed: 1 }, next: 13 },
    { text: "定住に関する取り決めを整える", effects: { bias_procedure: 1, A: +5 }, next: 13 },
    { text: "定住の意味を共有する", effects: { bias_narrative: 1, D: +5 }, next: 13 },
    { text: "詳細は後で決める", effects: { bias_avoidance: 1, timePressure: +5 }, next: 13 }
  ]
},

/* ===== 13 ===== */
{
  title: "第13章：土地",
  preText: (s) => {
    let t = "";
    if (s.bias_procedure > 2) t += "継続的な運用が前提となっていた。\n";
    if (s.bias_speed > 2) t += "判断は特定の者に集中しがちだった。\n";
    return t.trim();
  },
  text: () =>
    "留まることで、土地の使い方が問題となった。\n" +
    "誰がどこを使うのかを、どのように決めるかが必要だった。",
  choices: [
    { text: "影響力のある者が割り当てる", effects: { bias_speed: 1 }, next: 14 },
    { text: "利用規則を定める", effects: { bias_procedure: 1, A: +5 }, next: 14 },
    { text: "公平性の考え方を説明する", effects: { bias_narrative: 1, D: +5 }, next: 14 },
    { text: "慣習に任せる", effects: { bias_avoidance: 1 }, next: 14 }
  ]
},

/* ===== 14 ===== */
{
  title: "第14章：耕作",
  preText: (s) => {
    let t = "";
    if (s.A > 75) t += "利用の基準は共有されていた。\n";
    if (s.D < 65) t += "納得感にはばらつきがあった。\n";
    return t.trim();
  },
  text: () =>
    "土地を耕すことで、収穫が見込めるようになった。\n" +
    "耕作の方法と責任をどう決めるかが問われた。",
  choices: [
    { text: "経験者に任せる", effects: { bias_speed: 1 }, next: 15 },
    { text: "耕作の手順を決める", effects: { bias_procedure: 1, A: +5 }, next: 15 },
    { text: "耕作の意義を共有する", effects: { bias_narrative: 1, D: +5 }, next: 15 },
    { text: "各自に委ねる", effects: { bias_avoidance: 1 }, next: 15 }
  ]
},

/* ===== 15 ===== */
{
  title: "第15章：収穫",
  preText: (s) => {
    let t = "";
    if (s.bias_procedure > 3) t += "作業は繰り返され、型が生まれていた。\n";
    if (s.timePressure > 45) t += "失敗の余地は小さくなっていた。\n";
    return t.trim();
  },
  text: () =>
    "収穫が得られた。\n" +
    "その配分を、どのように決めるかが改めて問われた。",
  choices: [
    { text: "即座に分ける", effects: { bias_speed: 1 }, next: 16 },
    { text: "配分規則を明確にする", effects: { bias_procedure: 1, A: +5 }, next: 16 },
    { text: "配分理由を説明する", effects: { bias_narrative: 1, D: +5 }, next: 16 },
    { text: "今回は細かく決めない", effects: { bias_avoidance: 1 }, next: 16 }
  ]
},

/* ===== 16 ===== */
{
  title: "第16章：保存",
  preText: (s) => {
    let t = "";
    if (s.A > 80) t += "配分は予測可能になっていた。\n";
    if (s.bias_avoidance > 2) t += "未整理の部分も残っていた。\n";
    return t.trim();
  },
  text: () =>
    "余剰を保存することが可能になった。\n" +
    "保存の管理をどう決めるかが新たな課題となった。",
  choices: [
    { text: "信頼できる者に任せる", effects: { bias_speed: 1 }, next: 17 },
    { text: "保存管理の仕組みを作る", effects: { bias_procedure: 1, A: +5 }, next: 17 },
    { text: "保存の目的を共有する", effects: { bias_narrative: 1, D: +5 }, next: 17 },
    { text: "特別な管理はしない", effects: { bias_avoidance: 1 }, next: 17 }
  ]
},

/* ===== 17 ===== */
{
  title: "第17章：所有",
  preText: (s) => {
    let t = "";
    if (s.A < 70) t += "管理は人の判断に依存していた。\n";
    if (s.D > 75) t += "正当性は一定共有されていた。\n";
    return t.trim();
  },
  text: () =>
    "保存された資源が、誰のものかが問われ始めた。\n" +
    "所有の考え方をどう決めるかが必要だった。",
  choices: [
    { text: "影響力のある者が裁定する", effects: { bias_speed: 1 }, next: 18 },
    { text: "所有の基準を定める", effects: { bias_procedure: 1, A: +5 }, next: 18 },
    { text: "所有の理由を説明する", effects: { bias_narrative: 1, D: +5 }, next: 18 },
    { text: "曖昧なままにする", effects: { bias_avoidance: 1 }, next: 18 }
  ]
},

/* ===== 18 ===== */
{
  title: "第18章：不公平感",
  preText: (s) => {
    let t = "";
    if (s.D < 65) t += "判断の理由は十分に共有されていなかった。\n";
    if (s.timePressure > 50) t += "調整の余地は狭まっていた。\n";
    return t.trim();
  },
  text: () =>
    "配分や所有に対する不公平感が表面化し始めた。\n" +
    "これをどう扱うかを決める必要があった。",
  choices: [
    { text: "個別に調整する", effects: { bias_speed: 1 }, next: 19 },
    { text: "是正の手順を作る", effects: { bias_procedure: 1, A: +5 }, next: 19 },
    { text: "考え方を説明する", effects: { bias_narrative: 1, D: +5 }, next: 19 },
    { text: "深刻化するまで待つ", effects: { bias_avoidance: 1, timePressure: +5 }, next: 19 }
  ]
},

/* ===== 19 ===== */
{
  title: "第19章：徴発の兆し",
  preText: (s) => {
    let t = "";
    if (s.A > 80) t += "継続的な運用が前提になっていた。\n";
    if (s.bias_speed > 3) t += "判断は特定の経路に集中していた。\n";
    return t.trim();
  },
  text: () =>
    "共同の作業や備えのために、資源を集める必要が生じた。\n" +
    "どのように徴発するかを決める段階に入った。",
  choices: [
    { text: "必要に応じて集める", effects: { bias_speed: 1 }, next: 20 },
    { text: "定期的な徴発を決める", effects: { bias_procedure: 1, A: +5, C: +5 }, next: 20 },
    { text: "共同の目的を説明する", effects: { bias_narrative: 1, D: +5 }, next: 20 },
    { text: "自発性に任せる", effects: { bias_avoidance: 1 }, next: 20 }
  ]
},

/* ===== 20 ===== */
{
  title: "第20章：負担",
  preText: (s) => {
    let t = "";
    if (s.C > 60) t += "資源の集約は継続的に行われていた。\n";
    if (s.D < 65) t += "負担への納得感は十分ではなかった。\n";
    return t.trim();
  },
  text: () =>
    "徴発による負担が意識され始めた。\n" +
    "この負担をどう正当化し、調整するかが問われた。",
  choices: [
    { text: "即応的に軽減する", effects: { bias_speed: 1 }, next: 21 },
    { text: "負担調整の仕組みを作る", effects: { bias_procedure: 1, A: +5 }, next: 21 },
    { text: "必要性を説明する", effects: { bias_narrative: 1, D: +5 }, next: 21 },
    { text: "当面は我慢する", effects: { bias_avoidance: 1, timePressure: +5 }, next: 21 }
  ]
},

/* ===== 21 ===== */
{
  title: "第21章：共同体",
  preText: (s) => {
    let t = "";
    if (s.A > 85) t += "制度は共同体の前提となりつつあった。\n";
    if (s.bias_narrative > 3) t += "集団の意味は繰り返し語られていた。\n";
    return t.trim();
  },
  text: () =>
    "集団は、単なる寄り集まりではなくなっていた。\n" +
    "この共同体を、どのように維持していくかを決める段階に入った。",
  choices: [
    { text: "現状を踏襲する", effects: { bias_avoidance: 1 }, next: 22 },
    { text: "維持の仕組みを整える", effects: { bias_procedure: 1, A: +5 }, next: 22 },
    { text: "共同体の理念を語る", effects: { bias_narrative: 1, D: +5 }, next: 22 },
    { text: "次の拡張を視野に入れる", effects: { bias_speed: 1 }, next: 22 }
  ]
}
/* ===== 22 ===== */
{
  title: "第22章：代表",
  preText: (s) => {
    let t = "";
    if (s.A > 85) t += "取り決めは参照され、継続して運用されていた。\n";
    if (s.bias_speed > 3) t += "判断は特定の者を経由することが多かった。\n";
    return t.trim();
  },
  text: () =>
    "共同体を代表して判断を行う者の存在が意識され始めた。\n" +
    "代表の役割をどう定めるかが問われた。",
  choices: [
    { text: "実績のある者に委ねる", effects: { bias_speed: 1 }, next: 23 },
    { text: "代表の選出手続きを作る", effects: { bias_procedure: 1, A: +5 }, next: 23 },
    { text: "代表の意味を共有する", effects: { bias_narrative: 1, D: +5 }, next: 23 },
    { text: "状況ごとに任せる", effects: { bias_avoidance: 1 }, next: 23 }
  ]
},

/* ===== 23 ===== */
{
  title: "第23章：権限",
  preText: (s) => {
    let t = "";
    if (s.bias_procedure > 4) t += "役割は明文化されつつあった。\n";
    if (s.D < 65) t += "正当性の共有には差があった。\n";
    return t.trim();
  },
  text: () =>
    "代表がどこまで決めてよいのかが問題となった。\n" +
    "権限の範囲をどう定めるかが必要だった。",
  choices: [
    { text: "広く裁量を認める", effects: { bias_speed: 1 }, next: 24 },
    { text: "権限を規定する", effects: { bias_procedure: 1, A: +5 }, next: 24 },
    { text: "権限の理由を説明する", effects: { bias_narrative: 1, D: +5 }, next: 24 },
    { text: "曖昧なままにする", effects: { bias_avoidance: 1 }, next: 24 }
  ]
},

/* ===== 24 ===== */
{
  title: "第24章：防衛",
  preText: (s) => {
    let t = "";
    if (s.timePressure > 55) t += "即応が求められる場面が増えていた。\n";
    if (s.A > 85) t += "判断経路は整っていた。\n";
    return t.trim();
  },
  text: () =>
    "外部からの脅威に備える必要が現実の課題となった。\n" +
    "防衛をどう決め、誰が担うのかが問われた。",
  choices: [
    { text: "経験者を中心に対応する", effects: { bias_speed: 1, B: +5 }, next: 25 },
    { text: "防衛体制を組織する", effects: { bias_procedure: 1, A: +5, B: +5 }, next: 25 },
    { text: "防衛の必要性を共有する", effects: { bias_narrative: 1, D: +5 }, next: 25 },
    { text: "脅威は限定的と見る", effects: { bias_avoidance: 1 }, next: 25 }
  ]
},

/* ===== 25 ===== */
{
  title: "第25章：動員",
  preText: (s) => {
    let t = "";
    if (s.B > 60) t += "防衛に関する役割が形成されていた。\n";
    if (s.C < 60) t += "資源の裏付けは十分ではなかった。\n";
    return t.trim();
  },
  text: () =>
    "防衛のため、人や資源を動かす必要が生じた。\n" +
    "動員の方法をどう決めるかが問題となった。",
  choices: [
    { text: "必要時に呼び集める", effects: { bias_speed: 1 }, next: 26 },
    { text: "動員の規則を定める", effects: { bias_procedure: 1, A: +5 }, next: 26 },
    { text: "動員の目的を説明する", effects: { bias_narrative: 1, D: +5 }, next: 26 },
    { text: "自発性に任せる", effects: { bias_avoidance: 1 }, next: 26 }
  ]
},

/* ===== 26 ===== */
{
  title: "第26章：負傷",
  preText: (s) => {
    let t = "";
    if (s.bias_speed > 4) t += "対応は迅速だったが、犠牲も出ていた。\n";
    if (s.A > 90) t += "役割は固定化しつつあった。\n";
    return t.trim();
  },
  text: () =>
    "防衛の過程で、負傷者や損耗が発生した。\n" +
    "これをどう扱うかを決める必要があった。",
  choices: [
    { text: "その都度対応する", effects: { bias_speed: 1 }, next: 27 },
    { text: "補償の仕組みを作る", effects: { bias_procedure: 1, A: +5 }, next: 27 },
    { text: "共同の責任として説明する", effects: { bias_narrative: 1, D: +5 }, next: 27 },
    { text: "個人の問題とする", effects: { bias_avoidance: 1 }, next: 27 }
  ]
},

/* ===== 27 ===== */
{
  title: "第27章：外部接触",
  preText: (s) => {
    let t = "";
    if (s.B > 65) t += "防衛力は外部から認識され始めていた。\n";
    if (s.D > 75) t += "共同体の語りは共有されていた。\n";
    return t.trim();
  },
  text: () =>
    "外部集団との接触が、断続的ではなくなってきた。\n" +
    "関係の持ち方をどう決めるかが課題となった。",
  choices: [
    { text: "力を背景に交渉する", effects: { bias_speed: 1, externalPressure: +5 }, next: 28 },
    { text: "接触の手続きを整える", effects: { bias_procedure: 1, A: +5 }, next: 28 },
    { text: "関係の意味を語る", effects: { bias_narrative: 1, D: +5 }, next: 28 },
    { text: "必要最低限に留める", effects: { bias_avoidance: 1 }, next: 28 }
  ]
},

/* ===== 28 ===== */
{
  title: "第28章：取引",
  preText: (s) => {
    let t = "";
    if (s.externalPressure > 20) t += "外部との緊張は完全には解消されていなかった。\n";
    if (s.C > 65) t += "資源の融通が可能になっていた。\n";
    return t.trim();
  },
  text: () =>
    "外部との間で、資源や労力のやり取りが始まった。\n" +
    "取引の条件をどう決めるかが問われた。",
  choices: [
    { text: "都度交渉する", effects: { bias_speed: 1 }, next: 29 },
    { text: "取引の規則を作る", effects: { bias_procedure: 1, A: +5 }, next: 29 },
    { text: "互恵の考え方を説明する", effects: { bias_narrative: 1, D: +5 }, next: 29 },
    { text: "非公式に続ける", effects: { bias_avoidance: 1 }, next: 29 }
  ]
},

/* ===== 29 ===== */
{
  title: "第29章：依存",
  preText: (s) => {
    let t = "";
    if (s.bias_procedure > 5) t += "関係は安定していた。\n";
    if (s.externalPressure > 30) t += "一部で外部への依存が意識され始めた。\n";
    return t.trim();
  },
  text: () =>
    "取引が続く中で、相互の依存が生まれつつあった。\n" +
    "この依存をどう扱うかを決める必要があった。",
  choices: [
    { text: "柔軟に調整する", effects: { bias_speed: 1 }, next: 30 },
    { text: "依存の範囲を定める", effects: { bias_procedure: 1, A: +5 }, next: 30 },
    { text: "依存の意味を共有する", effects: { bias_narrative: 1, D: +5 }, next: 30 },
    { text: "問題視しない", effects: { bias_avoidance: 1 }, next: 30 }
  ]
},

/* ===== 30 ===== */
{
  title: "第30章：緊張の兆し",
  preText: (s) => {
    let t = "";
    if (s.externalPressure > 40) t += "外部との関係は不安定さを含んでいた。\n";
    if (s.B < 60) t += "防衛力の限界が意識され始めた。\n";
    return t.trim();
  },
  text: () =>
    "外部との摩擦が散発的に起こり始めた。\n" +
    "緊張への備えをどう決めるかが問われた。",
  choices: [
    { text: "即応体制を強化する", effects: { bias_speed: 1, B: +5 }, next: 31 },
    { text: "対処の手順を整える", effects: { bias_procedure: 1, A: +5 }, next: 31 },
    { text: "緊張の背景を説明する", effects: { bias_narrative: 1, D: +5 }, next: 31 },
    { text: "様子を見る", effects: { bias_avoidance: 1, timePressure: +5 }, next: 31 }
  ]
},

/* ===== 31 ===== */
{
  title: "第31章：政治",
  preText: (s) => {
    let t = "";
    if (s.A > 90) t += "判断は役割として固定化していた。\n";
    if (s.bias_narrative > 4) t += "共同体の語りは統合力を持ち始めていた。\n";
    return t.trim();
  },
  text: () =>
    "判断は、単なる調整ではなくなっていた。\n" +
    "共同体全体を方向づける行為として認識され始めていた。",
  choices: [
    { text: "現行の判断構造を維持する", effects: { bias_avoidance: 1 }, next: 32 },
    { text: "統治の枠組みを整える", effects: { bias_procedure: 1, A: +5 }, next: 32 },
    { text: "統治の正当性を語る", effects: { bias_narrative: 1, D: +5 }, next: 32 },
    { text: "外部への対応を優先する", effects: { bias_speed: 1 }, next: 32 }
  ]
}
/* ===== 32 ===== */
{
  title: "第32章：裁き",
  preText: (s) => {
    let t = "";
    if (s.A > 90) t += "役割と権限は安定して参照されていた。\n";
    if (s.D < 70) t += "判断の正当性は十分に共有されていなかった。\n";
    return t.trim();
  },
  text: () =>
    "対立や違反に対し、裁きを下す必要が生じていた。\n" +
    "誰がどのように裁くのかを決める段階に入った。",
  choices: [
    { text: "代表者が裁定する", effects: { bias_speed: 1 }, next: 33 },
    { text: "裁きの手順を定める", effects: { bias_procedure: 1, A: +5 }, next: 33 },
    { text: "裁きの理由を説明する", effects: { bias_narrative: 1, D: +5 }, next: 33 },
    { text: "重大な場合のみ裁く", effects: { bias_avoidance: 1 }, next: 33 }
  ]
},

/* ===== 33 ===== */
{
  title: "第33章：規範",
  preText: (s) => {
    let t = "";
    if (s.bias_procedure > 6) t += "判断は規範として蓄積されていた。\n";
    if (s.bias_speed > 5) t += "裁定は迅速だが集中していた。\n";
    return t.trim();
  },
  text: () =>
    "裁きが重なるにつれ、守るべき規範が意識され始めた。\n" +
    "何を基準とするかを決める必要があった。",
  choices: [
    { text: "慣習を基準にする", effects: { bias_speed: 1 }, next: 34 },
    { text: "規範を明文化する", effects: { bias_procedure: 1, A: +5 }, next: 34 },
    { text: "規範の意味を語る", effects: { bias_narrative: 1, D: +5 }, next: 34 },
    { text: "柔軟に扱う", effects: { bias_avoidance: 1 }, next: 34 }
  ]
},

/* ===== 34 ===== */
{
  title: "第34章：法の芽",
  preText: (s) => {
    let t = "";
    if (s.A > 95) t += "規範は手続きとして参照されていた。\n";
    if (s.D > 80) t += "規範の理由は共有されていた。\n";
    return t.trim();
  },
  text: () =>
    "規範は、個別判断を超えた基準として扱われ始めた。\n" +
    "これをどう維持するかが問われた。",
  choices: [
    { text: "裁定に委ね続ける", effects: { bias_speed: 1 }, next: 35 },
    { text: "法として整備する", effects: { bias_procedure: 1, A: +5 }, next: 35 },
    { text: "法の理念を共有する", effects: { bias_narrative: 1, D: +5 }, next: 35 },
    { text: "状況次第で運用する", effects: { bias_avoidance: 1 }, next: 35 }
  ]
},

/* ===== 35 ===== */
{
  title: "第35章：常設武装",
  preText: (s) => {
    let t = "";
    if (s.B > 70) t += "防衛は恒常的な役割になっていた。\n";
    if (s.C > 70) t += "資源の裏付けは確保されていた。\n";
    return t.trim();
  },
  text: () =>
    "防衛は一時的対応では足りなくなっていた。\n" +
    "常設の武装をどう位置づけるかが問題となった。",
  choices: [
    { text: "実力者に任せる", effects: { bias_speed: 1, B: +5 }, next: 36 },
    { text: "武装の制度を整える", effects: { bias_procedure: 1, A: +5, B: +5 }, next: 36 },
    { text: "武装の必要性を説明する", effects: { bias_narrative: 1, D: +5 }, next: 36 },
    { text: "規模を抑える", effects: { bias_avoidance: 1 }, next: 36 }
  ]
},

/* ===== 36 ===== */
{
  title: "第36章：外交",
  preText: (s) => {
    let t = "";
    if (s.externalPressure > 50) t += "外部との関係は緊張を含んでいた。\n";
    if (s.A > 95) t += "判断経路は安定していた。\n";
    return t.trim();
  },
  text: () =>
    "外部との関係は、個別対応では追いつかなくなっていた。\n" +
    "外交として扱う必要が生じていた。",
  choices: [
    { text: "代表者に一任する", effects: { bias_speed: 1 }, next: 37 },
    { text: "外交の手順を定める", effects: { bias_procedure: 1, A: +5 }, next: 37 },
    { text: "外交の方針を共有する", effects: { bias_narrative: 1, D: +5 }, next: 37 },
    { text: "必要時のみ対応する", effects: { bias_avoidance: 1 }, next: 37 }
  ]
},

/* ===== 37 ===== */
{
  title: "第37章：同盟",
  preText: (s) => {
    let t = "";
    if (s.externalPressure > 60) t += "単独での対応は難しくなっていた。\n";
    if (s.B > 75) t += "軍事力は交渉材料となっていた。\n";
    return t.trim();
  },
  text: () =>
    "外部集団との継続的な協力が検討され始めた。\n" +
    "同盟をどう扱うかを決める必要があった。",
  choices: [
    { text: "状況に応じて結ぶ", effects: { bias_speed: 1 }, next: 38 },
    { text: "同盟条件を明文化する", effects: { bias_procedure: 1, A: +5 }, next: 38 },
    { text: "同盟の意義を語る", effects: { bias_narrative: 1, D: +5 }, next: 38 },
    { text: "距離を保つ", effects: { bias_avoidance: 1 }, next: 38 }
  ]
},

/* ===== 38 ===== */
{
  title: "第38章：対外負担",
  preText: (s) => {
    let t = "";
    if (s.C > 75) t += "外部対応のための資源動員が可能だった。\n";
    if (s.D < 70) t += "負担への納得は十分ではなかった。\n";
    return t.trim();
  },
  text: () =>
    "外交や防衛のための負担が増していた。\n" +
    "この負担をどう配分するかが問われた。",
  choices: [
    { text: "必要に応じて調整する", effects: { bias_speed: 1 }, next: 39 },
    { text: "負担配分を制度化する", effects: { bias_procedure: 1, A: +5 }, next: 39 },
    { text: "負担の理由を説明する", effects: { bias_narrative: 1, D: +5 }, next: 39 },
    { text: "当面は黙認する", effects: { bias_avoidance: 1 }, next: 39 }
  ]
},

/* ===== 39 ===== */
{
  title: "第39章：反発",
  preText: (s) => {
    let t = "";
    if (s.D < 65) t += "説明は十分に行き届いていなかった。\n";
    if (s.timePressure > 60) t += "判断の余裕はほとんどなかった。\n";
    return t.trim();
  },
  text: () =>
    "負担に対する反発が顕在化し始めた。\n" +
    "これにどう対応するかを決める必要があった。",
  choices: [
    { text: "強く抑える", effects: { bias_speed: 1, B: +5 }, next: 40 },
    { text: "対処の手順を定める", effects: { bias_procedure: 1, A: +5 }, next: 40 },
    { text: "理解を求める", effects: { bias_narrative: 1, D: +5 }, next: 40 },
    { text: "様子を見る", effects: { bias_avoidance: 1, timePressure: +5 }, next: 40 }
  ]
},

/* ===== 40 ===== */
{
  title: "第40章：分岐の兆候",
  preText: (s) => {
    let t = "";
    if (s.A > 100) t += "統治は制度として完成度を高めていた。\n";
    if (s.B > 80) t += "暴力装置は常設化していた。\n";
    if (s.D > 85) t += "正当性は広く共有されていた。\n";
    return t.trim();
  },
  text: () =>
    "統治は安定しているようにも、不安定にも見えた。\n" +
    "どこに力点を置くかが、将来を左右し始めていた。",
  choices: [
    { text: "秩序維持を最優先する", effects: { bias_speed: 1 }, next: 41 },
    { text: "制度の精緻化を進める", effects: { bias_procedure: 1, A: +5 }, next: 41 },
    { text: "統治理念を強化する", effects: { bias_narrative: 1, D: +5 }, next: 41 },
    { text: "急激な変化を避ける", effects: { bias_avoidance: 1 }, next: 41 }
  ]
},

/* ===== 41 ===== */
{
  title: "第41章：国家",
  preText: (s) => {
    let t = "";
    if (s.A > 105) t += "制度は独立した構造として存在していた。\n";
    if (s.B > 85) t += "武装は統治の一部となっていた。\n";
    if (s.C > 80) t += "徴発は恒常的だった。\n";
    if (s.D > 85) t += "語りは共同体を超えて共有されていた。\n";
    return t.trim();
  },
  text: () =>
    "この共同体は、もはや単なる集団ではなかった。\n" +
    "統治装置としての国家が、明確に立ち上がっていた。",
  choices: [
    { text: "現行の統治を維持する", effects: { bias_avoidance: 1 }, next: 42 },
    { text: "国家制度を整備する", effects: { bias_procedure: 1, A: +5 }, next: 42 },
    { text: "国家の理念を定義する", effects: { bias_narrative: 1, D: +5 }, next: 42 },
    { text: "外部戦略を優先する", effects: { bias_speed: 1 }, next: 42 }
  ]
}
/* ===== 42 ===== */
{
  title: "第42章：拡張の誘惑",
  preText: (s) => {
    let t = "";
    if (s.B > 85) t += "武装は外部への行動を可能にしていた。\n";
    if (s.C > 80) t += "資源動員は継続可能だった。\n";
    return t.trim();
  },
  text: () =>
    "周辺地域への影響力拡大が現実的な選択肢として浮上した。\n" +
    "拡張をどう位置づけるかが問われていた。",
  choices: [
    { text: "機会を捉えて拡張する", effects: { bias_speed: 1, externalPressure: +10 }, next: 43 },
    { text: "拡張条件を制度化する", effects: { bias_procedure: 1, A: +5 }, next: 43 },
    { text: "拡張の意味を語る", effects: { bias_narrative: 1, D: +5 }, next: 43 },
    { text: "現状維持を優先する", effects: { bias_avoidance: 1 }, next: 43 }
  ]
},

/* ===== 43 ===== */
{
  title: "第43章：征服",
  preText: (s) => {
    let t = "";
    if (s.externalPressure > 60) t += "外部との緊張は高まっていた。\n";
    if (s.B > 90) t += "軍事行動は現実的だった。\n";
    return t.trim();
  },
  text: () =>
    "外部地域を制圧する行為が発生した。\n" +
    "征服後の扱いをどう決めるかが課題となった。",
  choices: [
    { text: "現地支配者を通じて統治する", effects: { bias_speed: 1 }, next: 44 },
    { text: "支配の枠組みを整える", effects: { bias_procedure: 1, A: +5 }, next: 44 },
    { text: "征服の正当性を語る", effects: { bias_narrative: 1, D: +5 }, next: 44 },
    { text: "深く関与しない", effects: { bias_avoidance: 1 }, next: 44 }
  ]
},

/* ===== 44 ===== */
{
  title: "第44章：属州",
  preText: (s) => {
    let t = "";
    if (s.A > 110) t += "統治の仕組みは外部にも適用可能だった。\n";
    if (s.D < 75) t += "支配の正当性は十分に共有されていなかった。\n";
    return t.trim();
  },
  text: () =>
    "支配地域は、中心とは異なる条件で管理され始めた。\n" +
    "属州としての扱いをどう定めるかが問われた。",
  choices: [
    { text: "柔軟に運用する", effects: { bias_speed: 1 }, next: 45 },
    { text: "属州統治を制度化する", effects: { bias_procedure: 1, A: +5 }, next: 45 },
    { text: "支配の理由を説明する", effects: { bias_narrative: 1, D: +5 }, next: 45 },
    { text: "最小限の関与に留める", effects: { bias_avoidance: 1 }, next: 45 }
  ]
},

/* ===== 45 ===== */
{
  title: "第45章：徴税の拡大",
  preText: (s) => {
    let t = "";
    if (s.C > 85) t += "資源徴発は常態化していた。\n";
    if (s.externalPressure > 70) t += "軍事と統治の費用は増大していた。\n";
    return t.trim();
  },
  text: () =>
    "支配地域からの資源徴収が不可欠となった。\n" +
    "徴税をどう設計するかが重要な判断となった。",
  choices: [
    { text: "状況に応じて徴収する", effects: { bias_speed: 1 }, next: 46 },
    { text: "税制を整備する", effects: { bias_procedure: 1, A: +5, C: +5 }, next: 46 },
    { text: "負担の意味を説明する", effects: { bias_narrative: 1, D: +5 }, next: 46 },
    { text: "緩やかに行う", effects: { bias_avoidance: 1 }, next: 46 }
  ]
},

/* ===== 46 ===== */
{
  title: "第46章：反乱",
  preText: (s) => {
    let t = "";
    if (s.D < 70) t += "支配への納得は十分ではなかった。\n";
    if (s.B > 95) t += "抑圧は可能だった。\n";
    return t.trim();
  },
  text: () =>
    "被支配地域で反乱が発生した。\n" +
    "これをどう鎮め、再発を防ぐかが問われた。",
  choices: [
    { text: "武力で制圧する", effects: { bias_speed: 1, B: +5 }, next: 47 },
    { text: "統治の仕組みを見直す", effects: { bias_procedure: 1, A: +5 }, next: 47 },
    { text: "支配の意義を語る", effects: { bias_narrative: 1, D: +5 }, next: 47 },
    { text: "一時的に譲歩する", effects: { bias_avoidance: 1 }, next: 47 }
  ]
},

/* ===== 47 ===== */
{
  title: "第47章：疲弊",
  preText: (s) => {
    let t = "";
    if (s.B > 100) t += "軍事行動は常態化していた。\n";
    if (s.C < 75) t += "財政的余裕は低下していた。\n";
    return t.trim();
  },
  text: () =>
    "拡張と鎮圧の繰り返しにより、国家は疲弊し始めていた。\n" +
    "この状態をどう扱うかが問われた。",
  choices: [
    { text: "即応的に対処を続ける", effects: { bias_speed: 1 }, next: 48 },
    { text: "体制の再編を図る", effects: { bias_procedure: 1, A: +5 }, next: 48 },
    { text: "犠牲の意味を語る", effects: { bias_narrative: 1, D: +5 }, next: 48 },
    { text: "問題を先送りする", effects: { bias_avoidance: 1, timePressure: +5 }, next: 48 }
  ]
},

/* ===== 48 ===== */
{
  title: "第48章：官僚",
  preText: (s) => {
    let t = "";
    if (s.A > 115) t += "統治は個人では回らなくなっていた。\n";
    if (s.bias_procedure > 7) t += "手続きが判断を支えていた。\n";
    return t.trim();
  },
  text: () =>
    "広大な領域を管理するため、専門の管理層が必要となった。\n" +
    "官僚の位置づけをどう定めるかが課題となった。",
  choices: [
    { text: "実務能力で登用する", effects: { bias_speed: 1 }, next: 49 },
    { text: "官僚制度を整える", effects: { bias_procedure: 1, A: +5 }, next: 49 },
    { text: "官僚の役割を説明する", effects: { bias_narrative: 1, D: +5 }, next: 49 },
    { text: "最小限に留める", effects: { bias_avoidance: 1 }, next: 49 }
  ]
},

/* ===== 49 ===== */
{
  title: "第49章：距離",
  preText: (s) => {
    let t = "";
    if (s.externalPressure > 80) t += "周辺環境は不安定だった。\n";
    if (s.D < 75) t += "中心と周縁の認識は乖離していた。\n";
    return t.trim();
  },
  text: () =>
    "中心と属州の距離が、心理的にも拡大していた。\n" +
    "この隔たりをどう扱うかが問われた。",
  choices: [
    { text: "迅速な指示で統制する", effects: { bias_speed: 1 }, next: 50 },
    { text: "連絡と報告の制度を整える", effects: { bias_procedure: 1, A: +5 }, next: 50 },
    { text: "一体性を語る", effects: { bias_narrative: 1, D: +5 }, next: 50 },
    { text: "現地に任せる", effects: { bias_avoidance: 1 }, next: 50 }
  ]
},

/* ===== 50 ===== */
{
  title: "第50章：帝国前夜",
  preText: (s) => {
    let t = "";
    if (s.A > 120) t += "統治装置は巨大化していた。\n";
    if (s.B > 105) t += "軍事力は領域を支えていた。\n";
    if (s.D > 90) t += "支配の語りは広範に共有されていた。\n";
    return t.trim();
  },
  text: () =>
    "この国家は、もはや単一の共同体ではなかった。\n" +
    "帝国として振る舞う準備が整いつつあった。",
  choices: [
    { text: "拡張を続ける", effects: { bias_speed: 1 }, next: 51 },
    { text: "帝国統治を制度化する", effects: { bias_procedure: 1, A: +5 }, next: 51 },
    { text: "帝国の理念を定義する", effects: { bias_narrative: 1, D: +5 }, next: 51 },
    { text: "内部の安定を優先する", effects: { bias_avoidance: 1 }, next: 51 }
  ]
},

/* ===== 51 ===== */
{
  title: "第51章：帝国",
  preText: (s) => {
    let t = "";
    if (s.A > 125) t += "制度は領域全体を覆っていた。\n";
    if (s.B > 110) t += "軍事力は統治の前提だった。\n";
    if (s.C > 90) t += "財政は帝国規模だった。\n";
    if (s.D > 95) t += "語りは支配を正当化していた。\n";
    return t.trim();
  },
  text: () =>
    "国家は帝国となった。\n" +
    "その規模と重みは、判断の質そのものを変え始めていた。",
  choices: [
    { text: "現行の運用を続ける", effects: { bias_avoidance: 1 }, next: 52 },
    { text: "帝国制度を洗練させる", effects: { bias_procedure: 1, A: +5 }, next: 52 },
    { text: "帝国理念を強化する", effects: { bias_narrative: 1, D: +5 }, next: 52 },
    { text: "外部圧力への対応を優先する", effects: { bias_speed: 1 }, next: 52 }
  ]
}
/* ===== 52 ===== */
{
  title: "第52章：正統性",
  preText: (s) => {
    let t = "";
    if (s.D > 95) t += "支配の語りは広く共有されていた。\n";
    if (s.A < 120) t += "制度理解には地域差があった。\n";
    return t.trim();
  },
  text: () =>
    "帝国の支配は力だけでは維持できなくなっていた。\n" +
    "正統性を何に求めるかが問われた。",
  choices: [
    { text: "伝統と血統に求める", effects: { bias_speed: 1, legitimacy_dynasty: +5 }, next: 53 },
    { text: "制度と法に求める", effects: { bias_procedure: 1, A: +5 }, next: 53 },
    { text: "理念や使命として語る", effects: { bias_narrative: 1, D: +5 }, next: 53 },
    { text: "状況ごとに使い分ける", effects: { bias_avoidance: 1 }, next: 53 }
  ]
},

/* ===== 53 ===== */
{
  title: "第53章：世襲",
  preText: (s) => {
    let t = "";
    if (s.legitimacy_dynasty > 10) t += "血統は支配の根拠となり始めていた。\n";
    if (s.bias_procedure > 8) t += "制度による補完が必要だった。\n";
    return t.trim();
  },
  text: () =>
    "権力の継承が、恒常的な問題となった。\n" +
    "帝国の頂点をどう引き継ぐかが焦点となった。",
  choices: [
    { text: "血統を最優先する", effects: { bias_speed: 1, legitimacy_dynasty: +5 }, next: 54 },
    { text: "継承手続きを制度化する", effects: { bias_procedure: 1, A: +5 }, next: 54 },
    { text: "継承の意味を語る", effects: { bias_narrative: 1, D: +5 }, next: 54 },
    { text: "実力で決まるとする", effects: { bias_avoidance: 1, B: +5 }, next: 54 }
  ]
},

/* ===== 54 ===== */
{
  title: "第54章：宗教",
  preText: (s) => {
    let t = "";
    if (s.D > 100) t += "語りは帝国全体に影響を持っていた。\n";
    if (s.externalPressure > 90) t += "外部文化の流入が進んでいた。\n";
    return t.trim();
  },
  text: () =>
    "多様な信仰や価値観が、帝国内に存在していた。\n" +
    "宗教を統治にどう位置づけるかが問われた。",
  choices: [
    { text: "支配宗教を定める", effects: { bias_speed: 1, D: +5 }, next: 55 },
    { text: "宗教を制度的に管理する", effects: { bias_procedure: 1, A: +5 }, next: 55 },
    { text: "信仰の意味を帝国理念に統合する", effects: { bias_narrative: 1, D: +10 }, next: 55 },
    { text: "宗教には関与しない", effects: { bias_avoidance: 1 }, next: 55 }
  ]
},

/* ===== 55 ===== */
{
  title: "第55章：分裂の兆し",
  preText: (s) => {
    let t = "";
    if (s.legitimacy_dynasty > 15) t += "血統への不満が周縁で高まっていた。\n";
    if (s.D < 95) t += "帝国理念は均一に浸透していなかった。\n";
    return t.trim();
  },
  text: () =>
    "地域ごとの不満や独自性が、目に見える形で現れ始めた。\n" +
    "これをどう扱うかが問われた。",
  choices: [
    { text: "力で抑え込む", effects: { bias_speed: 1, B: +10 }, next: 56 },
    { text: "自治制度を整える", effects: { bias_procedure: 1, A: +5 }, next: 56 },
    { text: "帝国の一体性を語る", effects: { bias_narrative: 1, D: +5 }, next: 56 },
    { text: "深刻化するまで様子を見る", effects: { bias_avoidance: 1, timePressure: +10 }, next: 56 }
  ]
},

/* ===== 56 ===== */
{
  title: "第56章：官僚腐敗",
  preText: (s) => {
    let t = "";
    if (s.A > 130) t += "制度は複雑化していた。\n";
    if (s.C > 95) t += "資源は集中管理されていた。\n";
    return t.trim();
  },
  text: () =>
    "管理層の腐敗や私物化が問題となり始めた。\n" +
    "これにどう対処するかが問われた。",
  choices: [
    { text: "厳罰で臨む", effects: { bias_speed: 1, B: +5 }, next: 57 },
    { text: "監査制度を強化する", effects: { bias_procedure: 1, A: +5 }, next: 57 },
    { text: "公正さを訴える", effects: { bias_narrative: 1, D: +5 }, next: 57 },
    { text: "黙認する", effects: { bias_avoidance: 1, timePressure: +5 }, next: 57 }
  ]
},

/* ===== 57 ===== */
{
  title: "第57章：外敵",
  preText: (s) => {
    let t = "";
    if (s.B > 115) t += "軍事力は依然として強大だった。\n";
    if (s.externalPressure > 100) t += "周辺勢力は成長していた。\n";
    return t.trim();
  },
  text: () =>
    "帝国の境界で、新たな脅威が現れた。\n" +
    "これにどう対処するかが問われた。",
  choices: [
    { text: "先制攻撃を行う", effects: { bias_speed: 1, B: +10 }, next: 58 },
    { text: "防衛線を再編する", effects: { bias_procedure: 1, A: +5 }, next: 58 },
    { text: "脅威を誇張し結束を促す", effects: { bias_narrative: 1, D: +5 }, next: 58 },
    { text: "外交で回避する", effects: { bias_avoidance: 1 }, next: 58 }
  ]
},

/* ===== 58 ===== */
{
  title: "第58章：財政限界",
  preText: (s) => {
    let t = "";
    if (s.C > 100) t += "徴税は帝国全域に及んでいた。\n";
    if (s.timePressure > 80) t += "短期対応が常態化していた。\n";
    return t.trim();
  },
  text: () =>
    "軍事と統治の費用が限界に近づいていた。\n" +
    "財政の立て直しをどう図るかが問われた。",
  choices: [
    { text: "さらに徴税を強化する", effects: { bias_speed: 1, C: +10 }, next: 59 },
    { text: "税制を再編する", effects: { bias_procedure: 1, A: +5 }, next: 59 },
    { text: "負担の正当性を語る", effects: { bias_narrative: 1, D: +5 }, next: 59 },
    { text: "一時的措置で凌ぐ", effects: { bias_avoidance: 1, timePressure: +10 }, next: 59 }
  ]
},

/* ===== 59 ===== */
{
  title: "第59章：帝国疲労",
  preText: (s) => {
    let t = "";
    if (s.B > 120) t += "軍事依存は高まっていた。\n";
    if (s.D < 95) t += "帝国への帰属意識は低下していた。\n";
    return t.trim();
  },
  text: () =>
    "帝国全体に、倦怠と不信が広がり始めていた。\n" +
    "この疲労をどう扱うかが問われた。",
  choices: [
    { text: "秩序を強化する", effects: { bias_speed: 1, B: +5 }, next: 60 },
    { text: "制度を刷新する", effects: { bias_procedure: 1, A: +5 }, next: 60 },
    { text: "再生の物語を語る", effects: { bias_narrative: 1, D: +10 }, next: 60 },
    { text: "自然回復を待つ", effects: { bias_avoidance: 1, timePressure: +10 }, next: 60 }
  ]
},

/* ===== 60 ===== */
{
  title: "第60章：分岐点",
  preText: (s) => {
    let t = "";
    if (s.A > 140) t += "制度改革は可能だった。\n";
    if (s.D > 105) t += "理念は再統合の力を持っていた。\n";
    if (s.B > 125) t += "暴力による統制も可能だった。\n";
    return t.trim();
  },
  text: () =>
    "帝国は、存続か変質か、あるいは崩壊かの岐路に立っていた。\n" +
    "どの方向に賭けるかを決める必要があった。",
  choices: [
    { text: "力による統合を選ぶ", effects: { bias_speed: 1 }, next: 61 },
    { text: "制度国家へ転換する", effects: { bias_procedure: 1 }, next: 61 },
    { text: "理念国家へ再定義する", effects: { bias_narrative: 1 }, next: 61 },
    { text: "成り行きに任せる", effects: { bias_avoidance: 1 }, next: 61 }
  ]
},

/* ===== 61 ===== */
{
  title: "第61章：帝国の姿",
  preText: (s) => {
    let t = "";
    if (s.bias_speed > 10) t += "帝国は恐怖によって秩序を保っていた。\n";
    if (s.bias_procedure > 10) t += "帝国は制度によって再構築されつつあった。\n";
    if (s.bias_narrative > 10) t += "帝国は理念によって再統合されていた。\n";
    if (s.timePressure > 100) t += "帝国は崩壊への慣性に委ねられていた。\n";
    return t.trim();
  },
  text: () =>
    "帝国は、選択の結果としての姿を取り始めていた。\n" +
    "それは安定か、延命か、あるいは終焉への序章だった。",
  choices: [
    { text: "次の世代へ引き継ぐ", effects: {}, next: 62 },
    { text: "支配構造をさらに強化する", effects: {}, next: 62 },
    { text: "変革を試み続ける", effects: {}, next: 62 },
    { text: "終わりを受け入れる", effects: {}, next: 62 }
  ]
}