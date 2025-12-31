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
}

];