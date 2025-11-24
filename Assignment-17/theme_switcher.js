const themeButtons = document.querySelectorAll("button[data-theme-btn]");
const currentThemeLabel = document.getElementById("currentTheme");

themeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const chosenTheme = button.getAttribute("data-theme-btn"); 
    applyTheme(chosenTheme);
  });
});

function applyTheme(themeName) {
  const bodyElement = document.body;

  const className = `theme-${themeName}`;

  bodyElement.setAttribute("class", className);
  bodyElement.setAttribute("data-theme", themeName);

  currentThemeLabel.textContent = `Current theme: ${themeName}`;
}