const scenarios = [

/* ===== 0 ===== */
{
  title: "第0章：分けるという行為",
  preText: () =>
    "人々は移動しながら生きていた。\n" +
    "獲物を追い、水を探し、季節に応じて居場所を変える生活が続いていた。",
  text: () =>
    "同じ場所に戻る回数が増え、集団は一時的に留まるようになっていた。\n" +
    "獲物や食料をどう分けるかは、もはや偶然に任せられない問題となっていた。\n" +
    "誰が、どのように分配を決めるのか。\n" +
    "それは生存と同時に、従う・従わないの境界を作る行為だった。",
  choices: [
    {
      text: "経験のある狩人が判断する",
      detail: "即応性は高いが、理由は共有されない。",
      effects: { bias_speed: 1, D: -5 },
      next: 1
    },
    {
      text: "年長者たちで話し合って決める",
      detail: "手順は曖昧だが、合意を重視する。",
      effects: { bias_procedure: 1, A: +5 },
      next: 1
    },
    {
      text: "なぜそう分けるかを皆に語る",
      detail: "時間はかかるが、納得を生む。",
      effects: { bias_narrative: 1, D: +5 },
      next: 1
    },
    {
      text: "明確に決めず、その都度対応する",
      detail: "衝突は避けられるが、未決が残る。",
      effects: { bias_avoidance: 1, timePressure: +5 },
      next: 1
    }
  ]
},

/* ===== 1 ===== */
{
  title: "第1章：残る者、足りぬ者",
  preText: (s) => {
    let t = "";
    if (s.bias_speed > 0) t += "判断は素早く下されていた。\n";
    if (s.bias_narrative > 0) t += "分配の理由は、言葉として共有されていた。\n";
    if (s.bias_avoidance > 0) t += "判断は曖昧なまま残されていた。\n";
    return t.trim();
  },
  text: () =>
    "分配の後、満腹な者と空腹な者が生まれていた。\n" +
    "露骨な不満はまだない。\n" +
    "だが視線が変わり、集まりから距離を取る者が現れ始めていた。\n" +
    "その兆しに、誰がどう対応するかが問われていた。",
  choices: [
    {
      text: "不満を示す者に直接声をかける",
      detail: "個別対応で場を収めようとする。",
      effects: { bias_speed: 1 },
      next: 2
    },
    {
      text: "分配のやり方を見直す場を設ける",
      detail: "再発防止を狙う。",
      effects: { bias_procedure: 1, A: +5 },
      next: 2
    },
    {
      text: "集団の存続を理由に語る",
      detail: "納得を重ねることを選ぶ。",
      effects: { bias_narrative: 1, D: +5 },
      next: 2
    },
    {
      text: "今は問題化していないとして放置する",
      detail: "摩擦を避ける。",
      effects: { bias_avoidance: 1, timePressure: +5 },
      next: 2
    }
  ]
},

/* ===== 2 ===== */
{
  title: "第2章：戻る場所",
  preText: (s) => {
    let t = "";
    if (s.timePressure > 5) t += "未決の不満は解消されていなかった。\n";
    if (s.A > 75) t += "一定の秩序は保たれていた。\n";
    return t.trim();
  },
  text: () =>
    "季節が巡り、人々は再び同じ場所へ戻ってきた。\n" +
    "ここが安全であることは、すでに皆が知っていた。\n" +
    "だが『戻る場所』は、『離れない場所』へと変わりつつあった。\n" +
    "定住の兆しが、問題を複雑にしていた。",
  choices: [
    {
      text: "経験者の判断に任せ続ける",
      detail: "柔軟だが、属人的になる。",
      effects: { bias_speed: 1 },
      next: 3
    },
    {
      text: "留まる前提で取り決めを考え始める",
      detail: "将来を見据える。",
      effects: { bias_procedure: 1, A: +5 },
      next: 3
    },
    {
      text: "ここに留まる意味を共有する",
      detail: "意識を揃える。",
      effects: { bias_narrative: 1, D: +5 },
      next: 3
    },
    {
      text: "まだ仮の滞在だと考える",
      detail: "決断を避ける。",
      effects: { bias_avoidance: 1, timePressure: +5 },
      next: 3
    }
  ]
},

/* ===== 3 ===== */
{
  title: "第3章：従わない者",
  preText: (s) => {
    let t = "";
    if (s.D < 65) t += "判断の理由は十分に共有されていなかった。\n";
    if (s.A > 70) t += "取り決めは参照され始めていた。\n";
    return t.trim();
  },
  text: () =>
    "分配や取り決めに従わない者が現れた。\n" +
    "彼らは声高に反発したわけではない。\n" +
    "ただ、従わなかった。\n" +
    "その行為が許されるかどうかが、集団全体に影響を及ぼし始めていた。",
  choices: [
    {
      text: "影響力のある者が裁定する",
      detail: "即時性はあるが、反感を残す。",
      effects: { bias_speed: 1, B: -5 },
      next: 4
    },
    {
      text: "従わない場合の対応を定める",
      detail: "再発防止を狙う。",
      effects: { bias_procedure: 1, A: +5 },
      next: 4
    },
    {
      text: "なぜ従う必要があるかを語る",
      detail: "納得を積み重ねる。",
      effects: { bias_narrative: 1, D: +5 },
      next: 4
    },
    {
      text: "様子を見る",
      detail: "衝突を避ける。",
      effects: { bias_avoidance: 1, timePressure: +5 },
      next: 4
    }
  ]
},

/* ===== 4 ===== */
{
  title: "第4章：境界の意識",
  preText: (s) => {
    let t = "";
    if (s.bias_narrative > 1) t += "集団の意味は言葉として共有されていた。\n";
    if (s.bias_speed > 1) t += "判断は特定の者に集中していた。\n";
    return t.trim();
  },
  text: () =>
    "集団の内と外を意識するようになっていた。\n" +
    "ここに属する者と、そうでない者。\n" +
    "その境界をどう扱うかが、次の問題となった。",
  choices: [
    {
      text: "明確な線を引く",
      detail: "秩序は保たれるが、排除が生じる。",
      effects: { D: -5 },
      next: 5
    },
    {
      text: "状況に応じて判断する",
      detail: "柔軟だが曖昧さが残る。",
      effects: { bias_speed: 1 },
      next: 5
    },
    {
      text: "境界の意味を語る",
      detail: "納得を重視する。",
      effects: { bias_narrative: 1, D: +5 },
      next: 5
    },
    {
      text: "明確に決めない",
      detail: "対立を避ける。",
      effects: { bias_avoidance: 1, timePressure: +5 },
      next: 5
    }
  ]
},

/* ===== 5 ===== */
{
  title: "第5章：留まるという選択",
  preText: (s) => {
    let t = "";
    if (s.timePressure > 10) t += "先送りされた判断が重なっていた。\n";
    if (s.A > 75) t += "運用は安定し始めていた。\n";
    return t.trim();
  },
  text: () =>
    "移動ではなく、留まることが現実的な選択となっていた。\n" +
    "留まるということは、逃げないということでもあった。\n" +
    "問題は積み重なり、無視できなくなっていた。",
  choices: [
    {
      text: "経験を重ねながら対応する",
      detail: "柔軟性を保つ。",
      effects: { bias_speed: 1 },
      next: 6
    },
    {
      text: "定住を前提とした取り決めを作る",
      detail: "長期運用を意識する。",
      effects: { bias_procedure: 1, A: +5 },
      next: 6
    },
    {
      text: "定住の意味を言葉にする",
      detail: "意識を揃える。",
      effects: { bias_narrative: 1, D: +5 },
      next: 6
    },
    {
      text: "決断を避ける",
      detail: "衝突を先送りする。",
      effects: { bias_avoidance: 1, timePressure: +5 },
      next: 6
    }
  ]
},

/* ===== 6 ===== */
{
  title: "第6章：蓄え",
  preText: (s) => {
    let t = "";
    if (s.bias_procedure > 1) t += "運用は繰り返され、形を持ち始めていた。\n";
    if (s.D > 75) t += "判断は納得を伴っていた。\n";
    return t.trim();
  },
  text: () =>
    "余剰が生まれ、蓄えが必要となっていた。\n" +
    "誰が管理するのか。\n" +
    "それは信頼と支配の境界に触れる問題だった。",
  choices: [
    {
      text: "信頼できる者に任せる",
      detail: "迅速だが属人的。",
      effects: { bias_speed: 1 },
      next: 7
    },
    {
      text: "管理の仕組みを作る",
      detail: "再現性を重視する。",
      effects: { bias_procedure: 1, A: +5 },
      next: 7
    },
    {
      text: "管理理由を共有する",
      detail: "納得を積み重ねる。",
      effects: { bias_narrative: 1, D: +5 },
      next: 7
    },
    {
      text: "特に決めない",
      detail: "摩擦を避ける。",
      effects: { bias_avoidance: 1, timePressure: +5 },
      next: 7
    }
  ]
},

/* ===== 7 ===== */
{
  title: "第7章：偏り",
  preText: (s) => {
    let t = "";
    if (s.A < 65) t += "管理は人に依存していた。\n";
    if (s.bias_speed > 2) t += "判断は集中していた。\n";
    return t.trim();
  },
  text: () =>
    "蓄えに偏りが生まれていた。\n" +
    "疑念はまだ小さい。\n" +
    "だが、見過ごせるものではなくなりつつあった。",
  choices: [
    {
      text: "その場で調整する",
      detail: "即応する。",
      effects: { bias_speed: 1 },
      next: 8
    },
    {
      text: "再配分の基準を設ける",
      detail: "制度化する。",
      effects: { bias_procedure: 1, A: +5 },
      next: 8
    },
    {
      text: "理由を説明する",
      detail: "納得を試みる。",
      effects: { bias_narrative: 1, D: +5 },
      next: 8
    },
    {
      text: "問題視しない",
      detail: "摩擦を避ける。",
      effects: { bias_avoidance: 1, timePressure: +5 },
      next: 8
    }
  ]
},

/* ===== 8 ===== */
{
  title: "第8章：緊張",
  preText: (s) => {
    let t = "";
    if (s.D < 65) t += "不満は解消されていなかった。\n";
    if (s.timePressure > 15) t += "未決が積み重なっていた。\n";
    return t.trim();
  },
  text: () =>
    "集団内の空気は変わっていた。\n" +
    "言葉は減り、距離が増えた。\n" +
    "衝突は避けられているが、消えてはいなかった。",
  choices: [
    {
      text: "強い調停で抑える",
      detail: "短期的安定。",
      effects: { bias_speed: 1, B: -5 },
      next: 9
    },
    {
      text: "衝突時の手順を決める",
      detail: "再発を防ぐ。",
      effects: { bias_procedure: 1, A: +5 },
      next: 9
    },
    {
      text: "共通の目的を語る",
      detail: "結束を試みる。",
      effects: { bias_narrative: 1, D: +5 },
      next: 9
    },
    {
      text: "事態が動くのを待つ",
      detail: "決断を避ける。",
      effects: { bias_avoidance: 1, timePressure: +5 },
      next: 9
    }
  ]
},

/* ===== 9 ===== */
{
  title: "第9章：定着",
  preText: (s) => {
    let t = "";
    if (s.A > 80) t += "運用は安定していた。\n";
    if (s.bias_avoidance > 2) t += "未解決の問題は残っていた。\n";
    return t.trim();
  },
  text: () =>
    "集団は、一定の形を保っていた。\n" +
    "従う理由は、まだ完全ではない。\n" +
    "だが、ここまで来たこと自体が一つの結果だった。\n" +
    "この構造は、次の段階へと引き継がれていく。",
  choices: [
    {
      text: "現状を維持する",
      detail: "安定を優先する。",
      effects: { bias_avoidance: 1 },
      next: 10
    },
    {
      text: "仕組みを整理する",
      detail: "次を見据える。",
      effects: { bias_procedure: 1, A: +5 },
      next: 10
    },
    {
      text: "価値観を再確認する",
      detail: "意味を固める。",
      effects: { bias_narrative: 1, D: +5 },
      next: 10
    },
    {
      text: "拡張を考え始める",
      detail: "新たな段階へ進む。",
      effects: { bias_speed: 1 },
      next: 10
    }
  ]
},
/* ===== 10 ===== */
{
  title: "第10章：決める者の固定",
  preText: (s) => {
    let t = "";
    if (s.A > 80) t += "取り決めは繰り返され、参照されるものになっていた。\n";
    if (s.bias_speed > 2) t += "判断は特定の者に集中していた。\n";
    return t.trim();
  },
  text: () =>
    "判断は、その場ごとではなくなっていた。\n" +
    "誰が決めるかは、暗黙のうちに固定されつつあった。\n" +
    "それは効率を生み、同時に問いを生んだ。\n" +
    "――なぜ、その者が決めるのか。",
  choices: [
    {
      text: "経験と実績を理由に据える",
      detail: "能力による正当化。",
      effects: { bias_speed: 1, D: -5 },
      next: 11
    },
    {
      text: "役割として明文化する",
      detail: "制度として固定する。",
      effects: { bias_procedure: 1, A: +5 },
      next: 11
    },
    {
      text: "語りとして共有する",
      detail: "意味づけを行う。",
      effects: { bias_narrative: 1, D: +5 },
      next: 11
    },
    {
      text: "深く考えず流れに任せる",
      detail: "問いを避ける。",
      effects: { bias_avoidance: 1, timePressure: +5 },
      next: 11
    }
  ]
},

/* ===== 11 ===== */
{
  title: "第11章：従うという行為",
  preText: (s) => {
    let t = "";
    if (s.D < 65) t += "判断の理由は十分に共有されていなかった。\n";
    if (s.B < 70) t += "強制はまだ限定的だった。\n";
    return t.trim();
  },
  text: () =>
    "決定に従う者が増えていた。\n" +
    "それは納得からか、慣れからか、恐れからか。\n" +
    "理由は一様ではなかったが、行動は揃っていた。\n" +
    "この状態をどう扱うかが問われていた。",
  choices: [
    {
      text: "従うことを当然とする",
      detail: "慣習に委ねる。",
      effects: { bias_speed: 1 },
      next: 12
    },
    {
      text: "従う条件を整理する",
      detail: "制度的に明確化。",
      effects: { bias_procedure: 1, A: +5 },
      next: 12
    },
    {
      text: "従う理由を語り続ける",
      detail: "正当性を積み上げる。",
      effects: { bias_narrative: 1, D: +5 },
      next: 12
    },
    {
      text: "問いを避ける",
      detail: "摩擦を回避。",
      effects: { bias_avoidance: 1, timePressure: +5 },
      next: 12
    }
  ]
},

/* ===== 12 ===== */
{
  title: "第12章：命令と実行",
  preText: (s) => {
    let t = "";
    if (s.bias_procedure > 2) t += "判断は手順として定着していた。\n";
    if (s.bias_speed > 3) t += "即断が常態化していた。\n";
    return t.trim();
  },
  text: () =>
    "決定は、指示となり、実行されるようになった。\n" +
    "誰かが命じ、誰かが従う。\n" +
    "その分離は、集団を効率化すると同時に、緊張を孕んでいた。",
  choices: [
    {
      text: "命令を迅速に下す",
      detail: "速度を優先。",
      effects: { bias_speed: 1, B: -5 },
      next: 13
    },
    {
      text: "命令の手順を定める",
      detail: "責任を整理する。",
      effects: { bias_procedure: 1, A: +5 },
      next: 13
    },
    {
      text: "命令の意味を説明する",
      detail: "納得を補う。",
      effects: { bias_narrative: 1, D: +5 },
      next: 13
    },
    {
      text: "命令を最小限に留める",
      detail: "摩擦を避ける。",
      effects: { bias_avoidance: 1, timePressure: +5 },
      next: 13
    }
  ]
},

/* ===== 13 ===== */
{
  title: "第13章：反発",
  preText: (s) => {
    let t = "";
    if (s.D < 60) t += "納得は十分ではなかった。\n";
    if (s.timePressure > 20) t += "未処理の不満が蓄積していた。\n";
    return t.trim();
  },
  text: () =>
    "命令に従わない動きが、部分的に現れた。\n" +
    "それは反乱ではない。\n" +
    "だが、無視できるものでもなかった。",
  choices: [
    {
      text: "力で抑える",
      detail: "即時的な安定。",
      effects: { bias_speed: 1, B: -10 },
      next: 14
    },
    {
      text: "対応手続きを設ける",
      detail: "再発防止。",
      effects: { bias_procedure: 1, A: +5 },
      next: 14
    },
    {
      text: "不満の理由を聞く",
      detail: "正当性を補う。",
      effects: { bias_narrative: 1, D: +5 },
      next: 14
    },
    {
      text: "事態が収まるのを待つ",
      detail: "判断を避ける。",
      effects: { bias_avoidance: 1, timePressure: +5 },
      next: 14
    }
  ]
},

/* ===== 14 ===== */
{
  title: "第14章：守る者",
  preText: (s) => {
    let t = "";
    if (s.B < 65) t += "強制力はまだ限定的だった。\n";
    if (s.A > 80) t += "秩序は維持されていた。\n";
    return t.trim();
  },
  text: () =>
    "集団を守る役割が明確になり始めていた。\n" +
    "外からの脅威、内なる衝突。\n" +
    "それに対応する者の存在は、疑いなく認識されていた。",
  choices: [
    {
      text: "実力のある者に任せる",
      detail: "即応性を重視。",
      effects: { bias_speed: 1, B: -5 },
      next: 15
    },
    {
      text: "守る役割を制度化する",
      detail: "権限を明確化。",
      effects: { bias_procedure: 1, A: +5 },
      next: 15
    },
    {
      text: "守る理由を語る",
      detail: "納得を伴わせる。",
      effects: { bias_narrative: 1, D: +5 },
      next: 15
    },
    {
      text: "必要時のみ対応する",
      detail: "常設を避ける。",
      effects: { bias_avoidance: 1, timePressure: +5 },
      next: 15
    }
  ]
},

/* ===== 15 ===== */
{
  title: "第15章：秩序の輪郭",
  preText: (s) => {
    let t = "";
    if (s.A > 85) t += "秩序は安定していた。\n";
    if (s.D < 60) t += "正当性は揺らいでいた。\n";
    return t.trim();
  },
  text: () =>
    "守る者と従う者。\n" +
    "決める者と実行する者。\n" +
    "役割は分かれ、秩序は形を持ち始めていた。\n" +
    "それは、国家以前の構造だった。",
  choices: [
    {
      text: "現状を維持する",
      detail: "安定を優先。",
      effects: { bias_avoidance: 1 },
      next: 16
    },
    {
      text: "役割関係を整理する",
      detail: "制度を固める。",
      effects: { bias_procedure: 1, A: +5 },
      next: 16
    },
    {
      text: "秩序の意味を再確認する",
      detail: "正当性を補強。",
      effects: { bias_narrative: 1, D: +5 },
      next: 16
    },
    {
      text: "さらなる拡張を考える",
      detail: "次段階へ。",
      effects: { bias_speed: 1 },
      next: 16
    }
  ]
},

/* ===== 16 ===== */
{
  title: "第16章：境界の外",
  preText: (s) => {
    let t = "";
    if (s.bias_speed > 3) t += "判断は内向きだった。\n";
    if (s.bias_narrative > 3) t += "内的結束は強まっていた。\n";
    return t.trim();
  },
  text: () =>
    "集団の外との接触が増えていた。\n" +
    "交易、衝突、あるいは吸収。\n" +
    "外との関係は、内の構造を揺さぶった。",
  choices: [
    {
      text: "力を示す",
      detail: "威圧による安定。",
      effects: { bias_speed: 1, B: -5 },
      next: 17
    },
    {
      text: "関係性を取り決める",
      detail: "秩序を外へ延ばす。",
      effects: { bias_procedure: 1, A: +5 },
      next: 17
    },
    {
      text: "関係の意味を語る",
      detail: "正当化を試みる。",
      effects: { bias_narrative: 1, D: +5 },
      next: 17
    },
    {
      text: "深く関わらない",
      detail: "摩擦を避ける。",
      effects: { bias_avoidance: 1, timePressure: +5 },
      next: 17
    }
  ]
},

/* ===== 17 ===== */
{
  title: "第17章：負担",
  preText: (s) => {
    let t = "";
    if (s.A < 70) t += "運用は不安定だった。\n";
    if (s.B < 60) t += "強制力は限定的だった。\n";
    return t.trim();
  },
  text: () =>
    "守る者、決める者を維持するための負担が生じていた。\n" +
    "誰がそれを支えるのか。\n" +
    "負担の配分は、新たな緊張を生んでいた。",
  choices: [
    {
      text: "一部に集中させる",
      detail: "迅速だが反発を招く。",
      effects: { bias_speed: 1, D: -5 },
      next: 18
    },
    {
      text: "負担の仕組みを整える",
      detail: "制度的対応。",
      effects: { bias_procedure: 1, A: +5 },
      next: 18
    },
    {
      text: "負担の理由を説明する",
      detail: "納得を試みる。",
      effects: { bias_narrative: 1, D: +5 },
      next: 18
    },
    {
      text: "明確に決めない",
      detail: "衝突を避ける。",
      effects: { bias_avoidance: 1, timePressure: +5 },
      next: 18
    }
  ]
},

/* ===== 18 ===== */
{
  title: "第18章：亀裂",
  preText: (s) => {
    let t = "";
    if (s.D < 60) t += "納得は失われつつあった。\n";
    if (s.timePressure > 25) t += "未決の問題が限界に近づいていた。\n";
    return t.trim();
  },
  text: () =>
    "秩序は保たれていた。\n" +
    "だが、その内側に亀裂が走っていた。\n" +
    "まだ壊れてはいない。\n" +
    "しかし、元には戻らない兆しがあった。",
  choices: [
    {
      text: "力で抑え込む",
      detail: "短期的安定。",
      effects: { bias_speed: 1, B: -10 },
      next: 19
    },
    {
      text: "制度を補強する",
      detail: "崩壊を防ぐ。",
      effects: { bias_procedure: 1, A: +5 },
      next: 19
    },
    {
      text: "意味を語り直す",
      detail: "正当性の再構築。",
      effects: { bias_narrative: 1, D: +5 },
      next: 19
    },
    {
      text: "限界を見ないふりをする",
      detail: "決断を避ける。",
      effects: { bias_avoidance: 1, timePressure: +5 },
      next: 19
    }
  ]
},

/* ===== 19 ===== */
{
  title: "第19章：不可逆",
  preText: (s) => {
    let t = "";
    if (s.A > 85) t += "秩序は強固だった。\n";
    if (s.D < 55) t += "正当性は深刻に損なわれていた。\n";
    return t.trim();
  },
  text: () =>
    "ここまで積み重ねられた判断は、もはや単独では戻せなかった。\n" +
    "構造は形成され、歪みもまた固定されていた。\n" +
    "この先に待つのは、拡大か、分裂か、あるいは断絶だった。",
  choices: [
    {
      text: "現状を受け入れる",
      detail: "次の段階へ。",
      effects: { bias_avoidance: 1 },
      next: 20
    },
    {
      text: "構造を再設計する",
      detail: "大きな転換。",
      effects: { bias_procedure: 1, A: +5 },
      next: 20
    },
    {
      text: "正当性を再構築する",
      detail: "語り直す。",
      effects: { bias_narrative: 1, D: +5 },
      next: 20
    },
    {
      text: "力による統合を進める",
      detail: "抑圧的安定。",
      effects: { bias_speed: 1, B: -10 },
      next: 20
    }
  ]
},
/* ===== 20 ===== */
{
  title: "第20章：増え続ける仕事",
  preText: (s) => {
    let t = "";
    if (s.A > 70) t += "判断は慣習として繰り返され、形を持ち始めていた。\n";
    if (s.D > 70) t += "従う理由は、ある程度言葉として共有されていた。\n";
    return t.trim();
  },
  text: () =>
    "守ること、集めること、裁くこと。\n" +
    "それらは特別な判断ではなくなっていた。\n\n" +
    "日々の作業は増え、\n" +
    "誰かが決めなければ止まる仕事が積み重なっていく。\n\n" +
    "最初は善意だった。\n" +
    "だが今は、遅れれば責められ、\n" +
    "忘れれば混乱が生じる。\n\n" +
    "この仕事を、誰が担うのか。\n" +
    "そして、それをどう位置づけるのか。\n" +
    "避けられない問いが浮かび上がっていた。",
  choices: [
    { text: "役割として固定する", effects: { A: +3 }, next: 21 },
    { text: "奉仕として位置づける", effects: { D: +2, bias_narrative: 1 }, next: 21 },
    { text: "負担を分散する", effects: { bias_avoidance: 1, timePressure: +2 }, next: 21 },
    { text: "強制的に割り当てる", effects: { B: +3, D: -2 }, next: 21 }
  ]
},

/* ===== 21 ===== */
{
  title: "第21章：集めるという行為",
  preText: (s) => {
    let t = "";
    if (s.bias_procedure > 0) t += "仕事は役割ごとに整理され始めていた。\n";
    return t.trim();
  },
  text: () =>
    "物を集める。\n" +
    "それは単なる作業ではなかった。\n\n" +
    "集める側と、集められる側。\n" +
    "その差は、少しずつ意識され始めていた。\n\n" +
    "なぜ差し出すのか。\n" +
    "なぜ拒めないのか。\n\n" +
    "問いはまだ小さい。\n" +
    "だが、確かに存在していた。",
  choices: [
    { text: "必要性を説明する", effects: { D: +2 }, next: 22 },
    { text: "規則として明文化する", effects: { A: +3 }, next: 22 },
    { text: "慣例として続ける", effects: { bias_avoidance: 1 }, next: 22 },
    { text: "拒否を許さない", effects: { B: +2, D: -2 }, next: 22 }
  ]
},

/* ===== 22 ===== */
{
  title: "第22章：記録の重み",
  preText: (s) => {
    let t = "";
    if (s.A > 72) t += "記録は参照され、判断の根拠になっていた。\n";
    return t.trim();
  },
  text: () =>
    "書き留める者が現れた。\n" +
    "誰が何を納め、\n" +
    "誰が何を命じたのか。\n\n" +
    "記録は便利だった。\n" +
    "だが同時に、逃げ場を奪った。\n\n" +
    "忘れることも、誤魔化すことも、\n" +
    "少しずつ難しくなっていく。",
  choices: [
    { text: "記録を公開する", effects: { D: +3 }, next: 23 },
    { text: "管理者のみが扱う", effects: { A: +2 }, next: 23 },
    { text: "必要最小限に留める", effects: { bias_avoidance: 1 }, next: 23 },
    { text: "力で記録を守らせる", effects: { B: +2 }, next: 23 }
  ]
},

/* ===== 23 ===== */
{
  title: "第23章：異議",
  preText: (s) => {
    let t = "";
    if (s.D < 70) t += "理由は、十分に行き渡っていなかった。\n";
    return t.trim();
  },
  text: () =>
    "記録を前に、声が上がった。\n\n" +
    "「これは不公平だ」\n" +
    "「前と違う」\n\n" +
    "小さな異議は、\n" +
    "まだ秩序を揺るがすほどではない。\n\n" +
    "だが、無視すれば残る。\n" +
    "応えれば、前例になる。",
  choices: [
    { text: "話を聞く", effects: { D: +2 }, next: 24 },
    { text: "手続きに従わせる", effects: { A: +2 }, next: 24 },
    { text: "その場で抑える", effects: { B: +2, D: -1 }, next: 24 },
    { text: "今は対応しない", effects: { bias_avoidance: 1, timePressure: +2 }, next: 24 }
  ]
},

/* ===== 24 ===== */
{
  title: "第24章：前例",
  preText: () => "",
  text: () =>
    "一度応じた判断は、\n" +
    "次も求められる。\n\n" +
    "拒めば、なぜ今回は違うのかが問われる。\n" +
    "応じれば、線引きが必要になる。\n\n" +
    "前例は、静かに重くのしかかっていた。",
  choices: [
    { text: "基準を定める", effects: { A: +3 }, next: 25 },
    { text: "説明を重ねる", effects: { D: +2 }, next: 25 },
    { text: "例外として処理する", effects: { bias_avoidance: 1 }, next: 25 },
    { text: "力で抑える", effects: { B: +2, D: -2 }, next: 25 }
  ]
},

/* ===== 25 ===== */
{
  title: "第25章：担い手の固定化",
  preText: (s) => {
    let t = "";
    if (s.A > 75) t += "役割は人に結びつき始めていた。\n";
    return t.trim();
  },
  text: () =>
    "同じ顔が、\n" +
    "同じ場所に立つようになった。\n\n" +
    "それは安定を生んだ。\n" +
    "同時に、距離も生んだ。",
  choices: [
    { text: "継続を認める", effects: { A: +2 }, next: 26 },
    { text: "定期的に入れ替える", effects: { D: +1 }, next: 26 },
    { text: "成果で評価する", effects: { bias_procedure: 1 }, next: 26 },
    { text: "疑問を持たせない", effects: { B: +2 }, next: 26 }
  ]
},

/* ===== 26 ===== */
{
  title: "第26章：境界の拡張",
  preText: () => "",
  text: () =>
    "管理の及ぶ範囲は広がっていた。\n\n" +
    "かつては曖昧だった境界が、\n" +
    "今は言葉と記録で示されている。",
  choices: [
    { text: "段階的に広げる", effects: { A: +2 }, next: 27 },
    { text: "意味を語る", effects: { D: +2 }, next: 27 },
    { text: "様子を見る", effects: { bias_avoidance: 1 }, next: 27 },
    { text: "力で従わせる", effects: { B: +2 }, next: 27 }
  ]
},

/* ===== 27 ===== */
{
  title: "第27章：距離",
  preText: () => "",
  text: () =>
    "中心と周縁。\n" +
    "距離は、物理だけではなかった。\n\n" +
    "遠い者ほど、\n" +
    "決定を実感しにくくなる。",
  choices: [
    { text: "伝達を増やす", effects: { D: +2 }, next: 28 },
    { text: "代理を置く", effects: { A: +2 }, next: 28 },
    { text: "管理を緩める", effects: { bias_avoidance: 1 }, next: 28 },
    { text: "服従を求める", effects: { B: +2, D: -2 }, next: 28 }
  ]
},

/* ===== 28 ===== */
{
  title: "第28章：信頼と疑念",
  preText: () => "",
  text: () =>
    "任せるとは、\n" +
    "信じるということだった。\n\n" +
    "だが信頼は、\n" +
    "裏切られたとき、より深い傷を残す。",
  choices: [
    { text: "監査を入れる", effects: { A: +2 }, next: 29 },
    { text: "説明を求める", effects: { D: +2 }, next: 29 },
    { text: "見て見ぬふりをする", effects: { bias_avoidance: 1 }, next: 29 },
    { text: "力で締め付ける", effects: { B: +2, D: -2 }, next: 29 }
  ]
},

/* ===== 29 ===== */
{
  title: "第29章：形になった秩序",
  preText: (s) => {
    let t = "";
    if (s.A > 78) t += "秩序は制度として定着していた。\n";
    if (s.D < 65) t += "だが、問いは完全には消えていなかった。\n";
    return t.trim();
  },
  text: () =>
    "決める者がいて、\n" +
    "従う者がいる。\n\n" +
    "それはもはや特別なことではない。\n\n" +
    "だが、その形が\n" +
    "いつまで続くのかは、\n" +
    "まだ誰にも分からなかった。",
  choices: [
    { text: "現状を維持する", effects: { bias_avoidance: 1 }, next: 30 },
    { text: "制度を洗練させる", effects: { A: +3 }, next: 30 },
    { text: "理念を語り直す", effects: { D: +2 }, next: 30 },
    { text: "力を強める", effects: { B: +2 }, next: 30 }
  ]
},

];