// Use distinct variable names to avoid conflicts with global scope (if any)
const lvlAppUnlockedLevels = document.querySelectorAll(".level-item.unlocked");
const lvlAppBoxCutterOverlay = document.querySelector(".box-cutter-overlay");
// New: Tape Roll is now in Game Screen
const lvlAppTapeRollOverlay = document.querySelector(".game-screen .tape-roll-overlay");
const lvlAppGameScreen = document.querySelector(".game-screen");
const lvlAppLevelsScreen = document.querySelector(".levels-screen");
const lvlAppGameBackBtnContainer = document.querySelector(".game-screen-back-button");


// 2. Reverse Transition (Level -> Game)
const lvlAppLevelBackButtons = document.querySelectorAll(".level-screen-back-button");

lvlAppLevelBackButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        const parentScreen = btn.closest("[class$='-screen']");

        // 1. Hide Current Level Screen
        if (parentScreen) parentScreen.style.display = "none";

        // 2. Prepare Game Screen (Hidden Content)
        if (lvlAppLevelsScreen) lvlAppLevelsScreen.style.display = "none";
        if (lvlAppGameBackBtnContainer) lvlAppGameBackBtnContainer.style.display = "none";

        // 3. Show Game Screen Container
        if (lvlAppGameScreen) lvlAppGameScreen.style.display = "block";

        // 4. Start Animation (Tape Roll drops on Game Screen)
        // Use global tape roll overlay since it's now in Game Screen
        if (lvlAppTapeRollOverlay) lvlAppTapeRollOverlay.classList.add("active");

        // 5. Reveal Content Halfway
        setTimeout(() => {
            // Show Game Screen Content
            if (lvlAppLevelsScreen) lvlAppLevelsScreen.style.display = "flex"; // Restore flex
            if (lvlAppGameBackBtnContainer) lvlAppGameBackBtnContainer.style.display = "block";
        }, 2000);

        // 6. Reset Overlay
        setTimeout(() => {
            if (lvlAppTapeRollOverlay) lvlAppTapeRollOverlay.classList.remove("active");
        }, 1000);
    });
});
