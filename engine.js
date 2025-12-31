let state = {
  bias_speed: 0,
  bias_procedure: 0,
  bias_narrative: 0,
  bias_avoidance: 0,
  A: 70,
  B: 70,
  D: 70,
  timePressure: 0,

  legitimacy_source: null,
  belief_strength: 0,
  lineage_strength: 0,
  law_strength: 0
};

let current = 0;

// DOM
const intro = document.getElementById("intro");
const game = document.getElementById("game");
const startBtn = document.getElementById("startBtn");

const titleDiv = document.getElementById("title");
const preDiv = document.getElementById("pre");
const textDiv = document.getElementById("text");
const choicesDiv = document.getElementById("choices");

// 導入
startBtn.onclick = () => {
  intro.classList.add("hidden");
  game.classList.remove("hidden");
  render();
};

/* ===== フェードアウト判定 ===== */
function checkFadeOut(state, current) {
  if (current < 70) return null;

  if (state.D <= 40 && state.timePressure >= 25) {
    return {
      title: "断絶",
      text:
        "理由は語られなくなり、問いは残されたままだった。\n" +
        "人々は従わなくなり、構造は静かに解体されていった。\n\n" +
        "反乱も革命も起きなかった。\n" +
        "ただ、この集団は次の時代へ何も残せなかった。"
    };
  }

  if (state.A <= 45 && state.bias_avoidance >= 6) {
    return {
      title: "消散",
      text:
        "決められないことが常態となり、\n" +
        "制度は存在しながら使われなくなっていった。\n\n" +
        "人々は中心を必要としなくなり、\n" +
        "集団はゆっくりと散っていった。"
    };
  }

  if (state.B >= 80 && state.D <= 50) {
    return {
      title: "崩壊",
      text:
        "秩序は力によって保たれていた。\n" +
        "だが、それが理由ではなかった。\n\n" +
        "力が揺らいだ瞬間、\n" +
        "従っていたのではなく耐えていたことが露わになった。\n\n" +
        "王国は、音を立てて崩れた。"
    };
  }

  return null;
}

/* ===== 予兆レベル ===== */
function getOmenLevel(state, current) {
  if (current < 70) return 0;

  let omen = 0;
  if (state.D < 55) omen++;
  if (state.A < 55) omen++;
  if (state.timePressure > 20) omen++;
  if (state.bias_avoidance >= 6) omen++;

  return omen;
}

function getOmenText(level) {
  switch (level) {
    case 1:
      return "決定は行われているはずだったが、手応えは薄かった。";
    case 2:
      return "命令と現実のあいだに、わずかなズレが生じていた。";
    case 3:
      return "人々は従っていたが、納得しているようには見えなかった。";
    case 4:
      return "この仕組みが、いつまで機能するのかは誰にも分からなかった。";
    default:
      return "";
  }
}

/* ===== 選択肢可視数制御 ===== */
function getVisibleChoices(scene, state) {
  const minChoices = scene.minChoices ?? 2;
  let visibleCount = scene.choices.length;

  if (state.timePressure >= 12) {
    visibleCount = 1;
  } else if (state.bias_avoidance >= 6) {
    visibleCount = 2;
  } else if (state.A < 60 || state.D < 60) {
    visibleCount = 3;
  }

  visibleCount = Math.max(visibleCount, minChoices);
  return scene.choices.slice(0, visibleCount);
}

/* ===== 描画 ===== */
function render() {
  const fade = checkFadeOut(state, current);
  if (fade) {
    titleDiv.textContent = fade.title;
    preDiv.textContent = "";
    textDiv.textContent = fade.text;
    choicesDiv.innerHTML = "";
    return;
  }

  const scene = scenarios[current];

  titleDiv.textContent = scene.title;
  preDiv.textContent = scene.preText ? scene.preText(state) : "";

  const omen = getOmenLevel(state, current);
  if (omen > 0) {
    preDiv.textContent += "\n" + getOmenText(omen);
  }

  textDiv.textContent = scene.text(state);
  choicesDiv.innerHTML = "";

  const visibleChoices = getVisibleChoices(scene, state);
  visibleChoices.forEach((choice, index) => {
    const btn = document.createElement("button");
    btn.className = "choice";
    btn.innerHTML = `
      <div class="choice-title">(${index + 1}) ${choice.text}</div>
      <div class="choice-detail">${choice.detail || ""}</div>
    `;
    btn.onclick = () => selectChoice(choice);
    choicesDiv.appendChild(btn);
  });
}
// 各章終了時に評価
function applyStructuralDecay(state) {
  if (state.bias_avoidance >= 5 && state.timePressure >= 10) {
    state.A -= 1;
  }

  if (state.bias_speed >= 5 && state.bias_narrative < 2) {
    state.D -= 1;
  }

  if (state.B >= 80 && state.bias_narrative < 3) {
    state.D -= 1;
  }
}
/* ===== 選択処理 ===== */
function selectChoice(choice) {
  if (choice.effects) {
    for (const key in choice.effects) {
      state[key] = (state[key] || 0) + choice.effects[key];
    }
  }
  current = choice.next;
  render();
}