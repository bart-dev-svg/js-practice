const message = document.getElementById("message");
const button = document.getElementById("myButton");
const resetButton = document.getElementById("resetButton");

let count = 0;

function updateMessage() {
  if (count === 0) {
    message.textContent = "Counter reset";
  } else if (count >= 5) {
    message.textContent = "Wow, " + count + " clicks!";
  } else {
    message.textContent = "You clicked " + count + " times";
  }
}

button.addEventListener("click", function () {
  count = count + 1;
  updateMessage();
});

resetButton.addEventListener("click", function () {
  count = 0;
  updateMessage();
});