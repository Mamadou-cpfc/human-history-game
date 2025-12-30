let state = {
  A: 50, B: 50, C: 50, D: 50,
  bias_speed: 0,
  bias_procedure: 0,
  bias_narrative: 0,
  bias_avoidance: 0,
  timePressure: 0,
  externalPressure: 0
};

let current = 0;

function render() {
  const sc = scenarios[current];

  document.getElementById("title").innerText = sc.title;
  document.getElementById("pre").innerText = sc.preText ? sc.preText(state) : "";
  document.getElementById("text").innerText = sc.text(state);

  const choices = [...sc.choices].sort(() => Math.random() - 0.5);
  const area = document.getElementById("choices");
  area.innerHTML = "";

  choices.forEach(c => {
    const btn = document.createElement("button");
    btn.innerText = c.text;
    btn.onclick = () => choose(c);
    area.appendChild(btn);
  });
}

function choose(choice) {
  if (choice.effects) {
    Object.keys(choice.effects).forEach(k => {
      state[k] = (state[k] || 0) + choice.effects[k];
    });
  }
  current = choice.next;
  render();
}

window.onload = render;