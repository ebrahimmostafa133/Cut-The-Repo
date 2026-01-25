// Audio State
import { populateBoxesList, populateLevelsList } from "./levels/levels.js";
import { LEVELS_STATUS } from "./levels/levels_info.js";
import { loadProgress, saveIntroPlayed, hasIntroBeenPlayed, saveMusicState, saveSoundState, loadMusicState, loadSoundState, clearProgress } from "./storage/store.js";
let isSoundOn = loadSoundState();
let isMusicOn = loadMusicState();

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
let hasIntroPlayed = hasIntroBeenPlayed();
const playBtn = document.querySelector(".play-button");
const introVideoContainer = document.querySelector(".intro-video");
const introVideo = document.getElementById("introVideo");
const skipBtn = document.querySelector(".skip-btn");

// Music Setup
const backgroundMusic = new Audio("./audio/game_music.mp3");

// Game Screen Transitions
const gameScreen = document.querySelector(".game-screen");



backgroundMusic.loop = true;

if (isMusicOn) {
    backgroundMusic.play().catch(() => {
        // Autoplay blocked by browser - wait for first user interaction
        document.addEventListener('click', () => {
            if (isMusicOn && backgroundMusic.paused) {
                backgroundMusic.play();
            }
        }, { once: true, capture: true });
    });
}


function updateIcons(controlMusic = true) {
    const musicIcon = musicBtn.querySelector('i');
    const soundIcon = soundBtn.querySelector('i');

    if (isMusicOn) {
        // Music On
        musicIcon.className = "fa-solid fa-music";
        if (controlMusic && backgroundMusic.paused) backgroundMusic.play();
    } else {
        // Music Off
        musicIcon.className = "fa-solid fa-music";
        musicIcon.style.opacity = "0.5";
        if (controlMusic) backgroundMusic.pause();
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
updateIcons(false);

if (musicBtn) {
    musicBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        isMusicOn = !isMusicOn;
        updateIcons();
        saveMusicState(isMusicOn);
    });
}

if (soundBtn) {
    soundBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        isSoundOn = !isSoundOn;
        updateIcons();
        saveSoundState(isSoundOn);
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
        
        clearProgress();
        window.gameState.levelsStatus = [...LEVELS_STATUS];
        hasIntroPlayed = false;

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
            saveIntroPlayed();
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
    const savedLevels = loadProgress();
    window.gameState = {
        levelsStatus: savedLevels || [...LEVELS_STATUS],
        selectedBoxId: null,
        currentLevel: null
    }
}


initGameState();

// Prevent Zooming
document.addEventListener("keydown", function (e) {
    if ((e.ctrlKey && (e.key === "+" || e.key === "-" || e.key === "=" || e.key === "0")) ||
        (e.ctrlKey && e.shiftKey && (e.key === "+" || e.key === "_" || e.key === "=" || e.key === "0"))) {
        e.preventDefault();
    }
});

document.addEventListener("wheel", function (e) {
    if (e.ctrlKey) {
        e.preventDefault();
    }
}, { passive: false });



