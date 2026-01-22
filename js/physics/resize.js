import { getSize } from './renderer.js';
import { relToAbsX, relToAbsY, relToAbsDist } from './coords.js';

let candy = null;
let ropes = [];
let starsRel = [];
let frog = null;

export function setGameObjects(candyRef, ropesRef, starsRef, frogRef) {
    candy = candyRef;
    ropes = ropesRef;
    starsRel = starsRef;
    frog = frogRef;
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

 
    starsRel.forEach(star => {
        star.x = relToAbsX(star.rx, w);
        star.y = relToAbsY(star.ry, h);
    });

   
    if (frog) {
        frog.x = relToAbsX(frog.rx, w);
        frog.y = relToAbsY(frog.ry, h);
    }
}
