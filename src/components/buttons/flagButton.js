export default function FlagButton(board) {
  // Button
  const flagButton = document.createElement("div");
  flagButton.title = `Toggle flag mode`;
  flagButton.className = `emoji-button`;
  flagButton.innerHTML = `🚩`;

  // Flag Button Functionality
  let flagMode = false;
  flagButton.addEventListener("click", () => {
    toggleFlagMode();
  });

  // Utility Function
  function toggleFlagMode() {
    if (flagMode) {
      localStorage.setItem("flagMode", "false");
      flagButton.classList.remove("emoji-button-clicked");
      board.classList.remove("flag-mode");
      flagMode = false;
    } else {
      localStorage.setItem("flagMode", "true");
      flagButton.classList.add("emoji-button-clicked");
      board.classList.add("flag-mode");
      flagMode = true;
    }
  }

  // Keyboard Action Handling
  document.addEventListener("keydown", (e) => {
    if (e.code === "KeyF") {
      toggleFlagMode();
    }
  });

  return flagButton;
}
