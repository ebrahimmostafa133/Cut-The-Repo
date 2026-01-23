//menu button definition
const menuBtn = document.querySelector(".menu-button");
const statesScreen = document.querySelector(".states-screen");

//retry level button definition
const retryBtn = document.querySelector(".retry-button");

//next level button definition
const nextBtn = document.querySelector(".next-button");

//menu button logic
menuBtn.addEventListener("click", () => {
    statesScreen.style.display = "none";
    gameScreen.style.display = "block";
    gameScreen.classList.add("fade-in");

    gameScreen.addEventListener("animationend", () => {
        gameScreen.classList.remove("fade-in");
    }, { once: true });
});

//retry button logic
/////////////////////////
/////////////////////////
/////////////////////////
/////////////////////////
/////////////////////////
/////////////////////////

//next level button logic
/////////////////////////
/////////////////////////
/////////////////////////
/////////////////////////
/////////////////////////
/////////////////////////