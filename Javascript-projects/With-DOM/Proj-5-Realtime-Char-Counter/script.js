const textInput = document.getElementById("text-input");
const charCount = document.getElementById("char-count");
const progress = document.getElementById("progress");

textInput.addEventListener("input", () => {
  let text = textInput.value;

  // Trim if more than maxChars
  if (text.length > 50) {
    text = text.slice(0, 50);
    textInput.value = text;
  }

  // Update counter
  charCount.textContent = `Character Count: ${text.length}/50`;

  // Update progress bar
  const percent = (text.length / 50) * 100;
  progress.style.width = percent + "%";

  // Change color if max reached
  if (text.length === 50) {
    charCount.classList.add("red");
  } else {
    charCount.classList.remove("red");
  }
});
