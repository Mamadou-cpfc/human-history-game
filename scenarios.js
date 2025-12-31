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
    if (s.A > 70) t += "判断は慣習として繰り返され、役割として認識され始めていた。\n";
    if (s.D > 70) t += "多くの者は、なぜ従うのかを言葉で説明できた。\n";
    return t.trim();
  },
  text: () =>
    "集める、守る、裁く。\n" +
    "かつては例外だった判断が、日常の仕事になっていた。\n\n" +
    "仕事は増え続け、\n" +
    "誰かが引き受けなければ止まる。\n\n" +
    "善意だけでは回らない段階に、\n" +
    "この集団は差し掛かっていた。",
  choices: [
    {
      text: "役割として固定する",
      detail: "特定の仕事を恒常的な役割として割り当てる。効率は上がるが、立場の固定化が始まる。",
      effects: { A: +3 },
      next: 21
    },
    {
      text: "奉仕として位置づける",
      detail: "仕事を名誉や貢献として語る。自発性は保たれるが、継続性に不安が残る。",
      effects: { D: +2, bias_narrative: 1 },
      next: 21
    },
    {
      text: "負担を分散する",
      detail: "仕事を持ち回りにする。公平感はあるが、判断の質が安定しない。",
      effects: { bias_avoidance: 1, timePressure: +2 },
      next: 21
    },
    {
      text: "強制的に割り当てる",
      detail: "拒否を許さず命じる。即効性は高いが、反発と正当性の低下を招く。",
      effects: { B: +3, D: -2 },
      next: 21
    }
  ]
},

/* ===== 21 ===== */
{
  title: "第21章：集めるという行為",
  preText: (s) => {
    let t = "";
    if (s.A > 72) t += "集める行為は、役割として制度に組み込まれつつあった。\n";
    return t.trim();
  },
  text: () =>
    "物を集める者と、差し出す者。\n\n" +
    "それまでは曖昧だった差が、\n" +
    "徐々に意識され始めていた。\n\n" +
    "なぜ差し出すのか。\n" +
    "なぜ拒めないのか。\n\n" +
    "問いはまだ小さいが、確かに存在している。",
  choices: [
    {
      text: "必要性を説明する",
      detail: "集める理由と使途を語る。納得は得やすいが、説明責任が増える。",
      effects: { D: +2 },
      next: 22
    },
    {
      text: "規則として明文化する",
      detail: "定めとして文章に残す。運用は安定するが、柔軟性を失う。",
      effects: { A: +3 },
      next: 22
    },
    {
      text: "慣例として続ける",
      detail: "今まで通りを理由に続ける。衝突は少ないが、不満は蓄積する。",
      effects: { bias_avoidance: 1 },
      next: 22
    },
    {
      text: "拒否を許さない",
      detail: "力で従わせる。短期的には安定するが、支配への疑念が強まる。",
      effects: { B: +2, D: -2 },
      next: 22
    }
  ]
},
/* ===== 22 ===== */
{
  title: "第22章：記録の重み",
  preText: (s) => {
    let t = "";
    if (s.A > 72) t += "決定は記録され、後から参照されるようになっていた。\n";
    if (s.D < 70) t += "ただし、その理由が常に理解されているわけではなかった。\n";
    return t.trim();
  },
  text: () =>
    "書き留める者が現れた。\n\n" +
    "誰が何を納め、\n" +
    "誰が何を命じ、\n" +
    "誰が従ったのか。\n\n" +
    "記録は便利だった。\n" +
    "だが同時に、\n" +
    "『忘れる自由』を奪い始めていた。",
  choices: [
    {
      text: "記録を公開する",
      detail: "誰でも確認できるようにする。透明性は高まるが、異議も増える。",
      effects: { D: +3 },
      next: 23
    },
    {
      text: "管理者のみが扱う",
      detail: "記録を専門の手に委ねる。運用は安定するが、距離が生まれる。",
      effects: { A: +2 },
      next: 23
    },
    {
      text: "必要最小限に留める",
      detail: "負担を減らすため簡略化する。柔軟だが、混乱の種を残す。",
      effects: { bias_avoidance: 1 },
      next: 23
    },
    {
      text: "力で守らせる",
      detail: "記録への異議を力で封じる。短期的には秩序を保つ。",
      effects: { B: +2, D: -2 },
      next: 23
    }
  ]
},

/* ===== 23 ===== */
{
  title: "第23章：異議",
  preText: (s) => {
    let t = "";
    if (s.D < 70) t += "決定の理由は、必ずしも共有されていなかった。\n";
    return t.trim();
  },
  text: () =>
    "記録を前に、声が上がった。\n\n" +
    "「これは不公平だ」\n" +
    "「以前は違った」\n\n" +
    "異議はまだ小さい。\n" +
    "だが、放置すれば前例になる。",
  choices: [
    {
      text: "話を聞く",
      detail: "異議を受け止め、理由を探る。納得は得られるが、時間がかかる。",
      effects: { D: +2 },
      next: 24
    },
    {
      text: "手続きに従わせる",
      detail: "定められた流れを優先する。秩序は守られるが、不満は残る。",
      effects: { A: +2 },
      next: 24
    },
    {
      text: "その場で抑える",
      detail: "問題を拡大させないため即座に封じる。恐れが広がる。",
      effects: { B: +2, D: -1 },
      next: 24
    },
    {
      text: "今は対応しない",
      detail: "様子を見ることで衝突を避ける。だが問題は消えない。",
      effects: { bias_avoidance: 1, timePressure: +2 },
      next: 24
    }
  ]
},

/* ===== 24 ===== */
{
  title: "第24章：前例",
  preText: () => "",
  text: () =>
    "一度応じた判断は、\n" +
    "次も求められる。\n\n" +
    "拒めば『なぜ今回は違うのか』が問われる。\n" +
    "応じれば、基準が必要になる。",
  choices: [
    {
      text: "基準を定める",
      detail: "例外を減らすため明確な線を引く。制度は強化される。",
      effects: { A: +3 },
      next: 25
    },
    {
      text: "説明を重ねる",
      detail: "一つ一つ理由を語る。理解は進むが負担が増す。",
      effects: { D: +2 },
      next: 25
    },
    {
      text: "例外として処理する",
      detail: "柔軟に対応する。だが一貫性が失われる。",
      effects: { bias_avoidance: 1 },
      next: 25
    },
    {
      text: "力で抑える",
      detail: "前例を作らせないため威圧する。反感が残る。",
      effects: { B: +2, D: -2 },
      next: 25
    }
  ]
},

/* ===== 25 ===== */
{
  title: "第25章：担い手の固定化",
  preText: (s) => {
    let t = "";
    if (s.A > 75) t += "役割は、人ではなく立場として意識され始めていた。\n";
    return t.trim();
  },
  text: () =>
    "同じ者が、\n" +
    "同じ場所に立つようになった。\n\n" +
    "それは安定を生んだ。\n" +
    "同時に、距離も生んだ。",
  choices: [
    {
      text: "継続を認める",
      detail: "経験を重視し同じ者に任せ続ける。効率は上がる。",
      effects: { A: +2 },
      next: 26
    },
    {
      text: "定期的に入れ替える",
      detail: "立場の固定化を防ぐ。だが判断の質が揺らぐ。",
      effects: { D: +1 },
      next: 26
    },
    {
      text: "成果で評価する",
      detail: "結果を基準に立場を保たせる。競争が生まれる。",
      effects: { bias_procedure: 1 },
      next: 26
    },
    {
      text: "疑問を持たせない",
      detail: "立場への疑問を許さない。支配は強まる。",
      effects: { B: +2 },
      next: 26
    }
  ]
},

/* ===== 26 ===== */
{
  title: "第26章：境界の拡張",
  preText: () => "",
  text: () =>
    "管理の及ぶ範囲は、\n" +
    "少しずつ広がっていた。\n\n" +
    "かつて曖昧だった境界が、\n" +
    "言葉と記録で示され始めている。",
  choices: [
    {
      text: "段階的に広げる",
      detail: "混乱を避けつつ支配を拡張する。時間はかかる。",
      effects: { A: +2 },
      next: 27
    },
    {
      text: "意味を語る",
      detail: "なぜ広げるのかを説明する。理解は進む。",
      effects: { D: +2 },
      next: 27
    },
    {
      text: "様子を見る",
      detail: "反発を恐れ拡張を急がない。問題を先送りする。",
      effects: { bias_avoidance: 1 },
      next: 27
    },
    {
      text: "力で従わせる",
      detail: "境界を力で押し広げる。反発は強まる。",
      effects: { B: +2 },
      next: 27
    }
  ]
},

