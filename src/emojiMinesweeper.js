/**
 * Basics
 */
// Disable the Friendly Error System
// (not used in the minified version of p5js)
disableFriendlyErrors = true;

// Prevent right mouse click from opening browser context menu in order to be able to flag
document.addEventListener("contextmenu", (event) => event.preventDefault());

// Canvas
let cnv; // The canvas element that will contain the game

const themes = {
  mine: {
    name: "mine",
    title: "Minesweeper",
    mine: "💣",
    detonation: "💥",
    won: "😄",
    lost: "😵",
  },
  flower: {
    name: "flower",
    title: "Emoji Flower Field",
    mine: "🌺",
    detonation: "🐛",
    won: "😊",
    lost: "😔",
  },
  mushroom: {
    name: "mushroom",
    title: "Emoji Shroom Picker",
    mine: "🍄",
    detonation: "🦄",
    won: "😎",
    lost: "😵‍💫",
  },
  bear: {
    name: "bear",
    title: "Emoji Bearspotting",
    mine: "🐻",
    detonation: "🐾",
    won: "🌳",
    lost: "🪵",
  },
  octopus: {
    name: "octopus",
    title: "Emoji Seasweeper",
    mine: "🐙",
    detonation: "🌊",
    won: "⛵️",
    lost: "🦈",
  },
  japan: {
    name: "japan",
    title: "絵文字マインスイーパー",
    mine: "🏯",
    detonation: "👺",
    won: "🌸",
    lost: "🈲",
  },
};

/**
 * Dark Mode
 */
let darkMode = JSON.parse(localStorage.getItem("darkMode")) ?? false;

/**
 * Emojis
 */
let theme = window.localStorage.getItem("theme") ?? "mine";
window.localStorage.setItem("mainEmoji", themes[theme]["mine"]);

let mineEmoji = themes[theme]["mine"];
let detonationEmoji = themes[theme]["detonation"];
let wonEmoji = themes[theme]["won"];
let lostEmoji = themes[theme]["lost"];

// Emojis
let CLOSED = darkMode ? "⬛" : "🔲";
let NUMBERS = ["⬜️", "1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣", "7️⃣", "8️⃣"];
if (darkMode) NUMBERS[0] = "";
let FLAG = "🚩";
let DETONATION = detonationEmoji;
let MINE = mineEmoji;
let WRONG = "❌";
let WON = wonEmoji;
let LOST = lostEmoji;
let TIMER = "⌛";
let MOVES = "🧮";

// Easter egg
document.addEventListener("keydown", (e) => {
  if (e.code === "KeyM") {
    CLOSED = "🥸";
    NUMBERS = ["🥸", "🥸", "🥸", "🥸", "🥸", "🥸", "🥸", "🥸", "🥸"];
    FLAG = "🥸";
    DETONATION = "🥸";
    MINE = "🥸";
    WRONG = "🥸";
    WON = "🥸";
    LOST = "🥸";
    TIMER = "🥸";
    MOVES = "🥸";
  }
});
