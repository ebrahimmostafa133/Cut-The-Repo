// Audio State
import { populateBoxesList, populateLevelsList } from "./levels/levels.js";
import { LEVELS_STATUS } from "./levels/levels_info.js";
let isSoundOn = true;
let isMusicOn = true;

// All Buttons
const allButtons = document.querySelectorAll("button");

// Sound Buttons Logic
const musicBtn = document.querySelector('.music-button');
const soundBtn = document.querySelector('.sound-button');

// Reset Popup Logic
const resetScreen = document.querySelector(".reset-screen");
const resetBtn = document.querySelector(".options-screen-reset button");
const noBtn = document.querySelector(".no-button");
const yesBtn = document.querySelector(".yes-button");

// Play Screen & Intro Video Logic
let hasIntroPlayed = false;
const playBtn = document.querySelector(".play-button");
const introVideoContainer = document.querySelector(".intro-video");
const introVideo = document.getElementById("introVideo");
const skipBtn = document.querySelector(".skip-btn");

// Music Setup
const backgroundMusic = new Audio("./audio/game_music.mp3");

// Game Screen Transitions
const gameScreen = document.querySelector(".game-screen");



backgroundMusic.loop = true;

// Attempt Autoplay
backgroundMusic.play().catch(error => {
    console.log("Autoplay prevented. Waiting for user interaction.");
    document.addEventListener('click', () => {
        if (isMusicOn) backgroundMusic.play();
    }, { once: true });
});


function updateIcons() {
    const musicIcon = musicBtn.querySelector('i');
    const soundIcon = soundBtn.querySelector('i');

    if (isMusicOn) {
        // Music On
        musicIcon.className = "fa-solid fa-music";
        if (backgroundMusic.paused) backgroundMusic.play();
    } else {
        // Music Off
        musicIcon.className = "fa-solid fa-music";
        musicIcon.style.opacity = "0.5";
        backgroundMusic.pause();
    }

    // Explicit Off Icon approach
    if (!isMusicOn) {
        musicBtn.classList.add('muted');
        musicIcon.style.opacity = "0.4";
    } else {
        musicBtn.classList.remove('muted');
        musicIcon.style.opacity = "1";
    }


    if (isSoundOn) {
        // Sound On
        soundIcon.className = "fa-solid fa-volume-high";
        soundBtn.classList.remove('muted');
        soundIcon.style.opacity = "1";
    } else {
        // Sound Off
        soundIcon.className = "fa-solid fa-volume-xmark";
        soundBtn.classList.add('muted');
        soundIcon.style.opacity = "0.4";
    }
}

if (musicBtn) {
    musicBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        isMusicOn = !isMusicOn;
        updateIcons();
    });
}

if (soundBtn) {
    soundBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        isSoundOn = !isSoundOn;
        updateIcons();
    });
}

// Global Tap Sound
allButtons.forEach(button => {
    button.addEventListener("click", () => {
        if (isSoundOn) {
            const audio = new Audio("./audio/tap.mp3");
            audio.play();
        }
    });
});


if (resetBtn) {
    resetBtn.addEventListener("click", () => {
        resetScreen.style.display = "flex";
    });
}

if (noBtn) {
    noBtn.addEventListener("click", () => {
        resetScreen.style.display = "none";
    });
}

if (yesBtn) {
    yesBtn.addEventListener("click", () => {

        //reset all the game variables
        //////////////////////////////////
        //////////////////////////////////
        //////////////////////////////////
        //////////////////////////////////
        //////////////////////////////////
        //////////////////////////////////
        //////////////////////////////////

        resetScreen.style.display = "none";
        document.querySelector(".options-screen").style.display = "none";
        document.querySelector(".main-screen").style.display = "block";
    });
}

//add event listener to play button
document.querySelector(".options-button").addEventListener("click", () => {
    document.querySelector(".main-screen").style.display = "none";
    document.querySelector(".options-screen").style.display = "flex";
});

//back button handler (for buttons with data-back-to attribute)
document.querySelectorAll(".back-button[data-back-to]").forEach(btn => {
    btn.addEventListener("click", () => {
        // Hide current screen
        const currentScreen = btn.closest("[class$='-screen']");
        if (currentScreen) currentScreen.style.display = "none";

        // Show target screen
        const target = btn.dataset.backTo;
        const targetScreen = document.querySelector(`.${target}`);
        if (targetScreen) targetScreen.style.display = "block";
    });
});

// Play Screen & Intro Video Logic
// Play Button Click
if (playBtn) {
    playBtn.addEventListener("click", () => {
        document.querySelector(".main-screen").style.display = "none";
        document.querySelector(".options-screen").style.display = "none";

        if (!hasIntroPlayed) {
            // Show Video
            introVideoContainer.style.display = "flex";
            introVideo.play();
            hasIntroPlayed = true;
        } else {
            // Show Play Screen directly
            document.querySelector(".play-screen").style.display = "block";
        }
    });
}

// Video Ended Event
if (introVideo) {
    introVideo.addEventListener("ended", () => {
        finishVideo();
    });
}

// Skip Button
if (skipBtn) {
    skipBtn.addEventListener("click", () => {
        introVideo.pause();
        finishVideo();
    });
}

function finishVideo() {
    introVideoContainer.style.display = "none";
    document.querySelector(".play-screen").style.display = "block";
}


// Slider Logic
const validBoxesElements = populateBoxesList();
const boxes = document.querySelectorAll(".level-box");
const leftArrow = document.querySelector(".arrow-left");
const rightArrow = document.querySelector(".arrow-right");
let currentLevelIndex = 0;

function updateSlider() {
    // Hide all, show current
    boxes.forEach((box, index) => {
        if (index === currentLevelIndex) {
            box.classList.add("active");
        } else {
            box.classList.remove("active");
        }
    });

    // Handle Arrows
    leftArrow.disabled = currentLevelIndex === 0;
    rightArrow.disabled = currentLevelIndex === boxes.length - 1;
}

// Initial State
if (boxes.length > 0) {
    updateSlider();
}

if (leftArrow) {
    leftArrow.addEventListener("click", () => {
        if (currentLevelIndex > 0) {
            currentLevelIndex--;
            updateSlider();
        }
    });
}

if (rightArrow) {
    rightArrow.addEventListener("click", () => {
        if (currentLevelIndex < boxes.length - 1) {
            currentLevelIndex++;
            updateSlider();
        }
    });
}



// Game Screen Transitions
validBoxesElements.forEach((boxElement, index) => {
    boxElement.addEventListener("click", () => {
        window.gameState.selectedBoxId = index;
        // Transition to Level Selector screen

        document.querySelector(".play-screen").style.display = "none";
        gameScreen.style.display = "block";
        populateLevelsList(window.gameState.selectedBoxId);
    });
})

function initGameState() {
    window.gameState = {
        levelsStatus: [...LEVELS_STATUS],
        selectedBoxId: null,
        currentLevel: null
    }
}


initGameState();