/* ===== 27 ===== */
{
  title: "第27章：距離",
  preText: () => "",
  text: () =>
    "中心から離れるほど、\n" +
    "決定は遠く感じられる。\n\n" +
    "従ってはいる。\n" +
    "だが、納得しているとは限らない。",
  choices: [
    {
      text: "伝達を増やす",
      detail: "決定を丁寧に伝える。負担は増えるが理解は深まる。",
      effects: { D: +2 },
      next: 28
    },
    {
      text: "代理を置く",
      detail: "現地に判断役を置く。制度は広がる。",
      effects: { A: +2 },
      next: 28
    },
    {
      text: "管理を緩める",
      detail: "細部に口出ししない。だが統一性が失われる。",
      effects: { bias_avoidance: 1 },
      next: 28
    },
    {
      text: "服従を求める",
      detail: "疑問を許さず従わせる。恐れが支配を支える。",
      effects: { B: +2, D: -2 },
      next: 28
    }
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
    "裏切られたとき、\n" +
    "より深い傷を残す。",
  choices: [
    {
      text: "監査を入れる",
      detail: "定期的に確認する。制度は安定する。",
      effects: { A: +2 },
      next: 29
    },
    {
      text: "説明を求める",
      detail: "行動の理由を語らせる。正当性が補強される。",
      effects: { D: +2 },
      next: 29
    },
    {
      text: "見て見ぬふりをする",
      detail: "波風を立てない。だが疑念は残る。",
      effects: { bias_avoidance: 1 },
      next: 29
    },
    {
      text: "力で締め付ける",
      detail: "不信を力で抑える。支配は強まる。",
      effects: { B: +2, D: -2 },
      next: 29
    }
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
    "どこまで耐えられるのかは、\n" +
    "まだ誰にも分からなかった。",
  choices: [
    {
      text: "現状を維持する",
      detail: "安定を優先する。変化への備えは弱まる。",
      effects: { bias_avoidance: 1 },
      next: 30
    },
    {
      text: "制度を洗練させる",
      detail: "細部を整え、運用を強化する。",
      effects: { A: +3 },
      next: 30
    },
    {
      text: "理念を語り直す",
      detail: "なぜこの秩序が必要かを再定義する。",
      effects: { D: +2 },
      next: 30
    },
    {
      text: "力を強める",
      detail: "従わせる力を明確にする。恐れが秩序を支える。",
      effects: { B: +2 },
      next: 30
    }
  ]
},
/* ===== 30 ===== */
{
  title: "第30章：継がれる立場",
  preText: (s) => {
    let t = "";
    if (s.A > 75) t += "役割は、個人ではなく立場として認識され始めていた。\n";
    if (s.lineage_strength > 0) t += "血縁による継承が、当然視され始めていた。\n";
    return t.trim();
  },
  text: () =>
    "同じ役割を、同じ家の者が担う。\n\n" +
    "経験は引き継がれ、判断は早くなる。\n" +
    "だがそれは、選ばれない者を生むことでもあった。\n\n" +
    "この流れを、どこまで認めるのか。\n" +
    "今はまだ調整できる段階だった。",
  choices: [
    {
      text: "継承を公然と認める",
      detail: "安定と継続性を重視する。だが身分差が固定され始める。",
      effects: { A: +2, lineage_strength: +2 },
      next: 31
    },
    {
      text: "能力を条件に残す",
      detail: "血縁を優先しつつ例外を認める。説明責任が増す。",
      effects: { D: +2, lineage_strength: +1 },
      next: 31
    },
    {
      text: "曖昧なまま黙認する",
      detail: "明文化せず慣例に任せる。衝突は少ないが不満が残る。",
      effects: { bias_avoidance: 1 },
      next: 31
    },
    {
      text: "力で固定する",
      detail: "疑問を許さず継承を強制する。反発は潜在化する。",
      effects: { B: +2, D: -1, lineage_strength: +2 },
      next: 31
    }
  ]
},

/* ===== 31 ===== */
{
  title: "第31章：生まれの差",
  preText: (s) => {
    let t = "";
    if (s.lineage_strength > 3) t += "生まれが立場を決めるという認識が広がっていた。\n";
    return t.trim();
  },
  text: () =>
    "生まれによって、期待される役割が違う。\n\n" +
    "それは法律ではない。\n" +
    "だが、多くが理解し、口にしない約束だった。\n\n" +
    "この差を、どう扱うのかが問われていた。",
  choices: [
    {
      text: "秩序として受け入れる",
      detail: "差を前提として運営する。安定するが流動性は失われる。",
      effects: { A: +2, lineage_strength: +2 },
      next: 32
    },
    {
      text: "努力で越えられる余地を残す",
      detail: "例外を認める。希望は生まれるが不満も増える。",
      effects: { D: +2 },
      next: 32
    },
    {
      text: "明文化せずに続ける",
      detail: "衝突を避けるが、説明できない差が残る。",
      effects: { bias_avoidance: 1 },
      next: 32
    },
    {
      text: "区別を徹底する",
      detail: "役割を明確に分ける。反抗は抑え込まれる。",
      effects: { B: +2, D: -2 },
      next: 32
    }
  ]
},

/* ===== 32 ===== */
{
  title: "第32章：誓いと契約",
  preText: () => "",
  text: () =>
    "守ることを誓う者が現れた。\n\n" +
    "誓いは言葉であり、\n" +
    "契約は条件だった。\n\n" +
    "どちらを重く扱うかで、\n" +
    "秩序の性質は変わっていく。",
  choices: [
    {
      text: "儀式として誓わせる",
      detail: "信と忠誠を重視する。象徴的だが曖昧さが残る。",
      effects: { belief_strength: +2, D: +1 },
      next: 33
    },
    {
      text: "契約として文書化する",
      detail: "条件と義務を明確にする。制度は強まる。",
      effects: { law_strength: +2, A: +1 },
      next: 33
    },
    {
      text: "個人の良心に任せる",
      detail: "強制を避ける。だが裏切りへの備えが弱い。",
      effects: { bias_avoidance: 1 },
      next: 33
    },
    {
      text: "力で縛る",
      detail: "誓いを破れば罰する。恐れが忠誠を支える。",
      effects: { B: +2, D: -1 },
      next: 33
    }
  ]
},

/* ===== 33 ===== */
{
  title: "第33章：武装する者たち",
  preText: (s) => {
    let t = "";
    if (s.B > 72) t += "武装した者の存在は、秩序の中核になっていた。\n";
    return t.trim();
  },
  text: () =>
    "武器を持つ者と、持たない者。\n\n" +
    "その差は、言葉よりも明確だった。\n\n" +
    "守るための力は、\n" +
    "支配する力にもなり得る。",
  choices: [
    {
      text: "役割として限定する",
      detail: "武装を職務に限定する。管理は難しい。",
      effects: { A: +2 },
      next: 34
    },
    {
      text: "正当性を語る",
      detail: "なぜ武装が必要かを説明する。納得は広がる。",
      effects: { D: +2 },
      next: 34
    },
    {
      text: "慣習に任せる",
      detail: "明確な制限を設けない。力が独り歩きする。",
      effects: { bias_avoidance: 1 },
      next: 34
    },
    {
      text: "恐怖で抑える",
      detail: "武力を誇示する。従順さは保たれる。",
      effects: { B: +3, D: -2 },
      next: 34
    }
  ]
},

/* ===== 34 ===== */
{
  title: "第34章：裁きの形",
  preText: () => "",
  text: () =>
    "争いは避けられなかった。\n\n" +
    "誰が正しいのか。\n" +
    "誰が決めるのか。\n\n" +
    "裁きの方法は、\n" +
    "秩序そのものを映していた。",
  choices: [
    {
      text: "規則に従う",
      detail: "定められた手順で裁く。公平だが融通が利かない。",
      effects: { A: +2 },
      next: 35
    },
    {
      text: "理由を説明する",
      detail: "判断の根拠を示す。納得は得られやすい。",
      effects: { D: +2 },
      next: 35
    },
    {
      text: "前例を優先する",
      detail: "過去を基準にする。変化に弱い。",
      effects: { bias_avoidance: 1 },
      next: 35
    },
    {
      text: "力で決着させる",
      detail: "迅速だが不満が残る。",
      effects: { B: +2, D: -2 },
      next: 35
    }
  ]
},

/* ===== 35 ===== */
{
  title: "第35章：信じる理由",
  preText: (s) => {
    let t = "";
    if (s.belief_strength > 2) t += "共通の信が、秩序を支え始めていた。\n";
    return t.trim();
  },
  text: () =>
    "なぜ従うのか。\n\n" +
    "恐れか。\n" +
    "慣れか。\n" +
    "それとも、信じているからか。",
  choices: [
    {
      text: "信を強める",
      detail: "共通の価値を前面に出す。結束は強まる。",
      effects: { belief_strength: +2, D: +1 },
      next: 36
    },
    {
      text: "規則を整える",
      detail: "信よりも制度を重視する。安定する。",
      effects: { law_strength: +2, A: +1 },
      next: 36
    },
    {
      text: "答えを曖昧にする",
      detail: "問いを先送りする。衝突は減る。",
      effects: { bias_avoidance: 1 },
      next: 36
    },
    {
      text: "力を誇示する",
      detail: "従わせる理由を力に求める。",
      effects: { B: +2, D: -1 },
      next: 36
    }
  ]
},

/* ===== 36 ===== */
{
  title: "第36章：広がる支配",
  preText: () => "",
  text: () =>
    "従う範囲は広がっていた。\n\n" +
    "顔も知らぬ者が、\n" +
    "同じ決定に従っている。",
  choices: [
    {
      text: "代理を置く",
      detail: "現地に判断役を置く。制度が拡張される。",
      effects: { A: +2 },
      next: 37
    },
    {
      text: "物語で結ぶ",
      detail: "共通の物語で結束を保つ。",
      effects: { D: +2 },
      next: 37
    },
    {
      text: "細かく管理しない",
      detail: "大枠だけ示す。統一感は弱まる。",
      effects: { bias_avoidance: 1 },
      next: 37
    },
    {
      text: "力を及ぼす",
      detail: "武力で影響力を示す。",
      effects: { B: +2, D: -2 },
      next: 37
    }
  ]
},

/* ===== 37 ===== */
{
  title: "第37章：距離と不満",
  preText: () => "",
  text: () =>
    "遠い場所ほど、\n" +
    "決定は重く感じられる。\n\n" +
    "声は小さいが、\n" +
    "消えてはいなかった。",
  choices: [
    {
      text: "声を拾う",
      detail: "不満を聞き取る。正当性は高まる。",
      effects: { D: +2 },
      next: 38
    },
    {
      text: "手続きを示す",
      detail: "決まりを明確にする。制度は強まる。",
      effects: { A: +2 },
      next: 38
    },
    {
      text: "今は見ない",
      detail: "緊急でないとして先送りする。",
      effects: { bias_avoidance: 1, timePressure: +2 },
      next: 38
    },
    {
      text: "力で抑える",
      detail: "不満を抑圧する。反感は潜在化する。",
      effects: { B: +2, D: -2 },
      next: 38
    }
  ]
},

/* ===== 38 ===== */
{
  title: "第38章：揺らぐ均衡",
  preText: (s) => {
    let t = "";
    if (s.timePressure > 8) t += "未処理の問題が、静かに積み重なっていた。\n";
    return t.trim();
  },
  text: () =>
    "制度、信、力。\n\n" +
    "どれもが支えであり、\n" +
    "どれもが重荷になり得る。\n\n" +
    "均衡は、目に見えないところで揺れていた。",
  choices: [
    {
      text: "制度を補強する",
      detail: "細部を整える。管理負担は増す。",
      effects: { A: +2 },
      next: 39
    },
    {
      text: "正当性を語る",
      detail: "意味を再確認する。納得は進む。",
      effects: { D: +2 },
      next: 39
    },
    {
      text: "先送りする",
      detail: "今は耐えられるとして判断を遅らせる。",
      effects: { bias_avoidance: 1 },
      next: 39
    },
    {
      text: "力を集中させる",
      detail: "統制を強める。反発は強まる。",
      effects: { B: +2, D: -2 },
      next: 39
    }
  ]
},

/* ===== 39 ===== */
{
  title: "第39章：形としての支配",
  preText: (s) => {
    let t = "";
    if (s.A > 80) t += "支配は制度として完成しつつあった。\n";
    if (s.D < 65) t += "だが、納得は必ずしも伴っていなかった。\n";
    return t.trim();
  },
  text: () =>
    "決める者がいて、\n" +
    "従う者がいる。\n\n" +
    "それは、当たり前の風景になった。\n\n" +
    "だがこの形は、\n" +
    "次の変化に耐えられるだろうか。",
  choices: [
    {
      text: "現状を維持する",
      detail: "安定を選ぶ。変化への備えは弱まる。",
      effects: { bias_avoidance: 1 },
      next: 40
    },
    {
      text: "制度をさらに整える",
      detail: "官僚的要素を強める。",
      effects: { A: +3 },
      next: 40
    },
    {
      text: "理念を語り直す",
      detail: "支配の理由を再定義する。",
      effects: { D: +2 },
      next: 40
    },
    {
      text: "力を明確にする",
      detail: "従わぬ者への対応を示す。",
      effects: { B: +2 },
      next: 40
    }
  ]
},
/* ===== 40 ===== */
{
  title: "第40章：金が足りない",
  preText: (s) => {
    let t = "";
    if (s.B > 75) t += "武装と防衛の維持が、常態となっていた。\n";
    if (s.A > 75) t += "制度は整っていたが、費用は増え続けていた。\n";
    return t.trim();
  },
  text: () =>
    "守るためには、金が要る。\n\n" +
    "兵を養い、\n" +
    "設備を維持し、\n" +
    "境界を保つ。\n\n" +
    "これまでのやり方では、\n" +
    "明らかに足りなくなっていた。",
  choices: [
    {
      text: "恒常的な徴収を始める",
      detail: "安定した収入を確保するが、生活への影響は避けられない。",
      effects: { A: +2, D: -1 },
      next: 41
    },
    {
      text: "一時的な負担として説明する",
      detail: "理由を語ることで理解を求める。",
      effects: { D: +2 },
      next: 41
    },
    {
      text: "曖昧な形で集める",
      detail: "明確な説明を避ける。不満は見えにくい。",
      effects: { bias_avoidance: 1, timePressure: +2 },
      next: 41
    },
    {
      text: "力で徴収する",
      detail: "迅速だが反感を買う。",
      effects: { B: +2, D: -2 },
      next: 41
    }
  ]
},

/* ===== 41 ===== */
{
  title: "第41章：払う理由",
  preText: (s) => {
    let t = "";
    if (s.D < 65) t += "なぜ負担するのか、理解は十分ではなかった。\n";
    return t.trim();
  },
  text: () =>
    "人々は問う。\n\n" +
    "――なぜ、払わなければならないのか。\n\n" +
    "守られている実感があれば、\n" +
    "納得は生まれる。\n\n" +
    "だが、それが見えなくなれば、\n" +
    "疑問だけが残る。",
  choices: [
    {
      text: "防衛の成果を示す",
      detail: "何が守られているのかを具体的に示す。",
      effects: { D: +2 },
      next: 42
    },
    {
      text: "制度として当然とする",
      detail: "理由を説明せず、義務として扱う。",
      effects: { A: +2, D: -1 },
      next: 42
    },
    {
      text: "説明を後回しにする",
      detail: "今は急務として処理する。",
      effects: { bias_avoidance: 1, timePressure: +2 },
      next: 42
    },
    {
      text: "不満を抑え込む",
      detail: "異論を力で封じる。",
      effects: { B: +2, D: -2 },
      next: 42
    }
  ]
},

/* ===== 42 ===== */
{
  title: "第42章：声を持つ者",
  preText: () => "",
  text: () =>
    "負担を求めるなら、\n" +
    "声を聞くべきではないか。\n\n" +
    "そう考える者が現れ始めた。\n\n" +
    "それは要求であり、\n" +
    "交渉の始まりでもあった。",
  choices: [
    {
      text: "意見を聞く場を設ける",
      detail: "同意を得る手続きを始める。",
      effects: { A: +2, D: +1 },
      next: 43
    },
    {
      text: "限定的に聞く",
      detail: "有力者のみを対象とする。",
      effects: { A: +1 },
      next: 43
    },
    {
      text: "形式だけ整える",
      detail: "実質的な反映はしない。",
      effects: { bias_avoidance: 1 },
      next: 43
    },
    {
      text: "聞く必要はないとする",
      detail: "決定権は一方にあると示す。",
      effects: { B: +2, D: -2 },
      next: 43
    }
  ]
},

/* ===== 43 ===== */
{
  title: "第43章：代表という発想",
  preText: (s) => {
    let t = "";
    if (s.A > 78) t += "制度的な調整が求められていた。\n";
    return t.trim();
  },
  text: () =>
    "全員の声を聞くことはできない。\n\n" +
    "ならば、誰かが代わりに語る。\n\n" +
    "この考えは、\n" +
    "秩序を変える可能性を秘めていた。",
  choices: [
    {
      text: "代表を公式に認める",
      detail: "交渉の窓口を設ける。",
      effects: { A: +2, D: +1 },
      next: 44
    },
    {
      text: "暫定的な役割とする",
      detail: "恒常化は避ける。",
      effects: { bias_avoidance: 1 },
      next: 44
    },
    {
      text: "助言として扱う",
      detail: "決定権は保持する。",
      effects: { A: +1 },
      next: 44
    },
    {
      text: "危険視する",
      detail: "力の集中を恐れる。",
      effects: { B: +2, D: -1 },
      next: 44
    }
  ]
},

/* ===== 44 ===== */
{
  title: "第44章：合意の重み",
  preText: () => "",
  text: () =>
    "合意は、\n" +
    "決定を遅らせる。\n\n" +
    "だが、\n" +
    "合意なき決定は、\n" +
    "長くは続かない。",
  choices: [
    {
      text: "合意を必須とする",
      detail: "時間はかかるが正当性は高まる。",
      effects: { D: +2, A: +1 },
      next: 45
    },
    {
      text: "重要事項のみ合意を取る",
      detail: "柔軟性を残す。",
      effects: { A: +2 },
      next: 45
    },
    {
      text: "合意を形式化する",
      detail: "実質より手続きを重視する。",
      effects: { bias_avoidance: 1 },
      next: 45
    },
    {
      text: "合意を軽視する",
      detail: "迅速さを優先する。",
      effects: { B: +2, D: -2 },
      next: 45
    }
  ]
},

/* ===== 45 ===== */
{
  title: "第45章：戦いの負担",
  preText: (s) => {
    let t = "";
    if (s.B > 75) t += "防衛は常に想定されていた。\n";
    return t.trim();
  },
  text: () =>
    "戦いは、\n" +
    "遠い出来事ではなくなった。\n\n" +
    "負担は日常に入り込み、\n" +
    "誰もが無関係ではいられない。",
  choices: [
    {
      text: "負担を公平に配分する",
      detail: "納得は広がるが管理は複雑になる。",
      effects: { D: +2, A: +1 },
      next: 46
    },
    {
      text: "役割ごとに分ける",
      detail: "効率は良いが不満は残る。",
      effects: { A: +2 },
      next: 46
    },
    {
      text: "慣例に任せる",
      detail: "調整を避ける。",
      effects: { bias_avoidance: 1 },
      next: 46
    },
    {
      text: "強制する",
      detail: "即応性は高い。",
      effects: { B: +2, D: -2 },
      next: 46
    }
  ]
},

/* ===== 46 ===== */
{
  title: "第46章：制度の疲れ",
  preText: (s) => {
    let t = "";
    if (s.timePressure > 10) t += "未処理の問題が増えていた。\n";
    return t.trim();
  },
  text: () =>
    "決まりは増え、\n" +
    "調整は重なり、\n" +
    "判断は遅くなる。\n\n" +
    "制度は、\n" +
    "守るためにあるはずだった。",
  choices: [
    {
      text: "整理し直す",
      detail: "制度を簡素化する。",
      effects: { A: +2 },
      next: 47
    },
    {
      text: "意味を再確認する",
      detail: "なぜ必要かを語り直す。",
      effects: { D: +2 },
      next: 47
    },
    {
      text: "放置する",
      detail: "今は耐えられると判断する。",
      effects: { bias_avoidance: 1, timePressure: +2 },
      next: 47
    },
    {
      text: "力で押し切る",
      detail: "不満を抑え込む。",
      effects: { B: +2, D: -2 },
      next: 47
    }
  ]
},

/* ===== 47 ===== */
{
  title: "第47章：誰のための秩序か",
  preText: () => "",
  text: () =>
    "秩序は守られている。\n\n" +
    "だが、\n" +
    "誰のために。\n\n" +
    "この問いは、\n" +
    "もはや無視できなかった。",
  choices: [
    {
      text: "全体の利益を語る",
      detail: "共通善を強調する。",
      effects: { D: +2 },
      next: 48
    },
    {
      text: "役割ごとの責任を示す",
      detail: "分担を明確にする。",
      effects: { A: +2 },
      next: 48
    },
    {
      text: "答えを曖昧にする",
      detail: "議論を避ける。",
      effects: { bias_avoidance: 1 },
      next: 48
    },
    {
      text: "疑問を封じる",
      detail: "問いそのものを危険視する。",
      effects: { B: +2, D: -2 },
      next: 48
    }
  ]
},

/* ===== 48 ===== */
{
  title: "第48章：限界の兆し",
  preText: (s) => {
    let t = "";
    if (s.D < 60) t += "納得は確実に薄れていた。\n";
    return t.trim();
  },
  text: () =>
    "秩序は保たれている。\n\n" +
    "だが、\n" +
    "支える理由は、\n" +
    "弱くなっていた。",
  choices: [
    {
      text: "調整を重ねる",
      detail: "対話を続ける。",
      effects: { D: +2 },
      next: 49
    },
    {
      text: "制度を補強する",
      detail: "仕組みで支える。",
      effects: { A: +2 },
      next: 49
    },
    {
      text: "様子を見る",
      detail: "決定を先送りする。",
      effects: { bias_avoidance: 1, timePressure: +2 },
      next: 49
    },
    {
      text: "力を集中させる",
      detail: "統制を強める。",
      effects: { B: +2, D: -2 },
      next: 49
    }
  ]
},

/* ===== 49 ===== */
{
  title: "第49章：次の問い",
  preText: (s) => {
    let t = "";
    if (s.timePressure > 12) t += "未解決の歪みは、限界に近づいていた。\n";
    return t.trim();
  },
  text: () =>
    "問いは消えない。\n\n" +
    "押さえ込めば、\n" +
    "形を変える。\n\n" +
    "ここまでの選択は、\n" +
    "次の時代に、\n" +
    "確実に影を落とす。",
  choices: [
    {
      text: "現状を受け入れる",
      detail: "変化を最小限に抑える。",
      effects: { bias_avoidance: 1 },
      next: 50
    },
    {
      text: "制度改革を進める",
      detail: "次の段階へ備える。",
      effects: { A: +3 },
      next: 50
    },
    {
      text: "正当性を再構築する",
      detail: "支配の理由を問い直す。",
      effects: { D: +3 },
      next: 50
    },
    {
      text: "強制力を明確にする",
      detail: "従わぬ場合の対応を示す。",
      effects: { B: +3, D: -2 },
      next: 50
    }
  ]
},
/* ===== 50 ===== */
{
  title: "第50章：遠方からの要求",
  preText: (s) => {
    let t = "";
    if (s.A > 75) t += "判断は遠隔地にも及ぶようになっていた。\n";
    if (s.D < 65) t += "決定の理由は、必ずしも共有されていなかった。\n";
    return t.trim();
  },
  text: () =>
    "集団の外縁から、要求が届くようになった。\n\n" +
    "距離は遠く、顔は見えない。\n" +
    "それでも、資源と人手を求める声は明確だった。\n\n" +
    "応えるべきか、抑えるべきか。\n" +
    "この判断は、内と外の境界を再定義する。",
  choices: [
    {
      text: "要求を精査して応じる",
      detail: "遠方の事情を確認し、必要性に応じて支援する。信頼は高まるが、管理負担が増す。",
      effects: { A: +2, D: +1 },
      next: 51
    },
    {
      text: "基準を設けて一律対応する",
      detail: "距離や関係に関わらず同じ基準を適用する。公平だが、柔軟性を失う。",
      effects: { A: +3 },
      next: 51
    },
    {
      text: "理由を説明し制限する",
      detail: "なぜ応じられないかを語る。理解は得やすいが、不満も残る。",
      effects: { D: +2 },
      next: 51
    },
    {
      text: "要求を退ける",
      detail: "内を優先し外を切り捨てる。短期的安定は得られるが、外縁との緊張が高まる。",
      effects: { B: +2, D: -2 },
      next: 51
    }
  ]
},

/* ===== 51 ===== */
{
  title: "第51章：管理者の増加",
  preText: (s) => {
    let t = "";
    if (s.A > 78) t += "役割は階層として整理されつつあった。\n";
    return t.trim();
  },
  text: () =>
    "判断を行う者が増えた。\n\n" +
    "すべてを一人で決めることは、もはや不可能だった。\n" +
    "任せるという行為が、権力の分配を意味し始める。\n\n" +
    "誰に、どこまで任せるのか。\n" +
    "その基準が問われていた。",
  choices: [
    {
      text: "能力で選ぶ",
      detail: "成果と経験を基準に任せる。効率は高いが、反感を買うこともある。",
      effects: { A: +2 },
      next: 52
    },
    {
      text: "忠誠で選ぶ",
      detail: "従順さを重視する。統制は容易だが、判断の質が下がる。",
      effects: { B: +2, A: -1 },
      next: 52
    },
    {
      text: "合意を重視する",
      detail: "周囲の納得を得て任命する。正当性は高まるが、時間がかかる。",
      effects: { D: +2, timePressure: +1 },
      next: 52
    },
    {
      text: "暫定的に任せる",
      detail: "明確な基準を設けず様子を見る。柔軟だが、不安定さが残る。",
      effects: { bias_avoidance: 1 },
      next: 52
    }
  ]
},

/* ===== 52 ===== */
{
  title: "第52章：命令のずれ",
  preText: (s) => {
    let t = "";
    if (s.bias_speed > 3) t += "即断が積み重なり、解釈の幅が生まれていた。\n";
    return t.trim();
  },
  text: () =>
    "同じ命令が、異なる形で実行されていた。\n\n" +
    "意図は伝わっている。\n" +
    "だが、細部は現場に委ねられていた。\n\n" +
    "このずれを、許容するか修正するか。\n" +
    "判断は秩序の性質を変える。",
  choices: [
    {
      text: "細部まで統一する",
      detail: "解釈の余地をなくす。秩序は揃うが、現場の判断力が失われる。",
      effects: { A: +2 },
      next: 53
    },
    {
      text: "裁量を認める",
      detail: "現場判断を尊重する。柔軟だが、ばらつきが残る。",
      effects: { D: +1 },
      next: 53
    },
    {
      text: "問題のみ修正する",
      detail: "重大な逸脱だけを是正する。中庸だが、線引きが難しい。",
      effects: { bias_procedure: 1 },
      next: 53
    },
    {
      text: "黙認する",
      detail: "介入せず流れに任せる。衝突は避けられるが、不満が溜まる。",
      effects: { bias_avoidance: 1 },
      next: 53
    }
  ]
},

/* ===== 53 ===== */
{
  title: "第53章：負担の偏り",
  preText: (s) => {
    let t = "";
    if (s.timePressure > 10) t += "未処理の問題が背景に残っていた。\n";
    return t.trim();
  },
  text: () =>
    "負担が特定の層に集中していることが、目に見えるようになった。\n\n" +
    "働き続ける者と、恩恵を受ける者。\n" +
    "その差は、言葉にされ始めていた。",
  choices: [
    {
      text: "再配分を行う",
      detail: "負担と利益を調整する。納得は得られるが、反発も生む。",
      effects: { D: +2 },
      next: 54
    },
    {
      text: "役割を増やす",
      detail: "新たな役割を設けて分散する。複雑化が進む。",
      effects: { A: +2 },
      next: 54
    },
    {
      text: "説明で抑える",
      detail: "将来の利益を語る。短期的には収まるが、限界がある。",
      effects: { D: +1 },
      next: 54
    },
    {
      text: "力で押さえる",
      detail: "不満を表に出させない。沈静化は早いが、反感が残る。",
      effects: { B: +2, D: -2 },
      next: 54
    }
  ]
},

/* ===== 54 ===== */
{
  title: "第54章：記録の価値",
  preText: (s) => {
    let t = "";
    if (s.A > 80) t += "判断は記録され、参照されるようになっていた。\n";
    return t.trim();
  },
  text: () =>
    "過去の判断が、参照され始めた。\n\n" +
    "誰が、いつ、何を決めたのか。\n" +
    "記録は、権威そのものになりつつあった。",
  choices: [
    {
      text: "記録を公式化する",
      detail: "正しい判断として固定する。安定は増すが、修正が難しくなる。",
      effects: { A: +3 },
      next: 55
    },
    {
      text: "参照資料に留める",
      detail: "過去を参考にするが拘束しない。柔軟性は保たれる。",
      effects: { bias_procedure: 1 },
      next: 55
    },
    {
      text: "語りとして残す",
      detail: "物語として伝える。意味は残るが、解釈が揺れる。",
      effects: { D: +2 },
      next: 55
    },
    {
      text: "重要視しない",
      detail: "今を優先する。短期的だが、連続性が失われる。",
      effects: { bias_avoidance: 1 },
      next: 55
    }
  ]
},

/* ===== 55 ===== */
{
  title: "第55章：外との比較",
  preText: (s) => {
    let t = "";
    if (s.D < 65) t += "内の正当性は、揺らぎを見せていた。\n";
    return t.trim();
  },
  text: () =>
    "外の集団のやり方が、知られるようになった。\n\n" +
    "違いは、疑問を生む。\n" +
    "なぜ、こちらはこうなのか。\n\n" +
    "比較は、必ず変化を呼ぶ。",
  choices: [
    {
      text: "自らを正当化する",
      detail: "違いを否定せず、こちらの理由を語る。",
      effects: { D: +2 },
      next: 56
    },
    {
      text: "外を取り入れる",
      detail: "良い部分を模倣する。改善はあるが、混乱も生じる。",
      effects: { A: +1, bias_procedure: 1 },
      next: 56
    },
    {
      text: "差異を無視する",
      detail: "比較を避ける。安定は保たれるが、遅れを取る可能性がある。",
      effects: { bias_avoidance: 1 },
      next: 56
    },
    {
      text: "外を否定する",
      detail: "優越を主張する。結束は強まるが、孤立を招く。",
      effects: { B: +2, D: -2 },
      next: 56
    }
  ]
},

/* ===== 56 ===== */
{
  title: "第56章：変化への兆し",
  preText: (s) => {
    let t = "";
    if (s.A > 82) t += "制度は成熟し、同時に硬直し始めていた。\n";
    if (s.D > 75) t += "語られる理由は、広く共有されていた。\n";
    return t.trim();
  },
  text: () =>
    "問いは、再び浮上していた。\n\n" +
    "このやり方は、これからも続くのか。\n" +
    "変えるべきなのか。\n\n" +
    "まだ決断は迫られていない。\n" +
    "だが、準備は始まっていた。",
  choices: [
    {
      text: "現状を磨き上げる",
      detail: "大きな変更はせず、精度を高める。",
      effects: { A: +2 },
      next: 57
    },
    {
      text: "改革を検討する",
      detail: "問題点を洗い出す。時間はかかるが、変化への備えになる。",
      effects: { D: +1, timePressure: +1 },
      next: 57
    },
    {
      text: "外圧を利用する",
      detail: "外との違いを理由に調整する。",
      effects: { bias_narrative: 1 },
      next: 57
    },
    {
      text: "判断を先延ばしにする",
      detail: "今は動かない。静かだが、緊張は残る。",
      effects: { bias_avoidance: 1, timePressure: +2 },
      next: 57
    }
  ]
},

/* ===== 57 ===== */
{
  title: "第57章：集団の期待",
  preText: (s) => {
    let t = "";
    if (s.timePressure > 12) t += "未決の課題が、期待と不安を生んでいた。\n";
    return t.trim();
  },
  text: () =>
    "人々は、何かが起こることを感じ取っていた。\n\n" +
    "変化か、継続か。\n" +
    "そのどちらかが、近づいている。",
  choices: [
    {
      text: "期待に応える",
      detail: "声を拾い、方向性を示す。",
      effects: { D: +2 },
      next: 58
    },
    {
      text: "秩序を強調する",
      detail: "今の仕組みの価値を説く。",
      effects: { A: +2 },
      next: 58
    },
    {
      text: "静観する",
      detail: "状況を見極める。",
      effects: { bias_avoidance: 1 },
      next: 58
    },
    {
      text: "抑え込む",
      detail: "期待の表出を制限する。",
      effects: { B: +2, D: -2 },
      next: 58
    }
  ]
},

/* ===== 58 ===== */
{
  title: "第58章：意見の分岐",
  preText: (s) => {
    let t = "";
    if (s.D < 65) t += "意見の隔たりは大きくなっていた。\n";
    return t.trim();
  },
  text: () =>
    "同じ集団の中で、\n" +
    "望む未来が分かれ始めていた。\n\n" +
    "一つにまとめるか。\n" +
    "違いを抱えたまま進むか。",
  choices: [
    {
      text: "統一を図る",
      detail: "共通の方向性を示す。",
      effects: { A: +2 },
      next: 59
    },
    {
      text: "議論を続ける",
      detail: "結論を急がず話し合う。",
      effects: { D: +1, timePressure: +1 },
      next: 59
    },
    {
      text: "分岐を許容する",
      detail: "複数の道を認める。",
      effects: { bias_procedure: 1 },
      next: 59
    },
    {
      text: "対立を抑える",
      detail: "表面化を防ぐ。",
      effects: { B: +2 },
      next: 59
    }
  ]
},

/* ===== 59 ===== */
{
  title: "第59章：静かな緊張",
  preText: (s) => {
    let t = "";
    if (s.A > 80) t += "秩序は維持されていたが、硬さが増していた。\n";
    if (s.timePressure > 14) t += "未決の問題が、沈黙の下で膨らんでいた。\n";
    return t.trim();
  },
  text: () =>
    "表面は穏やかだった。\n\n" +
    "だが、誰もが感じていた。\n" +
    "次の一手で、流れが変わることを。\n\n" +
    "この静けさは、永遠ではない。",
  choices: [
    {
      text: "次の段階へ進む",
      detail: "変化を前提に準備を進める。",
      effects: { A: +1 },
      next: 60
    },
    {
      text: "現状を保つ",
      detail: "安定を最優先する。",
      effects: { bias_avoidance: 1 },
      next: 60
    },
    {
      text: "語りを強める",
      detail: "意味と目的を再確認する。",
      effects: { D: +2 },
      next: 60
    },
    {
      text: "力を誇示する",
      detail: "秩序の強さを示す。",
      effects: { B: +2, D: -1 },
      next: 60
    }
  ]
},
/* ===== 60 ===== */
{
  title: "第60章：制度の重み",
  preText: (s) => {
    let t = "";
    if (s.A > 82) t += "制度は広く行き渡り、疑われにくい存在になっていた。\n";
    if (s.D < 65) t += "その理由を説明する言葉は、やや弱まっていた。\n";
    return t.trim();
  },
  text: () =>
    "決まりは守られていた。\n\n" +
    "守られているがゆえに、\n" +
    "誰が決めたのかを問う声は減っていた。\n\n" +
    "重みは安定を生む。\n" +
    "同時に、修正を困難にする。",
  choices: [
    {
      text: "制度を尊重し続ける",
      detail: "変更よりも継続を優先する。信頼は保たれるが、硬直が進む。",
      effects: { A: +2 },
      next: 61
    },
    {
      text: "定期的な見直しを設ける",
      detail: "制度の再検討を仕組みに組み込む。柔軟性は増すが、負荷も増える。",
      effects: { A: +1, timePressure: +1 },
      next: 61
    },
    {
      text: "意味を語り直す",
      detail: "なぜこの制度があるのかを再説明する。",
      effects: { D: +2 },
      next: 61
    },
    {
      text: "反対意見を抑える",
      detail: "疑問の表出を制限する。静かだが、緊張が蓄積する。",
      effects: { B: +2, D: -2 },
      next: 61
    }
  ]
},

/* ===== 61 ===== */
{
  title: "第61章：教育という装置",
  preText: (s) => {
    let t = "";
    if (s.A > 80) t += "秩序は、学ぶべきものとして扱われ始めていた。\n";
    return t.trim();
  },
  text: () =>
    "次の世代は、\n" +
    "生まれたときから秩序を前提に育つ。\n\n" +
    "教える内容は、\n" +
    "未来の判断を形作る。",
  choices: [
    {
      text: "規範を重視する",
      detail: "守るべき決まりを中心に教える。安定は続くが、疑問が育ちにくい。",
      effects: { A: +2 },
      next: 62
    },
    {
      text: "理由を重視する",
      detail: "なぜそうなったかを教える。理解は深まるが、問いも増える。",
      effects: { D: +2 },
      next: 62
    },
    {
      text: "実用を優先する",
      detail: "役立つ知識に絞る。即効性はあるが、全体像が失われる。",
      effects: { bias_speed: 1 },
      next: 62
    },
    {
      text: "教育を制限する",
      detail: "知を広げすぎない。統制は容易だが、停滞を招く。",
      effects: { B: +2 },
      next: 62
    }
  ]
},

/* ===== 62 ===== */
{
  title: "第62章：新しい声",
  preText: (s) => {
    let t = "";
    if (s.D > 75) t += "語ることは、比較的許容されていた。\n";
    if (s.B > 75) t += "発言には慎重さが求められていた。\n";
    return t.trim();
  },
  text: () =>
    "新しい考えが語られ始めた。\n\n" +
    "否定ではない。\n" +
    "だが、従来とも完全には一致しない。",
  choices: [
    {
      text: "議論の場を与える",
      detail: "考えを公に検討する。発展の可能性はあるが、対立も生む。",
      effects: { D: +2 },
      next: 63
    },
    {
      text: "既存枠に取り込む",
      detail: "新しい考えを既存制度に組み込む。",
      effects: { A: +1 },
      next: 63
    },
    {
      text: "静観する",
      detail: "自然に消えるかを見極める。",
      effects: { bias_avoidance: 1 },
      next: 63
    },
    {
      text: "排除する",
      detail: "秩序を乱すとして制限する。",
      effects: { B: +2, D: -2 },
      next: 63
    }
  ]
},

/* ===== 63 ===== */
{
  title: "第63章：経済の自律",
  preText: (s) => {
    let t = "";
    if (s.A > 83) t += "管理は広範囲に及んでいた。\n";
    return t.trim();
  },
  text: () =>
    "物と金の流れが、\n" +
    "判断者の手を離れ始めていた。\n\n" +
    "完全な統制は、\n" +
    "現実的ではなくなりつつある。",
  choices: [
    {
      text: "統制を強める",
      detail: "管理範囲を拡大する。把握はできるが、反発が増える。",
      effects: { B: +2, A: -1 },
      next: 64
    },
    {
      text: "規則だけ整える",
      detail: "枠組みを示し、運用は任せる。",
      effects: { A: +2 },
      next: 64
    },
    {
      text: "自由を認める",
      detail: "自律的な動きを許容する。活力は生まれるが、不均衡が拡大する。",
      effects: { D: +1 },
      next: 64
    },
    {
      text: "問題化するまで待つ",
      detail: "今は介入しない。",
      effects: { bias_avoidance: 1, timePressure: +1 },
      next: 64
    }
  ]
},

/* ===== 64 ===== */
{
  title: "第64章：不平等の可視化",
  preText: (s) => {
    let t = "";
    if (s.D < 70) t += "納得の言葉は、十分に行き渡っていなかった。\n";
    return t.trim();
  },
  text: () =>
    "差は、数字として見えるようになった。\n\n" +
    "誰が多く持ち、\n" +
    "誰が持たないのか。\n\n" +
    "見えた差は、\n" +
    "必ず説明を要求する。",
  choices: [
    {
      text: "再配分を行う",
      detail: "差を縮めるために調整する。",
      effects: { D: +2 },
      next: 65
    },
    {
      text: "機会を整える",
      detail: "結果ではなく機会の平等を強調する。",
      effects: { A: +1 },
      next: 65
    },
    {
      text: "努力を強調する",
      detail: "差は努力の結果だと語る。",
      effects: { D: -1 },
      next: 65
    },
    {
      text: "抑え込む",
      detail: "不満の表出を制限する。",
      effects: { B: +2 },
      next: 65
    }
  ]
},

/* ===== 65 ===== */
{
  title: "第65章：信頼の分岐",
  preText: (s) => {
    let t = "";
    if (s.A > 85) t += "秩序は強固だった。\n";
    if (s.D < 65) t += "だが、その意味は揺らいでいた。\n";
    return t.trim();
  },
  text: () =>
    "人々は、\n" +
    "制度を信じているのか。\n" +
    "それとも、仕方なく従っているのか。\n\n" +
    "違いは、まだ静かだ。\n" +
    "だが決定的だ。",
  choices: [
    {
      text: "信頼を再構築する",
      detail: "対話と説明を重ねる。",
      effects: { D: +2 },
      next: 66
    },
    {
      text: "制度を補強する",
      detail: "違反への対応を明確化する。",
      effects: { A: +2 },
      next: 66
    },
    {
      text: "様子を見る",
      detail: "変化を待つ。",
      effects: { bias_avoidance: 1 },
      next: 66
    },
    {
      text: "力を示す",
      detail: "秩序の強さを示威する。",
      effects: { B: +2, D: -2 },
      next: 66
    }
  ]
},

/* ===== 66 ===== */
{
  title: "第66章：思想の拡散",
  preText: (s) => {
    let t = "";
    if (s.D > 75) t += "語られる理由は広く共有されていた。\n";
    return t.trim();
  },
  text: () =>
    "考えは、\n" +
    "境界を越えて広がった。\n\n" +
    "もはや、一箇所で止めることはできない。",
  choices: [
    {
      text: "議論を促す",
      detail: "考えを検討の対象とする。",
      effects: { D: +2 },
      next: 67
    },
    {
      text: "枠に収める",
      detail: "既存秩序に適合させる。",
      effects: { A: +1 },
      next: 67
    },
    {
      text: "速度を落とす",
      detail: "拡散を抑制する。",
      effects: { bias_avoidance: 1 },
      next: 67
    },
    {
      text: "封じる",
      detail: "制限を強化する。",
      effects: { B: +2, D: -2 },
      next: 67
    }
  ]
},

/* ===== 67 ===== */
{
  title: "第67章：対立の兆候",
  preText: (s) => {
    let t = "";
    if (s.timePressure > 14) t += "未決の課題が積み重なっていた。\n";
    return t.trim();
  },
  text: () =>
    "意見の違いは、\n" +
    "立場の違いに変わり始めていた。\n\n" +
    "まだ衝突ではない。\n" +
    "だが、準備は整いつつある。",
  choices: [
    {
      text: "調停を行う",
      detail: "対話による解決を試みる。",
      effects: { D: +2 },
      next: 68
    },
    {
      text: "線を引く",
      detail: "許容範囲を明確にする。",
      effects: { A: +1 },
      next: 68
    },
    {
      text: "放置する",
      detail: "自然な帰結に任せる。",
      effects: { bias_avoidance: 1, timePressure: +1 },
      next: 68
    },
    {
      text: "抑え込む",
      detail: "表面化を防ぐ。",
      effects: { B: +2 },
      next: 68
    }
  ]
},

/* ===== 68 ===== */
{
  title: "第68章：臨界への接近",
  preText: (s) => {
    let t = "";
    if (s.D < 65) t += "納得は、静かに失われていた。\n";
    if (s.B > 80) t += "秩序は力に大きく依存していた。\n";
    return t.trim();
  },
  text: () =>
    "壊れてはいない。\n\n" +
    "だが、戻る余地は減っていた。\n\n" +
    "次の判断は、\n" +
    "長く影響を残す。",
  choices: [
    {
      text: "修復を試みる",
      detail: "関係の再構築に動く。",
      effects: { D: +1 },
      next: 69
    },
    {
      text: "秩序を固める",
      detail: "揺れを抑える。",
      effects: { A: +1 },
      next: 69
    },
    {
      text: "流れに任せる",
      detail: "変化を受け入れる。",
      effects: { bias_avoidance: 1 },
      next: 69
    },
    {
      text: "力を集中させる",
      detail: "統制を強化する。",
      effects: { B: +2 },
      next: 69
    }
  ]
},

/* ===== 69 ===== */
{
  title: "第69章：静かな分水嶺",
  preText: (s) => {
    let t = "";
    if (s.A > 85) t += "秩序は外見上、揺るがなかった。\n";
    if (s.timePressure > 15) t += "だが未決の重みは限界に近づいていた。\n";
    return t.trim();
  },
  text: () =>
    "今は、まだ続いている。\n\n" +
    "だが、この形が\n" +
    "未来まで続く保証はない。\n\n" +
    "静かなまま、\n" +
    "分水嶺は越えられた。",
  choices: [
    {
      text: "次の段階へ進む",
      detail: "変化を前提に進む。",
      effects: { A: +1 },
      next: 70
    },
    {
      text: "維持を選ぶ",
      detail: "今の形を守る。",
      effects: { bias_avoidance: 1 },
      next: 70
    },
    {
      text: "語り直す",
      detail: "意味を再定義する。",
      effects: { D: +2 },
      next: 70
    },
    {
      text: "力を示す",
      detail: "秩序の強さを示す。",
      effects: { B: +2, D: -1 },
      next: 70
    }
  ]
},
/* ===== 70 ===== */
{
  title: "第70章：継続している社会",

  preText: (s) => {
    let t =
      "この社会は、すでに長い時間を生き延びていた。\n" +
      "誰か一人の判断ではなく、\n" +
      "積み重なった決定と妥協の上に、現在が置かれている。\n\n";

    if (s.D >= 65 && s.A >= 65) {
      t +=
        "理由は完全ではないが、語られていた。\n" +
        "制度もまた、硬直しきる前に調整されてきた。\n\n";
    }

    if (s.B >= 75 && s.D < 60) {
      t +=
        "秩序は保たれていた。\n" +
        "だが、それが納得によるものかどうかは、\n" +
        "もはや確かめられていなかった。\n\n";
    }

    if (s.timePressure > 20) {
      t +=
        "決定は迅速だった。\n" +
        "ただし、振り返る余裕は失われつつあった。\n\n";
    }

    return t.trim();
  },

  text: (s) => {
    let t =
      "人々は、この社会を「当然のもの」として受け取っていた。\n" +
      "疑問は消えたのではない。\n" +
      "ただ、問い続ける理由が見えにくくなっていただけだった。\n\n";

    if (s.A < 60) {
      t +=
        "制度は存在していたが、\n" +
        "それがなぜそうなっているのかを説明できる者は少なかった。\n\n";
    }

    if (s.D < 60) {
      t +=
        "語られない理由は、不満を生まなかった。\n" +
        "それは、期待そのものが調整されていたからだ。\n\n";
    }

    if (s.A >= 65 && s.D >= 65 && s.timePressure < 15) {
      t +=
        "この社会は、変わり続けていたわけではない。\n" +
        "だが、壊れずに済む程度には、修正され続けていた。\n\n";
    }

    t +=
      "ここから先も、この形が続くのかどうかは分からない。\n" +
      "だが、今はまだ、選べる余地が残っていた。";

    return t;
  },

  choices: [
    {
      text: "制度を点検し、静かな修正を行う",
      detail:
        "大きな改革ではなく、\n" +
        "運用の歪みを一つずつ確認し、調整する。",
      condition: (s) => s.A >= 60,
      effects: { A: +2 },
      next: 71
    },

    {
      text: "この社会が続いてきた理由を語り直す",
      detail:
        "なぜ崩れなかったのか。\n" +
        "それを共有することで、理解を更新しようとする。",
      condition: (s) => s.D >= 60,
      effects: { D: +2 },
      next: 71
    },

    {
      text: "秩序の維持を優先し、変化を抑える",
      detail:
        "揺らぎを危険と見なし、\n" +
        "現状を守ることに力を注ぐ。",
      condition: (s) => s.B >= 70,
      effects: { B: +2, D: -2 },
      next: 71
    },

    {
      text: "大きな判断は行わず、流れに任せる",
      detail:
        "問題が顕在化するまで、\n" +
        "この形を維持し続ける。",
      effects: { bias_avoidance: +1, timePressure: +2 },
      next: 71
    }
  ]
},
/* ===== 71 ===== */
{
  title: "第71章：調整の惰性",

  preText: (s) => {
    let t =
      "社会は依然として機能していた。\n" +
      "だが、調整は次第に目的ではなく、\n" +
      "習慣として行われるようになっていた。\n\n";

    if (s.A >= 65) {
      t +=
        "制度はまだ修正可能に見えた。\n" +
        "ただし、それを担う者は限られていた。\n\n";
    }

    if (s.timePressure > 18) {
      t +=
        "決定は速くなっていた。\n" +
        "速さが、正しさの代わりになり始めていた。\n\n";
    }

    return t.trim();
  },

  text: (s) => {
    let t =
      "誰かが止めようとしない限り、\n" +
      "社会はこのまま進み続けるだろうと思われていた。\n\n";

    if (s.D < 60) {
      t +=
        "理由は問われなくなっていた。\n" +
        "それは安定の証でもあり、危うさの兆しでもあった。\n\n";
    }

    t +=
      "ここで何を選ぶかは、\n" +
      "変化を生むというより、\n" +
      "余地を残すかどうかに近かった。";

    return t;
  },

  choices: [
    {
      text: "制度の運用を見直し、責任範囲を整理する",
      detail:
        "誰がどこまで決めているのかを明確にし、\n" +
        "属人的な調整を減らそうとする。",
      condition: (s) => s.A >= 60,
      effects: { A: +2 },
      next: 72
    },
    {
      text: "これまでの判断の積み重ねを説明する",
      detail:
        "なぜ今の形になったのかを振り返り、\n" +
        "理解の更新を試みる。",
      condition: (s) => s.D >= 60,
      effects: { D: +2 },
      next: 72
    },
    {
      text: "現状維持を前提に、揺らぎを抑える",
      detail:
        "変化よりも安定を優先し、\n" +
        "不確実な要素を排除する。",
      condition: (s) => s.B >= 70,
      effects: { B: +2, D: -2 },
      next: 72
    },
    {
      text: "特に手を入れず、流れを継続する",
      detail:
        "問題が明確になるまで、\n" +
        "判断を保留する。",
      effects: { bias_avoidance: +1, timePressure: +2 },
      next: 72
    }
  ]
},

/* ===== 72 ===== */
{
  title: "第72章：役割の固定化",

  preText: (s) => {
    let t =
      "社会の中で、\n" +
      "誰が決め、誰が従うのかは\n" +
      "以前より明確になっていた。\n\n";

    if (s.A < 60) {
      t +=
        "その分担は、文書よりも慣習に依存していた。\n\n";
    }

    return t.trim();
  },

  text: (s) => {
    let t =
      "役割は安定をもたらした。\n" +
      "同時に、それは選択肢を減らしていった。\n\n";

    if (s.D >= 65) {
      t +=
        "なぜその役割が存在するのかは、\n" +
        "まだ語ることができていた。\n\n";
    }

    t +=
      "役割が固定されるほど、\n" +
      "そこから外れる想像は難しくなっていった。";

    return t;
  },

  choices: [
    {
      text: "役割の見直しを制度的に行う",
      detail:
        "固定された分担を再評価し、\n" +
        "柔軟性を回復しようとする。",
      condition: (s) => s.A >= 62,
      effects: { A: +2 },
      next: 73
    },
    {
      text: "役割の意味を再度共有する",
      detail:
        "なぜその分担が必要なのかを説明し直す。",
      condition: (s) => s.D >= 62,
      effects: { D: +2 },
      next: 73
    },
    {
      text: "役割を前提に秩序を強化する",
      detail:
        "分担を揺るがさないことで、\n" +
        "安定を優先する。",
      condition: (s) => s.B >= 72,
      effects: { B: +2, D: -2 },
      next: 73
    },
    {
      text: "役割の問題を先送りする",
      detail:
        "大きな支障が出るまでは、\n" +
        "現状を維持する。",
      effects: { bias_avoidance: +1, timePressure: +2 },
      next: 73
    }
  ]
},

/* ===== 73 ===== */
{
  title: "第73章：見えにくい歪み",

  preText: (s) => {
    let t =
      "表面上、社会は安定していた。\n" +
      "だが、調整されなかった部分は\n" +
      "少しずつ積み重なっていた。\n\n";

    if (s.timePressure > 22) {
      t +=
        "判断の速さは、\n" +
        "問題を覆い隠す役割を果たしていた。\n\n";
    }

    return t.trim();
  },

  text: (s) => {
    let t =
      "歪みは、すぐには表に出なかった。\n" +
      "それが問題として認識されるには、\n" +
      "時間が必要だった。\n\n";

    if (s.D < 60) {
      t +=
        "語られない違和感は、\n" +
        "個人の中に留まり続けていた。\n\n";
    }

    t +=
      "この段階では、\n" +
      "まだ修正可能だと考える者もいた。";

    return t;
  },

  choices: [
    {
      text: "小さな歪みを拾い上げる",
      detail:
        "制度の隙間に生じた問題を\n" +
        "一つずつ調整する。",
      condition: (s) => s.A >= 63,
      effects: { A: +2 },
      next: 74
    },
    {
      text: "違和感を言葉にする場を設ける",
      detail:
        "個別の不満を共有し、\n" +
        "理解に変換しようとする。",
      condition: (s) => s.D >= 63,
      effects: { D: +2 },
      next: 74
    },
    {
      text: "歪みを抑え込み、秩序を優先する",
      detail:
        "問題化する前に、\n" +
        "統制を強める。",
      condition: (s) => s.B >= 73,
      effects: { B: +2, D: -2 },
      next: 74
    },
    {
      text: "深刻化するまで様子を見る",
      detail:
        "今は対応せず、\n" +
        "流れに任せる。",
      effects: { bias_avoidance: +1, timePressure: +2 },
      next: 74
    }
  ]
},

/* ===== 74 ===== */
{
  title: "第74章：選べるという感覚",

  preText: (s) => {
    let t =
      "社会はまだ、自らを修正できると\n" +
      "感じられていた。\n\n";

    if (s.A < 60 || s.D < 60) {
      t +=
        "ただし、その感覚は\n" +
        "一部の者に限られつつあった。\n\n";
    }

    return t.trim();
  },

  text: (s) => {
    let t =
      "選択肢が存在することと、\n" +
      "それを使えることは同じではなかった。\n\n";

    if (s.D >= 65) {
      t +=
        "それでも、語ることは可能だった。\n" +
        "理解を更新する余地は残っていた。\n\n";
    }

    t +=
      "ここでの判断は、\n" +
      "未来を変えるというより、\n" +
      "可能性を閉じないためのものだった。";

    return t;
  },

  choices: [
    {
      text: "修正可能性を前提に制度を維持する",
      detail:
        "壊さず、固めすぎず、\n" +
        "調整を続ける。",
      condition: (s) => s.A >= 64,
      effects: { A: +1 },
      next: 75
    },
    {
      text: "語りの更新を続ける",
      detail:
        "なぜ続いているのかを\n" +
        "繰り返し共有する。",
      condition: (s) => s.D >= 64,
      effects: { D: +1 },
      next: 75
    },
    {
      text: "秩序を優先し、揺らぎを抑える",
      detail:
        "可能性よりも安定を選ぶ。",
      condition: (s) => s.B >= 74,
      effects: { B: +1, D: -1 },
      next: 75
    },
    {
      text: "判断を保留し続ける",
      detail:
        "選ばないことで、\n" +
        "現状を保つ。",
      effects: { bias_avoidance: +1, timePressure: +2 },
      next: 75
    }
  ]
},

/* ===== 75 ===== */
{
  title: "第75章：続いている理由",

  preText: (s) => {
    let t =
      "この社会が続いていること自体が、\n" +
      "すでに一つの結果だった。\n\n";

    if (s.A >= 65 && s.D >= 65 && s.timePressure < 20) {
      t +=
        "壊れずに済んだ理由は、\n" +
        "完全ではないが説明できた。\n\n";
    }

    return t.trim();
  },

  text: (s) => {
    let t =
      "なぜ崩れなかったのか。\n" +
      "それは一つの答えではなかった。\n\n";

    if (s.B >= 75 && s.D < 60) {
      t +=
        "力が均衡を保っていた時期もあった。\n" +
        "だが、それだけでは説明できなかった。\n\n";
    }

    t +=
      "この先も続くかどうかは分からない。\n" +
      "だが、ここまでは確かに、\n" +
      "選び続けた結果だった。";

    return t;
  },

  choices: [
    {
      text: "次の世代に向け、調整を引き継ぐ",
      detail:
        "完成させるのではなく、\n" +
        "続けられる形を残す。",
      effects: { A: +1, D: +1 },
      next: 76
    },
    {
      text: "語られる理由を残す",
      detail:
        "完全でなくても、\n" +
        "説明可能な形を維持する。",
      effects: { D: +2 },
      next: 76
    },
    {
      text: "秩序を優先した形を固定する",
      detail:
        "変化を抑え、\n" +
        "安定を選ぶ。",
      condition: (s) => s.B >= 75,
      effects: { B: +2, D: -2 },
      next: 76
    },
    {
      text: "特別な判断は行わない",
      detail:
        "この形が続くかどうかを、\n" +
        "未来に委ねる。",
      effects: { bias_avoidance: +1, timePressure: +2 },
      next: 76
    }
  ]
},



];