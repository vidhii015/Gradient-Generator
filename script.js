let display = document.getElementsByClassName("display")[0];
let directionSelect = document.getElementById("direction");
let color1 = document.getElementById("color1");
let color2 = document.getElementById("color2");
let clipboard = document.getElementById("clipboard");
let textarea = document.getElementsByTagName("textarea")[0];
let refreshBtn = document.getElementById("refreshBtn");
let applyBtn = document.getElementById("applyBtn");

const getRandomColor = () => {
  const randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
  return `#${randomHex}`;
};

generateGradient = (isRandom) => {
  if (isRandom) {
    color1.value = getRandomColor();
    color2.value = getRandomColor();
  }

  const gradient = `linear-gradient(to ${directionSelect.value}, ${color1.value}, ${color2.value})`;
  display.style.backgroundImage = gradient;
  textarea.value = `background: ${gradient};`;
  return gradient;
};

clipboard.addEventListener("click", () =>
  window.navigator.clipboard.writeText(textarea.value)
);

color1.value = "#f3ecec";
color2.value = "#000000";
directionSelect.value = "Left top";

color1.addEventListener("input", () => generateGradient());
color2.addEventListener("input", () => generateGradient());
directionSelect.addEventListener("change", () => generateGradient());

applyBtn.addEventListener("click", () => {
  const gradient = generateGradient();
  document.body.style.backgroundImage = gradient;
});

applyBtn.addEventListener("click", () => generateGradient(false));
refreshBtn.addEventListener("click", () => generateGradient(true));

document.body.style.backgroundImage = generateGradient();
