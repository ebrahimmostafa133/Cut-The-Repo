// Use distinct variable names to avoid conflicts with global scope (if any)
const lvlAppUnlockedLevels = document.querySelectorAll(".level-item.unlocked");
const lvlAppBoxCutterOverlay = document.querySelector(".box-cutter-overlay");
// New: Tape Roll is now in Game Screen
const lvlAppTapeRollOverlay = document.querySelector(".game-screen .tape-roll-overlay");
const lvlAppGameScreen = document.querySelector(".game-screen");
const lvlAppLevelsScreen = document.querySelector(".levels-screen");
const lvlAppGameBackBtnContainer = document.querySelector(".game-screen-back-button");

// 1. Forward Transition (Game -> Level)
lvlAppUnlockedLevels.forEach((level) => {
    level.addEventListener("click", () => {
        // Extract level number
        const levelClass = Array.from(level.classList).find(cls => cls.startsWith("level-") && cls !== "level-item");
        const levelNumber = levelClass ? levelClass.split("-")[1] : null;

        if (!levelNumber) {
            console.error("Could not determine level number from classes:", level.classList);
            return;
        }

        // Hide Game Screen Back Button (Container)
        if (lvlAppGameBackBtnContainer) lvlAppGameBackBtnContainer.style.display = "none";
        // Hide the Levels Screen container
        if (lvlAppLevelsScreen) lvlAppLevelsScreen.style.display = "none";

        // Start overlay animation
        if (lvlAppBoxCutterOverlay) lvlAppBoxCutterOverlay.classList.add("active");

        setTimeout(() => {
            // Hide the main game screen
            if (lvlAppGameScreen) lvlAppGameScreen.style.display = "none";

            // Hide all level screens safely (only those that are actual level screens)
            document.querySelectorAll("[class$='-screen']").forEach(screen => {
                // Check if the screen is a level screen (e.g., level1-screen, level2-screen, etc.)
                if (screen.classList.contains(`level${levelNumber}-screen`) || screen.classList.contains("level1-screen") || screen.classList.contains("level2-screen") || screen.classList.contains("level3-screen")) {
                    screen.style.display = "none";
                }
            });

            // Show selected level screen
            const targetScreen = document.querySelector(`.level${levelNumber}-screen`);
            if (targetScreen) {
                targetScreen.style.display = "block";
            } else {
                console.warn(`Target screen .level${levelNumber}-screen not found.`);
            }

        }, 2000); // Switch halfway (1s)

        setTimeout(() => {
            // Reset overlay after full animation
            if (lvlAppBoxCutterOverlay) lvlAppBoxCutterOverlay.classList.remove("active");
        }, 2000); // Reset after full animation
    });
});

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
