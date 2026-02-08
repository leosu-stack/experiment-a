import { getGameNames, getRandomMessage } from "./messages.js";

const gameSelect = document.getElementById("game-select");
const messageDisplay = document.getElementById("message");
const generateBtn = document.getElementById("generate-btn");
const gameIcon = document.getElementById("game-icon");

const gameIcons = {
  "Elden Ring Nightreign": "\u{1F525}",
  "Starcraft 2": "\u{1F680}",
};

function populateGameSelect() {
  const games = getGameNames();
  games.forEach((game) => {
    const option = document.createElement("option");
    option.value = game;
    option.textContent = game;
    gameSelect.appendChild(option);
  });
}

function showMessage() {
  const selectedGame = gameSelect.value;
  if (!selectedGame) {
    messageDisplay.textContent = "Pick a game first!";
    messageDisplay.classList.remove("visible");
    gameIcon.textContent = "";
    return;
  }

  const msg = getRandomMessage(selectedGame);
  gameIcon.textContent = gameIcons[selectedGame] || "\u{1F3AE}";
  messageDisplay.classList.remove("visible");

  // Brief pause to retrigger CSS transition
  requestAnimationFrame(() => {
    messageDisplay.textContent = msg;
    messageDisplay.classList.add("visible");
  });
}

populateGameSelect();
generateBtn.addEventListener("click", showMessage);
gameSelect.addEventListener("change", showMessage);
