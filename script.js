const display = document.querySelector("#display");

const inputSize = document.querySelector("#input-size");
const inputFont = document.querySelector("#select-font");
const inputColor = document.querySelector("#input-color");
const inputBgColor = document.querySelector("#input-bg-color");
const inputText = document.querySelector("#enter-text");

const showSize = document.querySelector("#show-size");
const showFont = document.querySelector("#show-font");
const showColor = document.querySelector("#show-color");
const showBgColor = document.querySelector("#show-bg-color");

inputSize.addEventListener("input", handleInput);
inputFont.addEventListener("input", handleInput);
inputColor.addEventListener("input", handleInput);
inputBgColor.addEventListener("input", handleInput);
inputText.addEventListener("input", handleInput);

function handleInput() {
  const fontSize = inputSize.value;
  const font = inputFont.value;
  const color = inputColor.value;
  const backgroundColor = inputBgColor.value;
  const text = inputText.value;

  console.log(fontSize, font, color, backgroundColor, text);

  display.style.fontSize = fontSize;
  display.style.fontFamily = font;
  display.style.color = color;
  display.style.backgroundColor = backgroundColor;
  display.innerHTML = text;

  showSize.innerHTML = fontSize;
  showFont.innerHTML = font;
  showColor.innerHTML = color;
  showBgColor.innerHTML = backgroundColor;
}
