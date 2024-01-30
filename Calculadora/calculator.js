let number = document.getElementsByClassName("num");
number = [...number];

let display = document.getElementById("display");
let numberFromDisplay;

number.forEach((numForButton) => {
  numForButton.addEventListener("click", () => {
    numberFromDisplay = display.value += numForButton.innerText;
  });
});

let symbol = document.getElementsByClassName("option");
symbol = [...symbol];
let symbolChoose;

symbol.forEach((symbol) => {
  symbol.addEventListener("click", () => {
    symbolChoose = display.value += symbol.innerText;
  });
});

function equal() {
  display.value = eval(display.value);
}

function clean() {
  display.value = "";
}

document.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    equal();
  }
});

document.addEventListener("keydown", function(event) {
  if (event.key === "Backspace") {
    clean();
  }
});