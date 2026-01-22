// this files handles setup up canvas eac
import { start, stop } from "../physics/gameloop.js";

export function setupLevel()
{
    stop();
    start(window.gameState.currentLevel.physics);
}