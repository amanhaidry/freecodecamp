// Access elements
const regexPattern = document.getElementById("pattern");
const stringToTest = document.getElementById("test-string");
const testButton = document.getElementById("test-btn");
const testResult = document.getElementById("result");

const caseInsensitiveFlag = document.getElementById("i");
const globalFlag = document.getElementById("g");

// Get flags from checkboxes
function getFlags() {
  let flags = "";
  if (caseInsensitiveFlag.checked) flags += "i";
  if (globalFlag.checked) flags += "g";
  return flags;
}

// Highlight on button click 
testButton.addEventListener("click", () => {
  const patternValue = regexPattern.value;

  try {
    const flags = getFlags();
    const regex = new RegExp(patternValue, flags);
    const testString = stringToTest.textContent;
    const matches = testString.match(regex);

    if (matches) {
      const highlighted = testString.replace(regex, (match) => {
        return `<span class="highlight">${match}</span>`;
      });

      // Show the highlighted HTML (satisfies tests)
      stringToTest.innerHTML = highlighted;

      // Display all matches
      testResult.textContent = matches.join(", ");
    } else {
      testResult.textContent = "no match";
    }
  } catch {
    testResult.textContent = "Invalid regex pattern";
  }
});

// If user focuses or starts typing, ensure we’re back to plain text
stringToTest.addEventListener("focus", stripHighlightsToPlain);

// Strip highlight spans back to plain text and refresh originalText
function stripHighlightsToPlain() {
  const plainText = stringToTest.textContent; //textContent ignores HTML tags
  stringToTest.textContent = plainText;
}
