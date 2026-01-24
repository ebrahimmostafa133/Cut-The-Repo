import { setupLevel } from "../levels/level_screen.js";

//menu button definition
const menuBtn = document.querySelector(".menu-button");
const statesScreen = document.querySelector(".states-screen");
const levelScreen = document.querySelector(".level1-screen");
const gameScreen = document.querySelector(".game-screen");

//retry level button definition
const retryBtn = document.querySelector(".retry-button");

//level screen restart
const restartBtn = document.querySelector(".restart-button");

//menu button logic
menuBtn.addEventListener("click", () => {
    statesScreen.style.display = "none";
    gameScreen.style.display = "block";
    gameScreen.classList.add("fade-in");
    gameScreen.style.animationDuration = "0.4s";

    gameScreen.addEventListener("animationend", () => {
        gameScreen.classList.remove("fade-in");
    }, { once: true });
});

//retry button logic
retryBtn.addEventListener("click", () => {
    statesScreen.style.display = "none";
    levelScreen.style.display = "block";
    setupLevel();
});

//level screen restart
restartBtn.addEventListener("click", () => {
    setupLevel();
});