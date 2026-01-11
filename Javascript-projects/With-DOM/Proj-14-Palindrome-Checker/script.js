const input = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");

checkBtn.addEventListener("click", function () {
    if (!input.value) {
      alert("Please input a value");
      return;
    }

    const cleanedInput = input.value.toLowerCase().replace(/[^a-z0-9]/g, "");
    const reversedInput = cleanedInput.split("").reverse().join("");

    if (cleanedInput === reversedInput) {
      result.textContent = `${input.value} is a palindrome.`;
    } else {
      result.textContent = `${input.value} is not a palindrome.`;
    }
  });
