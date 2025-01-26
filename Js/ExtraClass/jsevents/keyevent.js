const textInput = document.getElementById("textInput");
const output = document.getElementById("output");

// Keydown event
textInput.addEventListener("keydown", (event) => {
  output.textContent = `Key pressed: ${event.key}`;
});

// Keyup event
textInput.addEventListener("keyup", () => {
  output.textContent += " (Key released)";
});
