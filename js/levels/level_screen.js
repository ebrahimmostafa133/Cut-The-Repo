// this files handles setup up canvas eac
import { start, stop } from "../physics/gameloop.js";
import { playAudio } from "../index.js";
import { showCompleteScreen, hideCompleteScreen } from "./complete.js";
import { LEVELS_INFO } from "./levels_info.js";
import { advanceCurrentLevel } from "./levels.js";
import { saveProgress } from "../storage/store.js";
const levelScreenElement = document.querySelector(`.level1-screen`);
const statesScreenElement = document.querySelector(`.states-screen`);
const wonScreenNextButton = statesScreenElement.querySelector("button.next-button")
const winAudio = new Audio("./audio/win.mp3");

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

        //play win sound
        playAudio(winAudio);
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
    const levelsStatus = window.gameState.levelsStatus;
    const currentIndex = levelsStatus.findIndex(l => l.id == window.gameState.currentLevel.id);
    levelsStatus[currentIndex].stars = starsCollected;
    //unlock next level
    const nextLevelStatus = levelsStatus[currentIndex + 1];
    console.log(nextLevelStatus)
    if (nextLevelStatus) nextLevelStatus.status = "unlocked";
    saveProgress();
}

function transitionToWonScreen(starsCollected) {


    statesScreenElement.style.display = 'block';
    statesScreenElement.style.opacity = '0';
    statesScreenElement.offsetHeight; // trigger reflow
    statesScreenElement.style.transition = 'opacity 0.5s ease-in';
    statesScreenElement.style.opacity = '1';
    statesScreenElement.querySelector(".star-container").className = `star-container stars-${starsCollected}`;
}
function transitionToWonScreen(starsCollected) {


    statesScreenElement.style.display = 'block';
    statesScreenElement.style.opacity = '0';
    statesScreenElement.offsetHeight; // trigger reflow
    statesScreenElement.style.transition = 'opacity 0.5s ease-in';
    statesScreenElement.style.opacity = '1';
    statesScreenElement.querySelector(".star-container").className = `star-container stars-${starsCollected}`;
}

function transitionToNextLevel() {
    statesScreenElement.style.display = 'none';
    levelScreenElement.style.display = "block";
    let box = LEVELS_INFO.boxes.find(box => box.levels.some(l => l.id == window.gameState.currentLevel.id));
    levelScreenElement.style.backgroundImage = `url("${box.gameBgUrl}")`;
}

function transitionToCompleteScreen() {
    levelScreenElement.style.display = "none";
    statesScreenElement.style.display = "none";
    showCompleteScreen();

}

// run star collection sounds
const starsCollectedAudio = [
    new Audio("./audio/star_1.mp3"),
    new Audio("./audio/star_2.mp3"),
    new Audio("./audio/star_3.mp3")
];

window.addEventListener("StarGot", (e) => {
    console.log(e);
    playAudio(starsCollectedAudio[e.detail.starsCollected-1]);
})

// play sound when a rope is cut
const ropeBleakAudio = new Audio("./audio/rope_bleak_1.mp3");
window.addEventListener("RopeCut", e => {
    playAudio(ropeBleakAudio);
})