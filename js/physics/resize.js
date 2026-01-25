import { getSize } from './renderer.js';
import { relToAbsX, relToAbsY, relToAbsDist } from './coords.js';

let candy = null;
let ropes = [];
let starsRel = [];
let frog = null;
let bubbles = [];

export function setGameObjects(candyRef, ropesRef, starsRef, frogRef, bubblesRef = []) {
    candy = candyRef;
    ropes = ropesRef;
    starsRel = starsRef;
    frog = frogRef;
    bubbles = bubblesRef;
}

//when resize happens
export function recalculatePositions() {
    const { w, h } = getSize();

    
    ropes.forEach(rope => {
        rope.anchor.x = relToAbsX(rope.anchorRx, w);
        rope.anchor.y = relToAbsY(rope.anchorRy, h);
        rope.len = relToAbsDist(rope.lenRel, h);
    });

    if (candy) {
        candy.x = relToAbsX(candy.rx, w);
        candy.y = relToAbsY(candy.ry, h);
    }

    if (bubbles) {
        bubbles.forEach(bubble => {
            bubble.x = relToAbsX(bubble.rx, w);
            bubble.y = relToAbsY(bubble.ry, h);
        });
    }
 
    starsRel.forEach(star => {
        star.x = relToAbsX(star.rx, w);
        star.y = relToAbsY(star.ry, h);
    });

   
    if (frog) {
        frog.x = relToAbsX(frog.rx, w);
        frog.y = relToAbsY(frog.ry, h);
    }
}
