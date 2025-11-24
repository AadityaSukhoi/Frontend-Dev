const textArea = document.getElementById("message");
const counterDisplay = document.getElementById("counter");
const resetButton = document.getElementById("resetBtn");

const maxCharacters = 100;

function updateCounter() {
  const currentLength = textArea.value.length;
  const remaining = maxCharacters - currentLength;
  counterDisplay.textContent = `Remaining characters: ${remaining >= 0 ? remaining : 0}`;

  counterDisplay.style.color = "black";

  if (remaining <= 20 && remaining > 0) {
    counterDisplay.style.color = "orange";
  } else if (remaining <= 0) {
    counterDisplay.style.color = "red";
  }
}

textArea.addEventListener("keydown", (event) => {
  const allowedKeys = [
    "Backspace",
    "Delete",
    "ArrowLeft",
    "ArrowRight",
    "ArrowUp",
    "ArrowDown",
    "Tab"
  ];

  const currentLength = textArea.value.length;

  if (currentLength >= maxCharacters && !allowedKeys.includes(event.key)) {
    event.preventDefault(); 
  }
});

textArea.addEventListener("input", updateCounter);

resetButton.addEventListener("click", () => {
  textArea.value = "";
  updateCounter();
});

updateCounter();