// import favicon from "./utils/favicon.js";
import Header from "./components/header.js";
import Board from "./components/board.js";
import Footer from "./components/footer.js";
import StatsModal from "./components/modals/statsModal.js";
import HelpModal from "./components/modals/helpModal.js";
import NewGameButton from "./components/buttons/newGameButton.js";
import StatsButton from "./components/buttons/statsButton.js";
import BeginnerButton from "./components/buttons/beginnerButton.js";
import IntermediateButton from "./components/buttons/intermediateButton.js";
import ExpertButton from "./components/buttons/expertButton.js";
import ThemeButton from "./components/buttons/themeButton.js";
import HelpButton from "./components/buttons/helpButton.js";
import FlagButton from "./components/buttons/flagButton.js";
// import MenuContainer from "./components/menu/menuContainer.js";
import DarkModeButton from "./components/buttons/darkModeButton.js";

/**
 * Basics
 */
// Theme
let theme = window.localStorage.getItem("theme");
if (theme === null) {
  window.localStorage.setItem("theme", "mine");
}

// Dark Mode
let darkMode = JSON.parse(localStorage.getItem("darkMode"));
if (darkMode === null) {
  window.localStorage.setItem("darkMode", "false");
}
if (darkMode) {
  document.body.classList.add("dark-mode");
}

// Emoji
let mainEmoji = window.localStorage.getItem("mainEmoji");
if (mainEmoji === null) {
  mainEmoji = "💣";
}

// Modal
window.localStorage.setItem("modalOpen", "false");

// Menu
// window.localStorage.setItem("menuOpen", "false");

// Flag mode
window.localStorage.setItem("flagMode", "false");

// Title
let title = window.localStorage.getItem("title") ?? "Minesweeper";
document.title = title;

// Favicon
// favicon(mainEmoji);

/**
 * Elements
 */
// Game container (used for footer at the bottom functionality)
const gameContainer = document.createElement("div");
gameContainer.setAttribute("id", "game-container");
document.body.appendChild(gameContainer);

// Header
let header = Header(title);
gameContainer.appendChild(header);

// Board
const board = Board();
gameContainer.appendChild(board);

// Buttons and Modals Container
const container = document.createElement("div");
container.setAttribute("id", "container");
gameContainer.appendChild(container);

// New Game Button
const newGameButton = NewGameButton();
container.appendChild(newGameButton);

// Stats Button
const statsButton = StatsButton();
container.appendChild(statsButton);

// statsModal
const statsModal = StatsModal();
container.appendChild(statsModal);

// Help Modal
const helpModal = HelpModal();

emojiButtonsContainer.appendChild(themeButton);

// Help Button
const helpButton = HelpButton();
emojiButtonsContainer.appendChild(helpButton);

// Flag Button
const flagButton = FlagButton(board);
// if (/Android|iPhone/i.test(navigator.userAgent)) {
emojiButtonsContainer.appendChild(flagButton);
// }

// Dark Mode Button
const darkModeButton = DarkModeButton(darkMode);
emojiButtonsContainer.appendChild(darkModeButton);

// Content Wrap (used for footer at the bottom functionality)
const contentWrap = document.createElement("div");
contentWrap.setAttribute("id", "content-wrap");
gameContainer.appendChild(contentWrap);

// Footer
const footer = Footer();
contentWrap.appendChild(footer);

/**
 * Stats Modal
 */
let statsModalOpen = false;

// Utility Function


