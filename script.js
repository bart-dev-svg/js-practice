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
const nameInput = document.getElementById("nameInput");
const greetButton = document.getElementById("greetButton");
const greeting = document.getElementById("greeting");

greetButton.addEventListener("click", function () {
  const name = nameInput.value;

  if (name === "") {
    greeting.textContent = "Please type your name first.";
  } else {
    greeting.textContent = "Nice to meet you, " + name + "!";
  }
});
const fruits = ["apple", "banana", "cherry"];

console.log(fruits);
console.log(fruits[0]);
console.log(fruits.length);
for (const fruit of fruits) {
  console.log("I like " + fruit);
}
const fruitList = document.getElementById("fruitList");

for (const fruit of fruits) {
  const item = document.createElement("li");
  item.textContent = fruit;
  fruitList.appendChild(item);
}
const fruitInput = document.getElementById("fruitInput");
const addFruitButton = document.getElementById("addFruitButton");

addFruitButton.addEventListener("click", function () {
  const newFruit = fruitInput.value;

  if (newFruit === "") {
    return;
  }

  const item = document.createElement("li");
  item.textContent = newFruit;
  fruitList.appendChild(item);

  fruitInput.value = "";
});
fruitList.addEventListener("click", function (event) {
  if (event.target.tagName === "LI") {
    event.target.remove();
  }
});