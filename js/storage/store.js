export function saveProgress() {
    localStorage.setItem('levelsStatus', JSON.stringify(window.gameState.levelsStatus));
}

export function loadProgress() {
    const saved = localStorage.getItem('levelsStatus');
    return saved ? JSON.parse(saved) : null;
}

export function clearProgress() {
    localStorage.removeItem('levelsStatus');
    localStorage.removeItem('introPlayed');
}

export function saveIntroPlayed() {
    localStorage.setItem('introPlayed', 'true');
}

export function hasIntroBeenPlayed() {
    return localStorage.getItem('introPlayed') === 'true';
}

export function saveMusicState(state) {
    localStorage.setItem("musicState", state);
}

export function loadMusicState() {
    const state = localStorage.getItem("musicState");
    return state !== "false" && state !== "off";
}

export function saveSoundState(state) {
    localStorage.setItem("soundState", state);
}

export function loadSoundState() {
    const state = localStorage.getItem("soundState");
    return state !== "false" && state !== "off";
}