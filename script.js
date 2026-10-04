const message = document.getElementById("message");
const button = document.getElementById("myButton");

let count = 0;

button.addEventListener("click", function () {
  count = count + 1;
  message.textContent = "You clicked " + count + " times";
});
const resetButton = document.getElementById("resetButton");

resetButton.addEventListener("click", function () {
  count = 0;
  message.textContent = "Counter reset";
});