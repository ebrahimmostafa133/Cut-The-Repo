// Audio State
let isSoundOn = true;
let isMusicOn = true;

// Music Setup
const backgroundMusic = new Audio("./audio/game_music.mp3");
backgroundMusic.loop = true;

// Attempt Autoplay
backgroundMusic.play().catch(error => {
    console.log("Autoplay prevented. Waiting for user interaction.");
    document.addEventListener('click', () => {
        if (isMusicOn) backgroundMusic.play();
    }, { once: true });
});

// Sound Buttons Logic
const musicBtn = document.querySelector('.music-button');
const soundBtn = document.querySelector('.sound-button');

function updateIcons() {
    const musicIcon = musicBtn.querySelector('i');
    const soundIcon = soundBtn.querySelector('i');

    if (isMusicOn) {
        // Music On
        musicIcon.className = "fa-solid fa-music";
        if (backgroundMusic.paused) backgroundMusic.play();
    } else {
        // Music Off - You can use fa-music-slash or just adjust logic
        musicIcon.className = "fa-solid fa-music"; // Keep icon, maybe strike through or opacity?
        // Or specific off icon:
        // musicIcon.className = "fa-solid fa-music"; 
        // Let's add an explicit visual indicator or use a different icon if available.
        // For standard FA free:
        musicIcon.style.opacity = "0.5";
        // Or add a strike-through using CSS, or use "fa-slash" overlay.
        // Let's stick to opacity/color change for simplicity or specific class if exists.
        // Better: fa-volume-xmark for sound?
        backgroundMusic.pause();
    }

    // Explicit Off Icon approach
    if (!isMusicOn) {
        musicBtn.classList.add('muted'); // Applies visual dimming/overlay from CSS if defined
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
        soundIcon.style.opacity = "0.4"; // Visual feedback
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
const allButtons = document.querySelectorAll("button");
allButtons.forEach(button => {
    button.addEventListener("click", () => {
        if (isSoundOn) {
            const audio = new Audio("./audio/tap.mp3");
            audio.play();
        }
    });
});

// Reset Popup Logic
const resetScreen = document.querySelector(".reset-screen");
const resetBtn = document.querySelector(".options-screen-reset button");
const noBtn = document.querySelector(".no-button");
const yesBtn = document.querySelector(".yes-button");

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

//add event listener to back button
document.querySelector(".back-button").addEventListener("click", () => {
    document.querySelector(".options-screen").style.display = "none";
    document.querySelector(".main-screen").style.display = "block";
});

