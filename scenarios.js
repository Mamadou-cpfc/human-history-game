const scenarios = [

/* ===== 0 ===== */
{
  title: "第0章：最初の判断",
  preText: () =>
    "人々は移動しながら生きていた。\n" +
    "狩りと採集は、長いあいだ続いてきたやり方だった。\n" +
    "季節に従い、獲物を追い、水を求めて移動する。\n\n" +
    "だが近頃、同じ場所に留まる時間が、わずかに長くなり始めていた。",
  text: () =>
    "得られた食料を、どう分けるか。\n" +
    "それはこれまで、特別に決められることのない行為だった。\n\n" +
    "空腹でなければ分け合い、\n" +
    "足りなければ我慢する。\n\n" +
    "だが今は違う。\n" +
    "分け方そのものが、生き残りを左右し始めていた。\n" +
    "誰が多く、誰が少ないのか。\n" +
    "その差が、記憶に残るようになっていた。",
  choices: [
    {
      text: "経験のある者が、その場で分配を決める",
      detail: "長く生き延びてきた者の判断に、自然と視線が集まる。",
      effects: { bias_speed: 1, D: -1 },
      next: 1
    },
    {
      text: "役割を決め、分配の手順を定める",
      detail: "誰が獲り、誰が配るのかを明確にする。",
      effects: { bias_procedure: 1, A: +1 },
      next: 1
    },
    {
      text: "分配の理由を皆に説明する",
      detail: "なぜこの分け方なのかを、言葉として共有する。",
      effects: { bias_narrative: 1, D: +1 },
      next: 1
    },
    {
      text: "今回は決めず、状況に任せる",
      detail: "衝突を避け、これまで通りに振る舞う。",
      effects: { bias_avoidance: 1, timePressure: +1 },
      next: 1
    }
  ]
},

/* ===== 1 ===== */
{
  title: "第1章：繰り返し",
  preText: (s) =>
    s.bias_speed > 0
      ? "判断は速く、迷いは少なかった。\n決める者の存在が、自然に受け入れられていた。"
      : s.bias_avoidance > 0
      ? "判断は曖昧なまま、時間だけが過ぎていった。\n誰も強く主張しなかった。"
      : "分配は、一定の形を持ち始めていた。\n人々はそれを意識し始めていた。",
  text: () =>
    "同じような判断が、何度も繰り返された。\n" +
    "最初は偶然に見えた選択も、\n" +
    "やがて『いつものやり方』として認識されるようになった。\n\n" +
    "人々は、次第にそれを疑わなくなっていた。\n" +
    "変えないことが、安心につながり始めていた。",
  choices: [
    {
      text: "慣れたやり方を続ける",
      detail: "変えないことで、余計な摩擦を避ける。",
      effects: { bias_avoidance: 1 },
      next: 2
    },
    {
      text: "毎回判断者を変える",
      detail: "特定の人物に決定が集中するのを避ける。",
      effects: { bias_procedure: 1 },
      next: 2
    },
    {
      text: "判断の理由を確認する",
      detail: "なぜそう決めたのかを、改めて振り返る。",
      effects: { bias_narrative: 1 },
      next: 2
    },
    {
      text: "即座に決断することを重視する",
      detail: "迷うよりも動くことを価値とする。",
      effects: { bias_speed: 1 },
      next: 2
    }
  ]
},

/* ===== 2 ===== */
{
  title: "第2章：不足",
  preText: () =>
    "季節の変化は、食料の量を安定させなかった。\n" +
    "得られる日と、得られない日の差が大きくなっていた。",
  text: () =>
    "十分な量が得られない日が、確実に増え始めていた。\n" +
    "分け合えば足りない。\n" +
    "だが、誰かが多く取れば、別の誰かが耐えることになる。\n\n" +
    "この選択は、感情を伴うものになっていた。",
  choices: [
    {
      text: "その都度、状況を見て配分を変える",
      detail: "柔軟だが、毎回説明が必要になる。",
      effects: { bias_speed: 1 },
      next: 3
    },
    {
      text: "不足時の分配ルールを作る",
      detail: "苦しい時のための基準を設ける。",
      effects: { bias_procedure: 1 },
      next: 3
    },
    {
      text: "不足の理由を共有する",
      detail: "なぜ足りないのかを、皆で理解する。",
      effects: { bias_narrative: 1 },
      next: 3
    },
    {
      text: "深刻になるまで様子を見る",
      detail: "まだ耐えられると考える。",
      effects: { bias_avoidance: 1, timePressure: +1 },
      next: 3
    }
  ]
},

/* ===== 3 ===== */
{
  title: "第3章：不満",
  preText: () =>
    "分配に対する違和感が、はっきりと言葉になる前に漂っていた。",
  text: () =>
    "誰も声を荒らげてはいない。\n" +
    "だが、沈黙が増えていた。\n\n" +
    "目を合わせない者が増え、\n" +
    "食事の場が短くなっていた。",
  choices: [
    {
      text: "不満を聞き、場を収める",
      detail: "その場での衝突を避ける。",
      effects: { bias_speed: 1 },
      next: 4
    },
    {
      text: "不満を扱う手順を決める",
      detail: "次に備え、扱い方を定める。",
      effects: { bias_procedure: 1 },
      next: 4
    },
    {
      text: "分配の考え方を説明し直す",
      detail: "納得を得ることを目指す。",
      effects: { bias_narrative: 1 },
      next: 4
    },
    {
      text: "今は問題にしない",
      detail: "沈黙が続くことを選ぶ。",
      effects: { bias_avoidance: 1, timePressure: +1 },
      next: 4
    }
  ]
},

/* ===== 4 ===== */
{
  title: "第4章：集まり",
  preText: () =>
    "人々は以前よりも、同じ場所で過ごす時間が長くなっていた。",
  text: () =>
    "移動の頻度が減り、\n" +
    "ここに留まる理由が少しずつ増えていた。\n\n" +
    "焚き火の周りで、同じ顔を見る日が続いていた。",
  choices: [
    {
      text: "経験者の判断に任せる",
      detail: "慣れ親しんだ判断を重視する。",
      effects: { bias_speed: 1 },
      next: 5
    },
    {
      text: "集まりごとの決まりを作る",
      detail: "続くことを前提に考える。",
      effects: { bias_procedure: 1 },
      next: 5
    },
    {
      text: "集まる意味を言葉にする",
      detail: "なぜ共にいるのかを語る。",
      effects: { bias_narrative: 1 },
      next: 5
    },
    {
      text: "特に決めない",
      detail: "自然な流れに任せる。",
      effects: { bias_avoidance: 1 },
      next: 5
    }
  ]
},

/* ===== 5 ===== */
{
  title: "第5章：蓄え",
  preText: () =>
    "すべてを使い切らなくても、生き延びられる日が現れ始めていた。",
  text: () =>
    "余った食料を残すという発想は、\n" +
    "安心と同時に、新たな問題を生み始めていた。\n\n" +
    "それを誰が管理するのか。\n" +
    "いつ使うのか。",
  choices: [
    {
      text: "信頼できる者に任せる",
      detail: "管理を単純化する。",
      effects: { bias_speed: 1 },
      next: 6
    },
    {
      text: "蓄えの扱いを決める",
      detail: "後で揉めないようにする。",
      effects: { bias_procedure: 1 },
      next: 6
    },
    {
      text: "蓄える理由を説明する",
      detail: "納得を得ることを優先する。",
      effects: { bias_narrative: 1 },
      next: 6
    },
    {
      text: "特に管理しない",
      detail: "問題が起きてから考える。",
      effects: { bias_avoidance: 1, timePressure: +1 },
      next: 6
    }
  ]
},

/* ===== 6 ===== */
{
  title: "第6章：役割",
  preText: () =>
    "同じ作業を繰り返す者が、自然と現れていた。",
  text: () =>
    "獲る者、守る者、配る者。\n" +
    "その分かれ方は、まだ固定されてはいない。\n\n" +
    "だが、期待は生まれ始めていた。",
  choices: [
    {
      text: "自然な流れに任せる",
      detail: "役割を固定しない。",
      effects: { bias_avoidance: 1 },
      next: 7
    },
    {
      text: "役割をはっきりさせる",
      detail: "誰が何を担うかを決める。",
      effects: { bias_procedure: 1 },
      next: 7
    },
    {
      text: "役割の意味を説明する",
      detail: "なぜその役割なのかを語る。",
      effects: { bias_narrative: 1 },
      next: 7
    },
    {
      text: "判断はその都度行う",
      detail: "柔軟さを保つ。",
      effects: { bias_speed: 1 },
      next: 7
    }
  ]
},

/* ===== 7 ===== */
{
  title: "第7章：境界",
  preText: () =>
    "外から来る者との接触が、少しずつ増えていた。",
  text: () =>
    "ここに属する者と、そうでない者。\n" +
    "その区別は、意識され始めていた。\n\n" +
    "だが、線はまだ曖昧だった。",
  choices: [
    {
      text: "状況に応じて対応する",
      detail: "明確な線は引かない。",
      effects: { bias_speed: 1 },
      next: 8
    },
    {
      text: "受け入れの基準を作る",
      detail: "内と外を分ける。",
      effects: { bias_procedure: 1 },
      next: 8
    },
    {
      text: "集団の考えを伝える",
      detail: "理解を求める。",
      effects: { bias_narrative: 1 },
      next: 8
    },
    {
      text: "判断を避ける",
      detail: "衝突を避ける。",
      effects: { bias_avoidance: 1 },
      next: 8
    }
  ]
},

/* ===== 8 ===== */
{
  title: "第8章：留まる理由",
  preText: () =>
    "移動しなくても、生きていける感覚が芽生えていた。",
  text: () =>
    "ここを離れない理由が、\n" +
    "少しずつ積み重なっていた。\n\n" +
    "離れる理由の方が、思いつきにくくなっていた。",
  choices: [
    {
      text: "経験に基づいて判断する",
      detail: "慣れたやり方を信じる。",
      effects: { bias_speed: 1 },
      next: 9
    },
    {
      text: "定住を前提に考え始める",
      detail: "続く形を想定する。",
      effects: { bias_procedure: 1 },
      next: 9
    },
    {
      text: "留まる意味を語る",
      detail: "理由を共有する。",
      effects: { bias_narrative: 1 },
      next: 9
    },
    {
      text: "まだ決めない",
      detail: "選択を保留する。",
      effects: { bias_avoidance: 1, timePressure: +1 },
      next: 9
    }
  ]
},

/* ===== 9 ===== */
{
  title: "第9章：形になり始めたもの",
  preText: () =>
    "判断は、個人のものではなくなりつつあった。",
  text: () =>
    "誰かが決め、\n" +
    "多くがそれに従う。\n\n" +
    "それはまだ制度ではない。\n" +
    "だが、偶然でもなかった。\n\n" +
    "この形は、次の段階へ進もうとしていた。",
  choices: [
    {
      text: "この形を続ける",
      detail: "今のやり方を信じる。",
      effects: { bias_avoidance: 1 },
      next: 10
    },
    {
      text: "形を整理する",
      detail: "続けるために整える。",
      effects: { bias_procedure: 1 },
      next: 10
    },
    {
      text: "意味を言葉にする",
      detail: "なぜ従うのかを考える。",
      effects: { bias_narrative: 1 },
      next: 10
    },
    {
      text: "即断を重ねる",
      detail: "速さを優先する。",
      effects: { bias_speed: 1 },
      next: 10
    }
  ]
},
/* ===== 10 ===== */
{
  title: "第10章：耕すという選択",
  preText: () =>
    "同じ場所に留まる時間が、はっきりと長くなっていた。\n" +
    "移動よりも、環境を変えるという発想が芽生え始めていた。",
  text: () =>
    "地面を掘り返し、種を落とす。\n" +
    "それは、すぐに成果が出る行為ではなかった。\n\n" +
    "狩りのような確実さはない。\n" +
    "だが、成功すれば戻らずに済む。\n\n" +
    "この試みは、集団の時間感覚そのものを変えようとしていた。",
  choices: [
    {
      text: "経験者の判断で試みを進める",
      detail: "成果よりも判断の速さを重視する。",
      effects: { bias_speed: 1 },
      next: 11
    },
    {
      text: "作業手順を決めて取り組む",
      detail: "耕し方や分担を明確にする。",
      effects: { bias_procedure: 1 },
      next: 11
    },
    {
      text: "なぜ耕すのかを説明する",
      detail: "不安を減らすことを優先する。",
      effects: { bias_narrative: 1 },
      next: 11
    },
    {
      text: "本格化は見送る",
      detail: "失敗のリスクを避ける。",
      effects: { bias_avoidance: 1, timePressure: +1 },
      next: 11
    }
  ]
},

/* ===== 11 ===== */
{
  title: "第11章：余剰の発生",
  preText: () =>
    "すべてを使い切らずに済む日が、確実に増えていた。",
  text: () =>
    "食料が余るという事実は、安心と同時に緊張を生んだ。\n\n" +
    "それは力になり得る。\n" +
    "だが、誰がそれを持つのかという問題も生んでいた。\n\n" +
    "余剰は、初めて『守る対象』となった。",
  choices: [
    {
      text: "信頼できる者に管理を任せる",
      detail: "単純で分かりやすい方法を取る。",
      effects: { bias_speed: 1 },
      next: 12
    },
    {
      text: "管理の規則を設ける",
      detail: "後の争いを防ぐ。",
      effects: { bias_procedure: 1 },
      next: 12
    },
    {
      text: "管理の理由を説明する",
      detail: "納得を得ることを重視する。",
      effects: { bias_narrative: 1 },
      next: 12
    },
    {
      text: "特別な管理はしない",
      detail: "問題が起きてから考える。",
      effects: { bias_avoidance: 1, timePressure: +1 },
      next: 12
    }
  ]
},

/* ===== 12 ===== */
{
  title: "第12章：守る者の出現",
  preText: () =>
    "余剰は、奪われる可能性を同時に生んでいた。",
  text: () =>
    "夜の見張りが必要になった。\n" +
    "外から来る者への警戒が強まっていた。\n\n" +
    "守る役割を担う者は、\n" +
    "次第に特別な存在として見られ始めていた。",
  choices: [
    {
      text: "力のある者に任せる",
      detail: "即応性を優先する。",
      effects: { bias_speed: 1, B: +1 },
      next: 13
    },
    {
      text: "守りの役割を定める",
      detail: "責任の所在を明確にする。",
      effects: { bias_procedure: 1 },
      next: 13
    },
    {
      text: "守る理由を共有する",
      detail: "恐れだけに依存しない。",
      effects: { bias_narrative: 1 },
      next: 13
    },
    {
      text: "最低限の警戒に留める",
      detail: "緊張の高まりを避ける。",
      effects: { bias_avoidance: 1 },
      next: 13
    }
  ]
},

/* ===== 13 ===== */
{
  title: "第13章：差の固定化",
  preText: () =>
    "守る者、管理する者、従う者。\n" +
    "役割の差は、次第に固定されていった。",
  text: () =>
    "いつも前に立つ者がいる。\n" +
    "いつも後ろに下がる者がいる。\n\n" +
    "それは効率的だったが、\n" +
    "同時に疑問の種でもあった。",
  choices: [
    {
      text: "効率を優先する",
      detail: "役割の固定を受け入れる。",
      effects: { bias_speed: 1 },
      next: 14
    },
    {
      text: "役割を制度として整理する",
      detail: "恣意性を減らす。",
      effects: { bias_procedure: 1 },
      next: 14
    },
    {
      text: "差が生まれる理由を説明する",
      detail: "納得を得る。",
      effects: { bias_narrative: 1 },
      next: 14
    },
    {
      text: "深く考えない",
      detail: "波風を立てない。",
      effects: { bias_avoidance: 1, timePressure: +1 },
      next: 14
    }
  ]
},

/* ===== 14 ===== */
{
  title: "第14章：命令という言葉",
  preText: () =>
    "お願いではなく、命令が使われ始めていた。",
  text: () =>
    "従うことが前提となる言葉。\n" +
    "それは便利で、速かった。\n\n" +
    "だが、理由を伴わない命令は、\n" +
    "静かな反発を生み始めていた。",
  choices: [
    {
      text: "強く命じる",
      detail: "迷いを許さない。",
      effects: { bias_speed: 1, B: +1 },
      next: 15
    },
    {
      text: "命令の範囲を定める",
      detail: "乱用を防ぐ。",
      effects: { bias_procedure: 1 },
      next: 15
    },
    {
      text: "命令の理由を語る",
      detail: "納得を伴わせる。",
      effects: { bias_narrative: 1 },
      next: 15
    },
    {
      text: "命令を避ける",
      detail: "摩擦を減らす。",
      effects: { bias_avoidance: 1 },
      next: 15
    }
  ]
},

/* ===== 15 ===== */
{
  title: "第15章：従属の感覚",
  preText: () =>
    "従うことが、選択ではなく習慣になりつつあった。",
  text: () =>
    "命じられたから動く。\n" +
    "考えるよりも、従う方が楽だった。\n\n" +
    "だが、その楽さは、\n" +
    "自分で決める力を奪い始めていた。",
  choices: [
    {
      text: "従属を当然とする",
      detail: "秩序を優先する。",
      effects: { bias_speed: 1 },
      next: 16
    },
    {
      text: "従属の範囲を定める",
      detail: "無制限にしない。",
      effects: { bias_procedure: 1 },
      next: 16
    },
    {
      text: "なぜ従うのかを問う",
      detail: "言葉にする。",
      effects: { bias_narrative: 1 },
      next: 16
    },
    {
      text: "問いを避ける",
      detail: "安定を保つ。",
      effects: { bias_avoidance: 1 },
      next: 16
    }
  ]
},

/* ===== 16 ===== */
{
  title: "第16章：集団の拡大",
  preText: () =>
    "外から来る者が、明確に増えていた。",
  text: () =>
    "余剰と秩序は、人を引き寄せた。\n\n" +
    "だが、人数が増えるほど、\n" +
    "全員を知ることは難しくなっていた。",
  choices: [
    {
      text: "力で統制する",
      detail: "即効性を重視する。",
      effects: { bias_speed: 1, B: +1 },
      next: 17
    },
    {
      text: "受け入れ手続きを設ける",
      detail: "管理可能な形にする。",
      effects: { bias_procedure: 1 },
      next: 17
    },
    {
      text: "集団の価値を伝える",
      detail: "同化を促す。",
      effects: { bias_narrative: 1 },
      next: 17
    },
    {
      text: "増加を深く考えない",
      detail: "流れに任せる。",
      effects: { bias_avoidance: 1 },
      next: 17
    }
  ]
},

/* ===== 17 ===== */
{
  title: "第17章：裁き",
  preText: () =>
    "争いは、避けられなくなっていた。",
  text: () =>
    "奪い合い。\n" +
    "規則違反。\n\n" +
    "それらを誰が裁くのか。\n" +
    "沈黙は、もはや選択肢ではなかった。",
  choices: [
    {
      text: "力ある者が裁く",
      detail: "迅速だが偏りやすい。",
      effects: { bias_speed: 1, B: +1 },
      next: 18
    },
    {
      text: "裁きの手順を決める",
      detail: "一貫性を重視する。",
      effects: { bias_procedure: 1 },
      next: 18
    },
    {
      text: "裁きの理由を説明する",
      detail: "納得を重視する。",
      effects: { bias_narrative: 1 },
      next: 18
    },
    {
      text: "強く介入しない",
      detail: "自然解決を期待する。",
      effects: { bias_avoidance: 1, timePressure: +1 },
      next: 18
    }
  ]
},

/* ===== 18 ===== */
{
  title: "第18章：権威の芽",
  preText: () =>
    "判断する者の言葉が、重みを持ち始めていた。",
  text: () =>
    "命令し、裁き、分配する者。\n" +
    "その存在は、\n" +
    "もはや単なる役割ではなかった。\n\n" +
    "人々は、それを疑う前に従い始めていた。",
  choices: [
    {
      text: "権威を前面に出す",
      detail: "秩序を固める。",
      effects: { bias_speed: 1, B: +1 },
      next: 19
    },
    {
      text: "権威を制度に組み込む",
      detail: "個人依存を減らす。",
      effects: { bias_procedure: 1 },
      next: 19
    },
    {
      text: "権威の理由を語る",
      detail: "正当性を築く。",
      effects: { bias_narrative: 1 },
      next: 19
    },
    {
      text: "権威を曖昧にする",
      detail: "反発を避ける。",
      effects: { bias_avoidance: 1 },
      next: 19
    }
  ]
},

/* ===== 19 ===== */
{
  title: "第19章：首長制の成立",
  preText: () =>
    "判断は、一点に集まりつつあった。",
  text: () =>
    "誰が決めるのか。\n" +
    "その問いは、すでに過去のものになりつつあった。\n\n" +
    "人々は、決める者がいる世界に慣れていた。\n\n" +
    "この構造は、\n" +
    "さらに大きな段階へ進もうとしていた。",
  choices: [
    {
      text: "この体制を維持する",
      detail: "安定を選ぶ。",
      effects: { bias_avoidance: 1 },
      next: 20
    },
    {
      text: "制度として固める",
      detail: "次代に残す形にする。",
      effects: { bias_procedure: 1 },
      next: 20
    },
    {
      text: "支配の意味を言葉にする",
      detail: "正当性を明確にする。",
      effects: { bias_narrative: 1 },
      next: 20
    },
    {
      text: "決断を速める",
      detail: "拡張に備える。",
      effects: { bias_speed: 1 },
      next: 20
    }
  ]
},
/* ===== 20 ===== */
{
  title: "第20章：水を引く",
  preText: () =>
    "定住が続くにつれ、雨任せでは足りなくなっていた。\n" +
    "川は近くにあるが、気まぐれだった。",
  text: () =>
    "水を引くという発想が現実味を帯びてきた。\n" +
    "溝を掘り、流れを変える。\n\n" +
    "成功すれば作物は安定する。\n" +
    "だが、失敗すれば労力は無駄になり、責任の所在が問われる。\n\n" +
    "誰が決め、誰が指揮を執るのか。\n" +
    "この判断は、共同体の力関係を露わにする。",
  choices: [
    {
      text: "経験者の判断で一気に進める",
      detail: "迷いを排し、速さを優先する。",
      effects: { bias_speed: 1 },
      next: 21
    },
    {
      text: "掘削と管理の手順を定める",
      detail: "失敗時の責任も含めて整理する。",
      effects: { bias_procedure: 1 },
      next: 21
    },
    {
      text: "なぜ水路が必要かを説明する",
      detail: "不安を抑え、協力を引き出す。",
      effects: { bias_narrative: 1 },
      next: 21
    },
    {
      text: "本格工事は見送る",
      detail: "自然に任せ、負担を避ける。",
      effects: { bias_avoidance: 1, timePressure: +1 },
      next: 21
    }
  ]
},

/* ===== 21 ===== */
{
  title: "第21章：聖なる場所",
  preText: () =>
    "収穫の成否を、偶然だけで説明することが難しくなっていた。",
  text: () =>
    "丘の上、古木の根元、湧き水のそば。\n" +
    "人々が集まり、祈る場所が定まってきた。\n\n" +
    "そこでは、作物の話だけでなく、\n" +
    "生と死、災いの理由が語られた。\n\n" +
    "この場を誰が管理するのかは、\n" +
    "目に見えない力の扱い方を決めることでもあった。",
  choices: [
    {
      text: "有力者が管理する",
      detail: "世俗の力で場を守る。",
      effects: { bias_speed: 1, B: +1 },
      next: 22
    },
    {
      text: "管理の役割を定める",
      detail: "宗教行為を秩序に組み込む。",
      effects: { bias_procedure: 1 },
      next: 22
    },
    {
      text: "意味や由来を語り継ぐ",
      detail: "信仰の物語を整える。",
      effects: { bias_narrative: 1, belief_strength: +1 },
      next: 22
    },
    {
      text: "自然発生に任せる",
      detail: "統制を最小限にする。",
      effects: { bias_avoidance: 1 },
      next: 22
    }
  ]
},

/* ===== 22 ===== */
{
  title: "第22章：祭司の役割",
  preText: () =>
    "祈りの言葉を覚え、儀式を主導する者が現れていた。",
  text: () =>
    "彼らは作業をしない代わりに、\n" +
    "天候や病、死の意味を語った。\n\n" +
    "人々は半信半疑ながらも耳を傾けた。\n" +
    "不確かな世界で、説明は力だった。\n\n" +
    "この役割をどう扱うかは、\n" +
    "後の支配構造に影を落とす。",
  choices: [
    {
      text: "守護下に置く",
      detail: "権力と結びつける。",
      effects: { bias_speed: 1, B: +1 },
      next: 23
    },
    {
      text: "役割と権限を定める",
      detail: "越権を防ぐ。",
      effects: { bias_procedure: 1 },
      next: 23
    },
    {
      text: "教えの内容を共有する",
      detail: "独占を避ける。",
      effects: { bias_narrative: 1, belief_strength: +1 },
      next: 23
    },
    {
      text: "深く関与しない",
      detail: "距離を保つ。",
      effects: { bias_avoidance: 1 },
      next: 23
    }
  ]
},

/* ===== 23 ===== */
{
  title: "第23章：血縁の重み",
  preText: () =>
    "誰の子であるかが、次第に意味を持ち始めていた。",
  text: () =>
    "土地、役割、発言権。\n" +
    "それらが血縁と結びつく場面が増えていた。\n\n" +
    "長く守ってきた家系には、\n" +
    "自然と敬意が集まる。\n\n" +
    "この流れを認めるかどうかは、\n" +
    "不平等を制度化する一歩でもあった。",
  choices: [
    {
      text: "有力な血縁を優先する",
      detail: "秩序を安定させる。",
      effects: { bias_speed: 1, lineage_strength: +1 },
      next: 24
    },
    {
      text: "血縁の扱いを規定する",
      detail: "際限なき特権化を防ぐ。",
      effects: { bias_procedure: 1 },
      next: 24
    },
    {
      text: "功績との関係を語る",
      detail: "正当性を説明する。",
      effects: { bias_narrative: 1 },
      next: 24
    },
    {
      text: "明確に定めない",
      detail: "対立を避ける。",
      effects: { bias_avoidance: 1 },
      next: 24
    }
  ]
},

/* ===== 24 ===== */
{
  title: "第24章：外との取引",
  preText: () =>
    "他の集団との接触が増えていた。",
  text: () =>
    "石、金属、装飾品。\n" +
    "自分たちにないものが、外にはあった。\n\n" +
    "取引は富をもたらす。\n" +
    "同時に、争いの火種にもなり得る。\n\n" +
    "誰が交渉し、条件を決めるのかが問われた。",
  choices: [
    {
      text: "有力者が交渉する",
      detail: "即断即決を重視する。",
      effects: { bias_speed: 1 },
      next: 25
    },
    {
      text: "交渉の手順を決める",
      detail: "損失を防ぐ。",
      effects: { bias_procedure: 1 },
      next: 25
    },
    {
      text: "取引の意味を共有する",
      detail: "不信を抑える。",
      effects: { bias_narrative: 1 },
      next: 25
    },
    {
      text: "取引を最小限にする",
      detail: "外部依存を避ける。",
      effects: { bias_avoidance: 1 },
      next: 25
    }
  ]
},

/* ===== 25 ===== */
{
  title: "第25章：富の集中",
  preText: () =>
    "交易と余剰により、明確な差が生まれていた。",
  text: () =>
    "持つ者と、持たない者。\n" +
    "その差は、努力だけでは説明できなかった。\n\n" +
    "不満は囁きとして広がり、\n" +
    "一方で秩序は効率を増していた。\n\n" +
    "この不均衡をどう扱うかが、試されていた。",
  choices: [
    {
      text: "現状を受け入れる",
      detail: "成長を優先する。",
      effects: { bias_speed: 1 },
      next: 26
    },
    {
      text: "分配の規則を整える",
      detail: "暴発を防ぐ。",
      effects: { bias_procedure: 1 },
      next: 26
    },
    {
      text: "不均衡の理由を説明する",
      detail: "納得を得る。",
      effects: { bias_narrative: 1 },
      next: 26
    },
    {
      text: "深く触れない",
      detail: "波風を立てない。",
      effects: { bias_avoidance: 1, timePressure: +1 },
      next: 26
    }
  ]
},

/* ===== 26 ===== */
{
  title: "第26章：壁と門",
  preText: () =>
    "外敵への不安が、具体的な形を求めていた。",
  text: () =>
    "柵や壁を築く案が出た。\n" +
    "それは内と外を明確に分ける行為だった。\n\n" +
    "守られる安心と、\n" +
    "閉ざされる不自由。\n\n" +
    "どこまで防ぐのかが議論となった。",
  choices: [
    {
      text: "強固な防備を築く",
      detail: "安全を最優先する。",
      effects: { bias_speed: 1, B: +1 },
      next: 27
    },
    {
      text: "建設と管理を制度化する",
      detail: "負担を均す。",
      effects: { bias_procedure: 1 },
      next: 27
    },
    {
      text: "防備の意味を共有する",
      detail: "恐怖を煽りすぎない。",
      effects: { bias_narrative: 1 },
      next: 27
    },
    {
      text: "最小限に留める",
      detail: "開放性を保つ。",
      effects: { bias_avoidance: 1 },
      next: 27
    }
  ]
},

/* ===== 27 ===== */
{
  title: "第27章：掟の言葉",
  preText: () =>
    "判断は、口伝えから固定された言葉へ向かっていた。",
  text: () =>
    "これはしてよい。\n" +
    "これは許されない。\n\n" +
    "掟が言葉として整えられ始めた。\n\n" +
    "書き留めるかどうか。\n" +
    "それは記憶から権威を切り離す選択でもあった。",
  choices: [
    {
      text: "強制力を持たせる",
      detail: "違反を許さない。",
      effects: { bias_speed: 1, B: +1 },
      next: 28
    },
    {
      text: "掟を制度に組み込む",
      detail: "運用を安定させる。",
      effects: { bias_procedure: 1, law_strength: +1 },
      next: 28
    },
    {
      text: "掟の理由を語る",
      detail: "理解を促す。",
      effects: { bias_narrative: 1 },
      next: 28
    },
    {
      text: "柔軟に扱う",
      detail: "硬直を避ける。",
      effects: { bias_avoidance: 1 },
      next: 28
    }
  ]
},

/* ===== 28 ===== */
{
  title: "第28章：違反と裁定",
  preText: () =>
    "掟がある以上、破る者も現れた。",
  text: () =>
    "罰を与えるのか。\n" +
    "赦すのか。\n\n" +
    "判断のたびに、\n" +
    "掟の重さと支配の性質が示された。\n\n" +
    "一貫性か、情状か。\n" +
    "選択は共同体の記憶に残る。",
  choices: [
    {
      text: "厳罰で臨む",
      detail: "見せしめを重視する。",
      effects: { bias_speed: 1, B: +1 },
      next: 29
    },
    {
      text: "裁定手順を厳格に守る",
      detail: "恣意性を排する。",
      effects: { bias_procedure: 1 },
      next: 29
    },
    {
      text: "裁定理由を丁寧に説明する",
      detail: "納得を得る。",
      effects: { bias_narrative: 1 },
      next: 29
    },
    {
      text: "状況に応じて判断する",
      detail: "柔軟性を優先する。",
      effects: { bias_avoidance: 1 },
      next: 29
    }
  ]
},

/* ===== 29 ===== */
{
  title: "第29章：都市の輪郭",
  preText: () =>
    "壁、掟、役割、信仰。\n" +
    "それらが絡み合い、一つの形を成し始めていた。",
  text: () =>
    "人はここに集まり、\n" +
    "ここで生まれ、ここで死ぬ。\n\n" +
    "もはや一時の集まりではない。\n" +
    "都市と呼べるものが、輪郭を帯びていた。\n\n" +
    "この構造は、\n" +
    "さらに大きな権力を必要とし始めている。",
  choices: [
    {
      text: "秩序を強める",
      detail: "統治を前進させる。",
      effects: { bias_speed: 1 },
      next: 30
    },
    {
      text: "制度を精緻化する",
      detail: "長期運用に備える。",
      effects: { bias_procedure: 1 },
      next: 30
    },
    {
      text: "正当性を語り直す",
      detail: "支配の意味を固める。",
      effects: { bias_narrative: 1 },
      next: 30
    },
    {
      text: "拡張を急がない",
      detail: "内部安定を優先する。",
      effects: { bias_avoidance: 1 },
      next: 30
    }
  ]
},
/* ===== 30 ===== */
{
  title: "第30章：王の座",
  preText: () =>
    "都市は拡大し、調整だけでは追いつかなくなっていた。",
  text: () =>
    "誰か一人が、最終判断を下す必要がある。\n\n" +
    "その人物は『王』と呼ばれ始めた。\n" +
    "だが、その座は祝福と危険を同時に伴う。\n\n" +
    "王は何によって正当化されるのか。\n" +
    "力か、血か、神意か。\n\n" +
    "この問いへの答えは、後の争いを予告していた。",
  choices: [
    {
      text: "軍事力を背景に王を立てる",
      detail: "秩序と迅速さを優先する。",
      effects: { bias_speed: 1, B: +2 },
      next: 31
    },
    {
      text: "王権の規則を定める",
      detail: "権限と限界を明文化する。",
      effects: { bias_procedure: 1, law_strength: +1 },
      next: 31
    },
    {
      text: "神意による正当性を語る",
      detail: "王を超越的存在として位置づける。",
      effects: { bias_narrative: 1, belief_strength: +1 },
      next: 31
    },
    {
      text: "王の権限を限定する",
      detail: "共同体の合意を重視する。",
      effects: { bias_avoidance: 1 },
      next: 31
    }
  ]
},

/* ===== 31 ===== */
{
  title: "第31章：貢納",
  preText: () =>
    "王のもとで、都市は一つにまとめられていた。",
  text: () =>
    "維持には資源が必要だった。\n\n" +
    "穀物、労働、家畜。\n" +
    "人々はそれを『貢納』として差し出す。\n\n" +
    "負担は不満を生み、\n" +
    "同時に国家という形を実感させる。\n\n" +
    "どのように集め、どのように使うのかが問われた。",
  choices: [
    {
      text: "必要に応じて徴収する",
      detail: "柔軟だが恣意的。",
      effects: { bias_speed: 1 },
      next: 32
    },
    {
      text: "貢納の基準を定める",
      detail: "不満を抑える。",
      effects: { bias_procedure: 1 },
      next: 32
    },
    {
      text: "貢納の目的を説明する",
      detail: "納得を得る。",
      effects: { bias_narrative: 1 },
      next: 32
    },
    {
      text: "徴収を最小限にする",
      detail: "統治の負荷を減らす。",
      effects: { bias_avoidance: 1, timePressure: +1 },
      next: 32
    }
  ]
},

/* ===== 32 ===== */
{
  title: "第32章：常備兵",
  preText: () =>
    "周辺集団との摩擦は避けられなくなっていた。",
  text: () =>
    "戦は偶発的なものではなくなった。\n\n" +
    "常に備える兵の存在が議論される。\n\n" +
    "守りは安心を生む。\n" +
    "だが、兵は統治者に従う。\n\n" +
    "この力をどう扱うかが、王権の性格を決める。",
  choices: [
    {
      text: "王直属の兵を置く",
      detail: "即応力を高める。",
      effects: { bias_speed: 1, B: +2 },
      next: 33
    },
    {
      text: "動員の規則を整える",
      detail: "暴走を防ぐ。",
      effects: { bias_procedure: 1 },
      next: 33
    },
    {
      text: "兵の役割を語る",
      detail: "恐怖を和らげる。",
      effects: { bias_narrative: 1 },
      next: 33
    },
    {
      text: "最小限の防備に留める",
      detail: "軍事依存を避ける。",
      effects: { bias_avoidance: 1 },
      next: 33
    }
  ]
},

/* ===== 33 ===== */
{
  title: "第33章：征服と統合",
  preText: () =>
    "戦は勝利をもたらした。",
  text: () =>
    "新たな土地と人々が支配下に入る。\n\n" +
    "だが、征服は終わりではない。\n" +
    "統合が始まりだった。\n\n" +
    "支配される側をどう扱うか。\n" +
    "それは帝国への第一歩でもあった。",
  choices: [
    {
      text: "力で従わせる",
      detail: "反抗を許さない。",
      effects: { bias_speed: 1, B: +2 },
      next: 34
    },
    {
      text: "統治制度を適用する",
      detail: "同一の秩序に組み込む。",
      effects: { bias_procedure: 1 },
      next: 34
    },
    {
      text: "共通の物語を与える",
      detail: "一体感を作る。",
      effects: { bias_narrative: 1 },
      next: 34
    },
    {
      text: "間接統治に任せる",
      detail: "負担を減らす。",
      effects: { bias_avoidance: 1 },
      next: 34
    }
  ]
},

/* ===== 34 ===== */
{
  title: "第34章：法の書",
  preText: () =>
    "裁定は増え、口伝では追いつかなくなっていた。",
  text: () =>
    "掟は書き留められ、\n" +
    "誰の目にも触れる形になる。\n\n" +
    "それは王の恣意を縛り、\n" +
    "同時に王権を固定する。\n\n" +
    "法は武器にも盾にもなった。",
  choices: [
    {
      text: "王の権威を前面に出す",
      detail: "最終判断を握る。",
      effects: { bias_speed: 1 },
      next: 35
    },
    {
      text: "法の体系を整える",
      detail: "予測可能性を高める。",
      effects: { bias_procedure: 1, law_strength: +1 },
      next: 35
    },
    {
      text: "法の理念を語る",
      detail: "支配の正当性を示す。",
      effects: { bias_narrative: 1 },
      next: 35
    },
    {
      text: "例外を多く残す",
      detail: "柔軟性を確保する。",
      effects: { bias_avoidance: 1 },
      next: 35
    }
  ]
},

/* ===== 35 ===== */
{
  title: "第35章：王と神",
  preText: () =>
    "王権と信仰は、互いに無視できなくなっていた。",
  text: () =>
    "王は神に選ばれた存在か。\n" +
    "それとも神を守る者か。\n\n" +
    "この関係の定義は、\n" +
    "反抗を罪にするかどうかを左右する。\n\n" +
    "答えは一つではなかった。",
  choices: [
    {
      text: "王を神意の体現とする",
      detail: "反逆を冒涜とする。",
      effects: { bias_speed: 1, belief_strength: +1 },
      next: 36
    },
    {
      text: "宗教と王権を制度化する",
      detail: "相互監視を行う。",
      effects: { bias_procedure: 1 },
      next: 36
    },
    {
      text: "役割の違いを語る",
      detail: "対立を避ける。",
      effects: { bias_narrative: 1 },
      next: 36
    },
    {
      text: "距離を保つ",
      detail: "一体化を避ける。",
      effects: { bias_avoidance: 1 },
      next: 36
    }
  ]
},

/* ===== 36 ===== */
{
  title: "第36章：反乱の兆し",
  preText: () =>
    "負担と不満は、沈殿していた。",
  text: () =>
    "小規模な反抗が起きる。\n\n" +
    "すぐに鎮めることはできる。\n" +
    "だが、理由は残る。\n\n" +
    "ここでの対応は、\n" +
    "後の世代に記憶される。",
  choices: [
    {
      text: "力で鎮圧する",
      detail: "秩序を守る。",
      effects: { bias_speed: 1, B: +2 },
      next: 37
    },
    {
      text: "原因を制度で処理する",
      detail: "再発を防ぐ。",
      effects: { bias_procedure: 1 },
      next: 37
    },
    {
      text: "理由を聞き、語る",
      detail: "納得を得る。",
      effects: { bias_narrative: 1 },
      next: 37
    },
    {
      text: "深追いしない",
      detail: "表面の安定を保つ。",
      effects: { bias_avoidance: 1, timePressure: +1 },
      next: 37
    }
  ]
},

/* ===== 37 ===== */
{
  title: "第37章：境界の戦争",
  preText: () =>
    "国境は線ではなく、帯だった。",
  text: () =>
    "小競り合いが続き、\n" +
    "戦は日常の延長になる。\n\n" +
    "戦う理由をどう位置づけるか。\n" +
    "それは内部統合にも影響した。",
  choices: [
    {
      text: "防衛を名目に拡張する",
      detail: "外圧を利用する。",
      effects: { bias_speed: 1 },
      next: 38
    },
    {
      text: "軍事と統治を分ける",
      detail: "暴走を防ぐ。",
      effects: { bias_procedure: 1 },
      next: 38
    },
    {
      text: "戦の意味を語る",
      detail: "動員を正当化する。",
      effects: { bias_narrative: 1 },
      next: 38
    },
    {
      text: "消耗を避ける",
      detail: "現状維持を選ぶ。",
      effects: { bias_avoidance: 1 },
      next: 38
    }
  ]
},

/* ===== 38 ===== */
{
  title: "第38章：王位継承",
  preText: () =>
    "王の死は、必ず訪れる。",
  text: () =>
    "誰が次に座るのか。\n\n" +
    "血か、能力か、選出か。\n\n" +
    "継承の曖昧さは、\n" +
    "内戦の火種になり得る。",
  choices: [
    {
      text: "血縁を最優先する",
      detail: "安定を重視する。",
      effects: { bias_speed: 1, lineage_strength: +1 },
      next: 39
    },
    {
      text: "継承規則を明文化する",
      detail: "争いを防ぐ。",
      effects: { bias_procedure: 1 },
      next: 39
    },
    {
      text: "継承の正当性を語る",
      detail: "納得を得る。",
      effects: { bias_narrative: 1 },
      next: 39
    },
    {
      text: "状況対応に任せる",
      detail: "柔軟性を残す。",
      effects: { bias_avoidance: 1 },
      next: 39
    }
  ]
},

/* ===== 39 ===== */
{
  title: "第39章：王国という形",
  preText: () =>
    "王、法、軍、信仰。\n" +
    "それらは絡み合い、一つの構造を成していた。",
  text: () =>
    "もはや都市ではない。\n" +
    "王国と呼ぶべき段階に達していた。\n\n" +
    "だが、その形はまだ不安定だ。\n" +
    "この先、拡張か、分裂か。\n\n" +
    "選択の積み重ねが、\n" +
    "未来の運命を決めていく。",
  choices: [
    {
      text: "統治をさらに強める",
      detail: "中央集権を進める。",
      effects: { bias_speed: 1 },
      next: 40
    },
    {
      text: "制度を洗練させる",
      detail: "長期安定を目指す。",
      effects: { bias_procedure: 1 },
      next: 40
    },
    {
      text: "正当性を固める",
      detail: "支配の意味を再確認する。",
      effects: { bias_narrative: 1 },
      next: 40
    },
    {
      text: "拡張を抑える",
      detail: "内部の均衡を保つ。",
      effects: { bias_avoidance: 1 },
      next: 40
    }
  ]
},
/* ===== 40 ===== */
{
  title: "第40章：異質な秩序",
  preText: () =>
    "海の向こうから来た秩序は、これまでのものとは決定的に違っていた。",
  text: () =>
    "彼らは道を敷き、測り、記録した。\n" +
    "争いは裁かれ、税は数えられ、兵は常に整列していた。\n\n" +
    "それは混乱を終わらせる力を持っていたが、\n" +
    "同時に、従う理由を奪う力でもあった。\n\n" +
    "この秩序をどう扱うかは、\n" +
    "自らをどう定義するかという問いでもあった。",
  choices: [
    {
      text: "実利を優先し受け入れる",
      detail: "安定と利益を選ぶ。",
      effects: { bias_speed: 1 },
      next: 41
    },
    {
      text: "関係性を制度として整理する",
      detail: "従属でも対立でもない位置を探る。",
      effects: { bias_procedure: 1 },
      next: 41
    },
    {
      text: "違いを語り、距離を意識させる",
      detail: "自分たちの輪郭を保つ。",
      effects: { bias_narrative: 1 },
      next: 41
    },
    {
      text: "深入りを避ける",
      detail: "接触を限定する。",
      effects: { bias_avoidance: 1, timePressure: +1 },
      next: 41
    }
  ]
},

/* ===== 41 ===== */
{
  title: "第41章：駐屯という現実",
  preText: () =>
    "秩序は言葉だけでは維持されなかった。",
  text: () =>
    "石造りの拠点が築かれ、\n" +
    "外から来た兵が常駐するようになった。\n\n" +
    "彼らは争いを抑え、盗みを罰し、\n" +
    "街道を守った。\n\n" +
    "だがその姿は、\n" +
    "支配が現実であることを日々思い出させた。",
  choices: [
    {
      text: "秩序維持に積極的に協力する",
      detail: "安定を最大化する。",
      effects: { bias_speed: 1, B: +1 },
      next: 42
    },
    {
      text: "権限範囲を明文化する",
      detail: "越権を防ぐ。",
      effects: { bias_procedure: 1 },
      next: 42
    },
    {
      text: "駐屯の理由を語り続ける",
      detail: "恐怖を意味に変える。",
      effects: { bias_narrative: 1 },
      next: 42
    },
    {
      text: "存在感を薄める",
      detail: "摩擦を避ける。",
      effects: { bias_avoidance: 1 },
      next: 42
    }
  ]
},

/* ===== 42 ===== */
{
  title: "第42章：書かれた法",
  preText: () =>
    "裁定は速くなり、予測可能になっていた。",
  text: () =>
    "文字で書かれた法は、\n" +
    "誰にとっても同じように適用された。\n\n" +
    "それは恣意を減らし、\n" +
    "同時に、慣習の居場所を奪った。\n\n" +
    "正しさとは何か。\n" +
    "古い掟と新しい法が、静かに競合していた。",
  choices: [
    {
      text: "新しい法を主とする",
      detail: "効率と公平を選ぶ。",
      effects: { bias_speed: 1, law_strength: +1 },
      next: 43
    },
    {
      text: "併用の枠組みを整える",
      detail: "衝突を管理する。",
      effects: { bias_procedure: 1 },
      next: 43
    },
    {
      text: "慣習の意味を語る",
      detail: "記憶を守る。",
      effects: { bias_narrative: 1 },
      next: 43
    },
    {
      text: "限定的に適用する",
      detail: "変化を遅らせる。",
      effects: { bias_avoidance: 1 },
      next: 43
    }
  ]
},

/* ===== 43 ===== */
{
  title: "第43章：税という数字",
  preText: () =>
    "収穫は数えられ、記録された。",
  text: () =>
    "穀物、金属、労働。\n" +
    "それらは価値として換算され、外へ送られた。\n\n" +
    "見返りは道と安全。\n" +
    "だが、差し引きは人によって違って見えた。\n\n" +
    "この負担をどう説明するかが、\n" +
    "不満の広がりを左右した。",
  choices: [
    {
      text: "現実として受け入れる",
      detail: "対価を重視する。",
      effects: { bias_speed: 1 },
      next: 44
    },
    {
      text: "徴税基準を交渉する",
      detail: "不均衡を抑える。",
      effects: { bias_procedure: 1 },
      next: 44
    },
    {
      text: "仕組みを説明する",
      detail: "理解を求める。",
      effects: { bias_narrative: 1 },
      next: 44
    },
    {
      text: "問題化しない",
      detail: "摩擦を避ける。",
      effects: { bias_avoidance: 1, timePressure: +1 },
      next: 44
    }
  ]
},

/* ===== 44 ===== */
{
  title: "第44章：言葉と服",
  preText: () =>
    "市場や法廷で、別の言葉が使われ始めていた。",
  text: () =>
    "新しい言葉、新しい服装、\n" +
    "新しい振る舞い。\n\n" +
    "それらは昇進と安全をもたらしたが、\n" +
    "同時に、古い自分を遠ざけた。\n\n" +
    "変わることと、失うことは、\n" +
    "しばしば同時に起こる。",
  choices: [
    {
      text: "新様式を積極的に採用する",
      detail: "機会を広げる。",
      effects: { bias_speed: 1 },
      next: 45
    },
    {
      text: "受容の基準を設ける",
      detail: "変化を制御する。",
      effects: { bias_procedure: 1 },
      next: 45
    },
    {
      text: "伝統の意味を語る",
      detail: "喪失感を和らげる。",
      effects: { bias_narrative: 1 },
      next: 45
    },
    {
      text: "自然に任せる",
      detail: "方向付けをしない。",
      effects: { bias_avoidance: 1 },
      next: 45
    }
  ]
},

/* ===== 45 ===== */
{
  title: "第45章：静かな反発",
  preText: () =>
    "変化は、すべての者に歓迎されたわけではなかった。",
  text: () =>
    "象徴が壊され、\n" +
    "古い歌が密かに歌われる。\n\n" +
    "それは反乱ではない。\n" +
    "だが、同意でもなかった。\n\n" +
    "無視すれば広がり、\n" +
    "抑えれば意味を持つ。",
  choices: [
    {
      text: "芽のうちに抑える",
      detail: "秩序を守る。",
      effects: { bias_speed: 1, B: +1 },
      next: 46
    },
    {
      text: "対処の枠組みを作る",
      detail: "拡大を防ぐ。",
      effects: { bias_procedure: 1 },
      next: 46
    },
    {
      text: "理由を語る",
      detail: "理解を示す。",
      effects: { bias_narrative: 1 },
      next: 46
    },
    {
      text: "表面上は放置する",
      detail: "緊張を下げる。",
      effects: { bias_avoidance: 1, timePressure: +1 },
      next: 46
    }
  ]
},

/* ===== 46 ===== */
{
  title: "第46章：撤退の始まり",
  preText: () =>
    "外の秩序は、揺らぎ始めていた。",
  text: () =>
    "遠方での戦、内側の争い。\n" +
    "支配者の視線は別の場所へ向かう。\n\n" +
    "兵は減り、命令は遅れ、\n" +
    "空白が生まれ始めた。\n\n" +
    "この瞬間をどう迎えるかが、\n" +
    "自立の成否を決める。",
  choices: [
    {
      text: "素早く引き継ぐ",
      detail: "空白を埋める。",
      effects: { bias_speed: 1 },
      next: 47
    },
    {
      text: "統治を再構築する",
      detail: "独自の形を作る。",
      effects: { bias_procedure: 1 },
      next: 47
    },
    {
      text: "自立を語る",
      detail: "結束を促す。",
      effects: { bias_narrative: 1 },
      next: 47
    },
    {
      text: "様子を見る",
      detail: "動きを抑える。",
      effects: { bias_avoidance: 1, timePressure: +1 },
      next: 47
    }
  ]
},

/* ===== 47 ===== */
{
  title: "第47章：分裂の兆候",
  preText: () =>
    "中心が弱まると、周縁が動く。",
  text: () =>
    "各地で独自の判断が下され、\n" +
    "小さな秩序が生まれる。\n\n" +
    "それは混乱であり、\n" +
    "同時に再編の始まりでもあった。",
  choices: [
    {
      text: "力で再統合する",
      detail: "迅速な統一。",
      effects: { bias_speed: 1, B: +1 },
      next: 48
    },
    {
      text: "合意の枠組みを作る",
      detail: "分権的統合。",
      effects: { bias_procedure: 1 },
      next: 48
    },
    {
      text: "共通の記憶を語る",
      detail: "一体感を保つ。",
      effects: { bias_narrative: 1 },
      next: 48
    },
    {
      text: "分立を認める",
      detail: "衝突を避ける。",
      effects: { bias_avoidance: 1 },
      next: 48
    }
  ]
},

/* ===== 48 ===== */
{
  title: "第48章：新たな脅威",
  preText: () =>
    "外の力は去ったが、脅威は残った。",
  text: () =>
    "海から、森から、\n" +
    "異なる者たちが現れる。\n\n" +
    "彼らは秩序を知らず、\n" +
    "同時に、しばしば自由だった。\n\n" +
    "守るか、交わるか。\n" +
    "判断は避けられない。",
  choices: [
    {
      text: "積極的に迎撃する",
      detail: "主導権を握る。",
      effects: { bias_speed: 1 },
      next: 49
    },
    {
      text: "防衛を制度化する",
      detail: "持久戦に備える。",
      effects: { bias_procedure: 1 },
      next: 49
    },
    {
      text: "意味を語る",
      detail: "恐怖を統合に使う。",
      effects: { bias_narrative: 1 },
      next: 49
    },
    {
      text: "最小限に抑える",
      detail: "消耗を避ける。",
      effects: { bias_avoidance: 1 },
      next: 49
    }
  ]
},

/* ===== 49 ===== */
{
  title: "第49章：残されたもの",
  preText: () =>
    "外来の秩序は去ったが、痕跡は残った。",
  text: () =>
    "道、法、言葉、記憶。\n\n" +
    "それらはもはや外のものではなく、\n" +
    "自分たちの一部になっていた。\n\n" +
    "この遺産をどう扱うかが、\n" +
    "次の時代の姿を決める。",
  choices: [
    {
      text: "積極的に継承する",
      detail: "連続性を保つ。",
      effects: { bias_speed: 1 },
      next: 50
    },
    {
      text: "整理して取り込む",
      detail: "独自性を加える。",
      effects: { bias_procedure: 1 },
      next: 50
    },
    {
      text: "意味を語り直す",
      detail: "物語として昇華する。",
      effects: { bias_narrative: 1 },
      next: 50
    },
    {
      text: "距離を置く",
      detail: "断絶を選ぶ。",
      effects: { bias_avoidance: 1 },
      next: 50
    }
  ]
},
/* ===== 50 ===== */
{
  title: "第50章：空白の時代",
  preText: () =>
    "外来の秩序が去ったあと、誰も全体を見渡せなくなっていた。",
  text: () =>
    "道は残っていたが、守る者はいない。\n" +
    "法は記録されていたが、裁く者はいない。\n\n" +
    "人々は生きるために、\n" +
    "最も近く、最も強い存在に頼るようになった。\n\n" +
    "秩序は失われたのではなく、\n" +
    "細かく砕けて散らばっていた。",
  choices: [
    {
      text: "即応的に治安を確保する",
      detail: "力による秩序を優先する。",
      effects: { bias_speed: 1, B: +1 },
      next: 51
    },
    {
      text: "地域ごとの統治を整理する",
      detail: "小さな秩序を束ねる。",
      effects: { bias_procedure: 1 },
      next: 51
    },
    {
      text: "共通の意味を語る",
      detail: "散らばった人々を結び直す。",
      effects: { bias_narrative: 1 },
      next: 51
    },
    {
      text: "各地の判断に任せる",
      detail: "介入を最小限にする。",
      effects: { bias_avoidance: 1 },
      next: 51
    }
  ]
},

/* ===== 51 ===== */
{
  title: "第51章：守る者の台頭",
  preText: () =>
    "人々は、守ってくれる者の名を覚え始めていた。",
  text: () =>
    "武器を持ち、従者を率い、\n" +
    "周囲を防衛できる者が現れた。\n\n" +
    "彼らは王ではなかったが、\n" +
    "頼られる存在だった。\n\n" +
    "守ることは、支配の始まりでもあった。",
  choices: [
    {
      text: "守る者に権限を集中させる",
      detail: "迅速な防衛を可能にする。",
      effects: { bias_speed: 1, B: +1 },
      next: 52
    },
    {
      text: "役割と責任を定める",
      detail: "私的武力を制御する。",
      effects: { bias_procedure: 1 },
      next: 52
    },
    {
      text: "守る理由を語らせる",
      detail: "恐怖以外の動機を作る。",
      effects: { bias_narrative: 1 },
      next: 52
    },
    {
      text: "黙認する",
      detail: "自然な序列に任せる。",
      effects: { bias_avoidance: 1 },
      next: 52
    }
  ]
},

/* ===== 52 ===== */
{
  title: "第52章：土地と忠誠",
  preText: () =>
    "守りの代価が、はっきりと求められるようになった。",
  text: () =>
    "土地、収穫、労働。\n" +
    "それらは保護と引き換えに差し出された。\n\n" +
    "誰に従うかは、\n" +
    "どこで生きるかを意味した。\n\n" +
    "忠誠は選択であり、\n" +
    "同時に縛りでもあった。",
  choices: [
    {
      text: "実力に基づく関係を認める",
      detail: "現実的な主従関係。",
      effects: { bias_speed: 1 },
      next: 53
    },
    {
      text: "契約として整理する",
      detail: "義務と権利を明確化する。",
      effects: { bias_procedure: 1 },
      next: 53
    },
    {
      text: "忠誠の意味を語る",
      detail: "単なる服従にしない。",
      effects: { bias_narrative: 1 },
      next: 53
    },
    {
      text: "曖昧な関係を維持する",
      detail: "対立を避ける。",
      effects: { bias_avoidance: 1 },
      next: 53
    }
  ]
},

/* ===== 53 ===== */
{
  title: "第53章：信仰の再編",
  preText: () =>
    "人々は、目に見えない秩序を求めていた。",
  text: () =>
    "戦乱と不安のなかで、\n" +
    "信仰は慰めであり、規範となった。\n\n" +
    "それは支配者を正当化し、\n" +
    "同時に制限もした。\n\n" +
    "神の名をどう扱うかは、\n" +
    "権力の性質を左右した。",
  choices: [
    {
      text: "支配の正当性に結びつける",
      detail: "強固な根拠を得る。",
      effects: { bias_speed: 1, belief_strength: +1 },
      next: 54
    },
    {
      text: "制度として整理する",
      detail: "信仰と統治を分ける。",
      effects: { bias_procedure: 1 },
      next: 54
    },
    {
      text: "物語として共有する",
      detail: "内面の統合を促す。",
      effects: { bias_narrative: 1, belief_strength: +1 },
      next: 54
    },
    {
      text: "距離を保つ",
      detail: "利用を避ける。",
      effects: { bias_avoidance: 1 },
      next: 54
    }
  ]
},

/* ===== 54 ===== */
{
  title: "第54章：裁きの所在",
  preText: () =>
    "争いは絶えなかった。",
  text: () =>
    "誰が裁くのか。\n" +
    "力か、慣習か、信仰か。\n\n" +
    "裁きは正義である前に、\n" +
    "秩序の維持手段だった。\n\n" +
    "どの裁きを選ぶかで、\n" +
    "人々の恐れるものが変わった。",
  choices: [
    {
      text: "力ある者の裁定に任せる",
      detail: "即断を優先する。",
      effects: { bias_speed: 1 },
      next: 55
    },
    {
      text: "裁きの手順を定める",
      detail: "恣意を抑える。",
      effects: { bias_procedure: 1 },
      next: 55
    },
    {
      text: "裁きの意味を語る",
      detail: "納得を得る。",
      effects: { bias_narrative: 1 },
      next: 55
    },
    {
      text: "各地に委ねる",
      detail: "統一を急がない。",
      effects: { bias_avoidance: 1 },
      next: 55
    }
  ]
},

/* ===== 55 ===== */
{
  title: "第55章：連なり始める系譜",
  preText: () =>
    "守る者の地位は、一代限りではなくなっていた。",
  text: () =>
    "子に継がれ、名が残り、\n" +
    "血が権威を帯び始める。\n\n" +
    "人々は安定を感じる一方で、\n" +
    "選べない支配に慣れていった。",
  choices: [
    {
      text: "世襲を認める",
      detail: "安定を優先する。",
      effects: { bias_speed: 1, lineage_strength: +1 },
      next: 56
    },
    {
      text: "継承規則を整える",
      detail: "争いを防ぐ。",
      effects: { bias_procedure: 1, lineage_strength: +1 },
      next: 56
    },
    {
      text: "血の意味を語る",
      detail: "正当化を図る。",
      effects: { bias_narrative: 1 },
      next: 56
    },
    {
      text: "例外を残す",
      detail: "柔軟性を持たせる。",
      effects: { bias_avoidance: 1 },
      next: 56
    }
  ]
},

/* ===== 56 ===== */
{
  title: "第56章：外との衝突",
  preText: () =>
    "秩序が固まるほど、外部との摩擦は増えた。",
  text: () =>
    "異なる掟、異なる信仰、\n" +
    "異なる守る者。\n\n" +
    "境界は曖昧で、\n" +
    "争いは頻発した。\n\n" +
    "戦うか、交わるか。\n" +
    "判断は繰り返された。",
  choices: [
    {
      text: "積極的に対抗する",
      detail: "主導権を握る。",
      effects: { bias_speed: 1 },
      next: 57
    },
    {
      text: "防衛体制を整える",
      detail: "消耗を抑える。",
      effects: { bias_procedure: 1 },
      next: 57
    },
    {
      text: "共通点を語る",
      detail: "衝突を和らげる。",
      effects: { bias_narrative: 1 },
      next: 57
    },
    {
      text: "距離を保つ",
      detail: "関与を減らす。",
      effects: { bias_avoidance: 1 },
      next: 57
    }
  ]
},

/* ===== 57 ===== */
{
  title: "第57章：定着する慣習",
  preText: () =>
    "繰り返された判断は、やがて当たり前になった。",
  text: () =>
    "人々は理由を考えず、\n" +
    "決まりだから従うようになった。\n\n" +
    "それは安定であり、\n" +
    "同時に問いを失うことでもあった。",
  choices: [
    {
      text: "慣習を固定化する",
      detail: "変化を抑える。",
      effects: { bias_speed: 1 },
      next: 58
    },
    {
      text: "見直しの仕組みを作る",
      detail: "硬直を防ぐ。",
      effects: { bias_procedure: 1 },
      next: 58
    },
    {
      text: "由来を語り直す",
      detail: "意味を保つ。",
      effects: { bias_narrative: 1 },
      next: 58
    },
    {
      text: "疑問を放置する",
      detail: "摩擦を避ける。",
      effects: { bias_avoidance: 1 },
      next: 58
    }
  ]
},

/* ===== 58 ===== */
{
  title: "第58章：広がる差",
  preText: () =>
    "秩序は平等を約束しなかった。",
  text: () =>
    "土地を持つ者、\n" +
    "守られるだけの者。\n\n" +
    "差は目に見え、\n" +
    "語られない不満が積もっていった。",
  choices: [
    {
      text: "差を力で抑える",
      detail: "反発を恐れる。",
      effects: { bias_speed: 1 },
      next: 59
    },
    {
      text: "役割として整理する",
      detail: "構造化する。",
      effects: { bias_procedure: 1 },
      next: 59
    },
    {
      text: "正当性を語る",
      detail: "納得を求める。",
      effects: { bias_narrative: 1 },
      next: 59
    },
    {
      text: "問題化しない",
      detail: "先送りにする。",
      effects: { bias_avoidance: 1, timePressure: +1 },
      next: 59
    }
  ]
},

/* ===== 59 ===== */
{
  title: "第59章：揺れる均衡",
  preText: () =>
    "秩序は存在していたが、脆かった。",
  text: () =>
    "守る者、従う者、\n" +
    "祈る者、戦う者。\n\n" +
    "それぞれの役割は噛み合っていたが、\n" +
    "一つ崩れれば全体が揺れた。\n\n" +
    "次の時代は、\n" +
    "この均衡の上に築かれる。",
  choices: [
    {
      text: "力を強める",
      detail: "不安定さを抑え込む。",
      effects: { bias_speed: 1 },
      next: 60
    },
    {
      text: "制度を重ねる",
      detail: "構造で支える。",
      effects: { bias_procedure: 1 },
      next: 60
    },
    {
      text: "意味を再定義する",
      detail: "価値観を揃える。",
      effects: { bias_narrative: 1 },
      next: 60
    },
    {
      text: "維持に留める",
      detail: "大きく動かさない。",
      effects: { bias_avoidance: 1 },
      next: 60
    }
  ]
},
/* ===== 60 ===== */
{
  title: "第60章：集約される裁定",
  preText: (s) =>
    "争いは減っていた。\n" +
    "それは秩序の成果のように見えた。",
  text: () =>
    "かつては土地ごとに異なっていた裁定が、\n" +
    "いまや一つの中心で処理されるようになっていた。\n\n" +
    "判断は速く、結果は明確だった。\n" +
    "人々は以前よりも長く争わずに済む。\n\n" +
    "だが同時に、\n" +
    "裁定がどのような理由で下されたのかを\n" +
    "理解しようとする者は減っていった。\n\n" +
    "――決まること自体が、正しさになりつつあった。",
  choices: [
    {
      text: "迅速な裁定を最優先する",
      detail: "判断を集約し、衝突を短期間で終わらせる体制を強める",
      effects: { bias_speed: 1, B: +2, D: -1 },
      next: 61
    },
    {
      text: "裁定の手続きを明文化する",
      detail: "判断を制度として固定し、再現可能な形にする",
      effects: { bias_procedure: 1, A: +2 },
      next: 61
    },
    {
      text: "裁定の理由を説明させる",
      detail: "納得を伴う服従を維持しようと試みる",
      effects: { bias_narrative: 1, D: +2 },
      next: 61
    },
    {
      text: "当面は現状を維持する",
      detail: "大きな変更を加えず、安定を優先する",
      effects: { bias_avoidance: 1, timePressure: +1 },
      next: 61
    }
  ]
},

/* ===== 61 ===== */
{
  title: "第61章：法の言語",
  preText: (s) =>
    "判断は記録され、残されるようになった。",
  text: () =>
    "裁定は言葉として書き留められ、\n" +
    "同じ事例には同じ結論が求められるようになる。\n\n" +
    "それは公平さを約束する。\n" +
    "だが同時に、\n" +
    "その言葉を理解できる者と、\n" +
    "そうでない者の差を広げていった。\n\n" +
    "法は平等であるはずだった。\n" +
    "しかし、法を使える者だけが\n" +
    "その平等を享受しているようにも見えた。",
  choices: [
    {
      text: "法文の厳格な適用を徹底する",
      detail: "例外を減らし、統一的な判断を目指す",
      effects: { bias_procedure: 1, A: +2 },
      next: 62
    },
    {
      text: "現場裁量を一定残す",
      detail: "慣習と法の併存を認める",
      effects: { bias_speed: 1, D: +1 },
      next: 62
    },
    {
      text: "法の理念を語る",
      detail: "なぜこの法が存在するのかを説明する",
      effects: { bias_narrative: 1, D: +2 },
      next: 62
    },
    {
      text: "深く立ち入らない",
      detail: "問題が顕在化するまで様子を見る",
      effects: { bias_avoidance: 1, timePressure: +1 },
      next: 62
    }
  ]
},

/* ===== 62 ===== */
{
  title: "第62章：代理の統治",
  preText: (s) =>
    "すべてを一人で決めることは不可能だった。",
  text: () =>
    "判断は分担され、\n" +
    "権限を持つ代理人たちが配置される。\n\n" +
    "彼らは中心の名で命じ、\n" +
    "中心の意思として振る舞った。\n\n" +
    "だが、人々が日常的に接するのは\n" +
    "もはや中心そのものではない。\n\n" +
    "服従は、\n" +
    "誰に向けられているのか分かりにくくなっていた。",
  choices: [
    {
      text: "代理人に強い権限を与える",
      detail: "迅速な運営を優先する",
      effects: { bias_speed: 1, B: +1, D: -1 },
      next: 63
    },
    {
      text: "代理人の行動を規則で縛る",
      detail: "制度による統制を強める",
      effects: { bias_procedure: 1, A: +2 },
      next: 63
    },
    {
      text: "代理人の役割を説明する",
      detail: "誰の意思なのかを明確にする",
      effects: { bias_narrative: 1, D: +2 },
      next: 63
    },
    {
      text: "現状の運用を黙認する",
      detail: "問題が起きない限り変更しない",
      effects: { bias_avoidance: 1, timePressure: +1 },
      next: 63
    }
  ]
},

/* ===== 63 ===== */
{
  title: "第63章：再編される軍",
  preText: (s) =>
    "武力は、もはや私的なものではなかった。",
  text: () =>
    "兵は集められ、数えられ、維持される。\n" +
    "忠誠は個人ではなく役目に向けられる。\n\n" +
    "これは安定をもたらす。\n" +
    "だが同時に、\n" +
    "力が誰のために使われるのかを\n" +
    "曖昧にしていった。\n\n" +
    "人々は守られていると感じる。\n" +
    "しかし、その守りが\n" +
    "いつ誰に向けられるのかは分からない。",
  choices: [
    {
      text: "軍の統制をさらに強める",
      detail: "命令系統を単純化する",
      effects: { bias_speed: 1, B: +2 },
      next: 64
    },
    {
      text: "軍の運用を制度化する",
      detail: "法と規則で行動を定める",
      effects: { bias_procedure: 1, A: +2 },
      next: 64
    },
    {
      text: "軍の役割を公に説明する",
      detail: "防衛であることを強調する",
      effects: { bias_narrative: 1, D: +2 },
      next: 64
    },
    {
      text: "現状の規模を維持する",
      detail: "拡大も縮小もしない",
      effects: { bias_avoidance: 1, timePressure: +1 },
      next: 64
    }
  ]
},

/* ===== 64 ===== */
{
  title: "第64章：信仰との距離",
  preText: (s) =>
    "信仰は失われていなかった。",
  text: () =>
    "人々は祈り、\n" +
    "秩序の意味を信仰に見出し続けていた。\n\n" +
    "だが、裁定や統治の根拠は\n" +
    "次第に信仰から切り離されていく。\n\n" +
    "支配は神の名を借りなくなり、\n" +
    "それでも神を否定することはできない。\n\n" +
    "両者は距離を保ち、\n" +
    "緊張を孕んだまま並び立つ。",
  choices: [
    {
      text: "信仰との距離を保つ",
      detail: "政治と信仰を分ける姿勢を取る",
      effects: { bias_procedure: 1, D: -1 },
      next: 65
    },
    {
      text: "信仰を秩序の補強に使う",
      detail: "従属を正当化する要素として用いる",
      effects: { bias_narrative: 1, B: +1 },
      next: 65
    },
    {
      text: "信仰の自由を強調する",
      detail: "統治と切り離すことを語る",
      effects: { bias_narrative: 1, D: +2 },
      next: 65
    },
    {
      text: "問題を先送りする",
      detail: "摩擦が起きるまで触れない",
      effects: { bias_avoidance: 1, timePressure: +1 },
      next: 65
    }
  ]
},


];