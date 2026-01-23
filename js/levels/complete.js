/**
 * Complete Screen Logic
 * Handles user interaction when all levels are finished.
 */

const completeScreen = document.querySelector('.complete-screen');
const mainScreen = document.querySelector('.main-screen');

export function showCompleteScreen() {
    if (completeScreen) {
        completeScreen.style.display = 'flex';
        document.addEventListener('keydown', handleEnterKey);
    }
}

export function hideCompleteScreen() {
    if (completeScreen) {
        completeScreen.style.display = 'none';
        document.removeEventListener('keydown', handleEnterKey);
    }
}

function handleEnterKey(event) {
    if (event.key === 'Enter') {
        const style = window.getComputedStyle(completeScreen);
        if (style.display !== 'none') {
            hideCompleteScreen();
            if (mainScreen) {
                mainScreen.style.display = 'block';
            }
        }
    }
}

document.addEventListener('keydown', handleEnterKey);
