let state = {
  bias_speed: 0,
  bias_procedure: 0,
  bias_narrative: 0,
  bias_avoidance: 0,
  A: 70,
  B: 70,
  D: 70,
  timePressure: 0,

  legitimacy_source: null, // "belief" | "lineage" | "law"
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

// 導入 → ゲーム開始
startBtn.onclick = () => {
  intro.classList.add("hidden");
  game.classList.remove("hidden");
  render();
};

/* ===== フェードアウト判定 ===== */
function checkFadeOut(state) {
  if (state.D <= 40 && state.timePressure >= 25) {
    return {
      title: "断絶",
      text:
        "理由は語られなくなり、問いは残されたままだった。\n" +
        "人々は従わなくなり、構造は静かに解体されていった。\n" +
        "この集団は、次の時代へ何も残せなかった。"
    };
  }

  if (state.A <= 45 && state.bias_avoidance >= 6) {
    return {
      title: "消散",
      text:
        "決められないことが常態となり、判断は先送りされ続けた。\n" +
        "集団は留まる理由を失い、やがて散っていった。"
    };
  }

  if (state.B <= 40 && state.D <= 50) {
    return {
      title: "崩壊",
      text:
        "力によって保たれた秩序は、力を失った瞬間に瓦解した。\n" +
        "従っていたのではなく、耐えていただけだった。"
    };
  }

  return null;
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
  const fade = checkFadeOut(state);
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