// this files handles setup up canvas eac
import { start, stop } from "../physics/gameloop.js";

const levelScreenElement = document.querySelector(`.level1-screen`);
const wonScreenElement = document.querySelector(`.states-screen`);
const wonScreenNextButton = wonScreenElement.querySelector("button.next-button")
export function setupLevel()
{
    stop();
    start(window.gameState.currentLevel.physics);
}

window.addEventListener("EndLevel", (e) => {
    const {won, starsCollected} = e.detail;

    if(won)
    {
        levelScreenElement.style.display = "none";
        // transition to statesScreen;
        transitionToWonScreen(starsCollected);
    }
    else
    {
        // restart the game after a brief wait
        setTimeout(setupLevel, 500);
    }
})

function transitionToWonScreen(starsCollected)
{


    wonScreenElement.style.display = 'block';
    wonScreenElement.style.opacity = '0';
    wonScreenElement.offsetHeight; // trigger reflow
    wonScreenElement.style.transition = 'opacity 0.5s ease-in';
    wonScreenElement.style.opacity = '1';

}