import { LEVELS_INFO } from "./levels_info.js";

const boxes = LEVELS_INFO.boxes;
const boxesListELement = document.querySelector("div.slider-container")

console.log(boxesListELement)

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
export { populateBoxesList };