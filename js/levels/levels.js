// Use distinct variable names to avoid conflicts with global scope (if any)
import { LEVELS_INFO } from "./levels_info.js";
import { setupLevel } from "./level_screen.js";
const boxes = LEVELS_INFO.boxes;

const boxesListELement = document.querySelector("div.slider-container")


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


function createBoxElement(box_info) {
    let div = document.createElement("div")
    div.setAttribute("class", "level-box box-1");
    div.innerHTML = `
        <div class="box-label">${box_info.name}</div>
        <div class="omnom-container">
            <img src="./images/pin-omnom.png" alt="Om Nom" class="omnom">
        </div>
        `
    return div;
}

function populateBoxesList() {
    let elements = [];
    for (let i = 0; i < boxes.length; i++) {
        let el = createBoxElement(boxes[i]);
        boxesListELement.appendChild(el);
        elements.push(el);
    }

    const comingSoon = document.createElement('div');
    comingSoon.className = "level-box box-2";
    comingSoon.innerHTML = `
        <div class="more-text">
            <span>Next Level Coming Soon</span>
        </div>
    `;

    boxesListELement.appendChild(comingSoon);

    return elements;
}

// Level Selection 
const levelsListElement = document.querySelector("div.levels-screen");

function createLevelElement(levelStatus)
{
    let div = document.createElement("div");
    const isLocked = levelStatus.status == "locked";
    div.className = `level-item ${levelStatus.status}`
    div.innerHTML = `
        <span class="level-number">${levelStatus.id}</span>
        <img src="./images/level_bgd.png" alt="level tape" class="level-bg${isLocked ? "-lock": ""}">
        <div class="level-stars">
            <div class="star-display stars-${levelStatus.stars}"></div>
        </div>
    `
    return div;
}

function populateLevelsList(boxId)
{
    levelsListElement.innerHTML = "";
    let elements = []
    let box = boxes.find(box => box.id == boxId);
    let levels = box.levels;
    for (let i = 0; i < levels.length; i++)
    {
        let level = levels[i];
        let levelStatus = window.gameState["levelsStatus"].find(s => s.id == level.id);
        let element = createLevelElement(levelStatus);
        levelsListElement.appendChild(element);
        elements.push(element);
        element.addEventListener("click", function() {
            if(levelStatus.status == "unlocked")
            {
                transitionToLevelScreen(level);
            }
        });
    } 
    return elements;
}

// 1. Forward Transition (Game -> Level)
function transitionToLevelScreen(level) {
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
            if (screen.classList.contains(`level${level.id}-screen`) || screen.classList.contains("level1-screen") || screen.classList.contains("level2-screen") || screen.classList.contains("level3-screen")) {
                screen.style.display = "none";
            }
        });

        // Show selected level screen
        const targetScreen = document.querySelector(`.level1-screen`);
        if (targetScreen) {
            targetScreen.style.display = "block";
        } else {
            console.warn(`Target screen .level1-screen not found.`);
        }
        
    }, 2000); // Switch halfway (1s)

    setTimeout(() => {
        // Reset overlay after full animation
        if (lvlAppBoxCutterOverlay) lvlAppBoxCutterOverlay.classList.remove("active");
    }, 2000); // Reset after full animation

    window.gameState.currentLevel = level;
    console.log(level)
    setupLevel();
}


export { populateBoxesList, populateLevelsList };
