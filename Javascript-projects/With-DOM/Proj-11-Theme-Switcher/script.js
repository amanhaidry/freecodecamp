// Themes array
const themes = [
  { name: "light", message: "Light theme activated 🌞" },
  { name: "dark", message: "Dark theme activated 🌙" },
];

const button = document.getElementById("theme-switcher-button");
const dropdown = document.getElementById("theme-dropdown");
const messageBox = document.getElementById("theme-message");

// Toggle dropdown visibility
button.addEventListener("click", () => {
  const expanded = button.getAttribute("aria-expanded") === "true";
  if (expanded) {
    dropdown.hidden = true;
    button.setAttribute("aria-expanded", "false");
  } else {
    dropdown.hidden = false;
    button.setAttribute("aria-expanded", "true");
  }
});

// Handle theme selection
dropdown.addEventListener("click", (e) => {
  if (e.target && e.target.nodeName === "LI") {
    const themeName = e.target.id.replace("theme-", "");

    // Remove existing theme classes
    document.body.classList.remove(...themes.map((t) => "theme-" + t.name));

    // Add selected theme class
    document.body.classList.add("theme-" + themeName);

    // Update message
    const themeObj = themes.find((t) => t.name === themeName);
    if (themeObj) {
      messageBox.textContent = themeObj.message;
    }

    // Close dropdown
    dropdown.hidden = true;
    button.setAttribute("aria-expanded", "false");
  }
});
