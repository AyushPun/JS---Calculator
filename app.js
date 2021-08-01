var a = document.querySelector("#add");
var s = document.querySelector("#sub");
var m = document.querySelector("#multiply");
var d = document.querySelector("#divide");
var cpy = document.querySelector("#copy");

const first = document.querySelector("#input1");
const second = document.querySelector("#input2");
let x = 0,
  y = 0;
const output = document.querySelector("#output");

function input() {
  x = parseFloat(input1.value);
  y = parseFloat(input2.value);
}

function add() {
  input();
  output.value = x + y;
}

function sub() {
  input();
  output.value = x - y;
}

function multiply() {
  input();
  output.value = x * y;
}

function divide() {
  input();
  output.value = x / y;
}

a.addEventListener("click", add);
s.addEventListener("click", sub);
m.addEventListener("click", multiply);
d.addEventListener("click", divide);
clear.addEventListener("click", () => {
  input1.value = "";
  input2.value = "";
  output.value = "";
});

cpy.addEventListener("click", () => {
  /* Get the text field */
  var copyText = document.getElementById("output");

  /* Select the text field */
  copyText.select();

  /* Copy the text inside the text field */
  document.execCommand("copy");

  /* Alert the copied text */
  alert("Copied the text: " + copyText.value);
});
