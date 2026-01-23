// this files handles setup up canvas eac
import { start, stop } from "../physics/gameloop.js";
import { showCompleteScreen, hideCompleteScreen } from "./complete.js";
import { advanceCurrentLevel } from "./levels.js";
const levelScreenElement = document.querySelector(`.level1-screen`);
const wonScreenElement = document.querySelector(`.states-screen`);
const wonScreenNextButton = wonScreenElement.querySelector("button.next-button")
export function setupLevel() {
    stop();
    start(window.gameState.currentLevel.physics);
}

window.addEventListener("EndLevel", (e) => {
    const { won, starsCollected } = e.detail;

    if (won) {
        levelScreenElement.style.display = "none";
        // transition to statesScreen;
        transitionToWonScreen(starsCollected);
        updateLevelStatus(starsCollected);
    }
    else
    {
        // restart the game after a brief wait
        setTimeout(setupLevel, 500);
    }
})
wonScreenNextButton.addEventListener("click", () => {
    //advance the level;
    if (advanceCurrentLevel()) {
        transitionToNextLevel();
        setupLevel();
    }
    else {
        transitionToCompleteScreen()
    }
});

function updateLevelStatus(starsCollected) {
    const currentLevelStatus = window.gameState.levelsStatus.find(l => l.id == window.gameState.currentLevel.id);
    currentLevelStatus.stars = starsCollected;
    //unlock next level
    const nextLevelStatus = window.gameState.levelsStatus.find(l => l.id == currentLevelStatus.id + 1)
    console.log(nextLevelStatus)
    if (nextLevelStatus) nextLevelStatus.status = "unlocked";
}

function transitionToWonScreen(starsCollected) {


    wonScreenElement.style.display = 'block';
    wonScreenElement.style.opacity = '0';
    wonScreenElement.offsetHeight; // trigger reflow
    wonScreenElement.style.transition = 'opacity 0.5s ease-in';
    wonScreenElement.style.opacity = '1';
    wonScreenElement.querySelector(".star-container").className = `star-container stars-${starsCollected}`;
}

function transitionToNextLevel() {
    wonScreenElement.style.display = 'none';
    levelScreenElement.style.display = "block";
}

function transitionToCompleteScreen() {
    levelScreenElement.style.display = "none";
    wonScreenElement.style.display = "none";
    showCompleteScreen();

}