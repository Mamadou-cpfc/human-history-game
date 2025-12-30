let state = {
  bias_speed: 0,
  bias_procedure: 0,
  bias_narrative: 0,
  bias_avoidance: 0,
  A: 70,
  B: 70,
  D: 70,
  timePressure: 0
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

/* ===== 選択肢可視数制御 ===== */
function getVisibleChoices(scene, state) {
  const minChoices = scene.minChoices ?? 2;
  const maxChoices = scene.choices.length;

  let visibleCount = maxChoices;

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