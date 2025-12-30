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


];