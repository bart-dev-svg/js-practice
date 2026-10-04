const message = document.getElementById("message");
const button = document.getElementById("myButton");

button.addEventListener("click", function () {
  message.textContent = "You clicked the button!";
});