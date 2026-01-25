import { recalculatePositions } from './resize.js';

let cvs = null;
let ctx = null;

export function init() {
    cvs = document.getElementById('game-canvas');
    if (!cvs) return false;
    ctx = cvs.getContext('2d');
    
    cvs.width = window.innerWidth;
    cvs.height = window.innerHeight;

    window.addEventListener('resize', resize);
    return true;
}

export function resize() {
    if (!cvs) return;
    cvs.width = window.innerWidth;
    cvs.height = window.innerHeight;

    recalculatePositions();
}

export function getSize() {
    return { w: cvs ? cvs.width : 0, h: cvs ? cvs.height : 0 };
}

export function clear() {
    if (!ctx) return;
    ctx.clearRect(0, 0, cvs.width, cvs.height);
}

export function drawBg(color = '#87CEEB') {
    if (!ctx) return;
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, cvs.width, cvs.height);
}

export function circle(x, y, r, color = '#FF6B6B') {
    if (!ctx) return;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();
}

// Shiny candy with lighting effects
export function candy(x, y, r) {
    if (!ctx) return;

    const bodyGradient = ctx.createRadialGradient(x - r * 0.3, y - r * 0.3, 0, x, y, r);
    bodyGradient.addColorStop(0, '#FF9999');   // Light red center
    bodyGradient.addColorStop(0.5, '#FF6B6B'); // Mid red
    bodyGradient.addColorStop(1, '#CC4444');   // Dark red edge

    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fillStyle = bodyGradient;
    ctx.fill();
    ctx.closePath();

    // outer glow
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.strokeStyle = '#AA3333';
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.closePath();

    // shine top l eft
    ctx.beginPath();
    ctx.arc(x - r * 0.35, y - r * 0.35, r * 0.3, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
    ctx.fill();
    ctx.closePath();

    //  shine small
    ctx.beginPath();
    ctx.arc(x - r * 0.15, y - r * 0.5, r * 0.12, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
    ctx.fill();
    ctx.closePath();

    // reflection
    const reflectGradient = ctx.createRadialGradient(x, y + r * 0.5, 0, x, y + r * 0.5, r * 0.4);
    reflectGradient.addColorStop(0, 'rgba(255, 200, 200, 0.3)');
    reflectGradient.addColorStop(1, 'rgba(255, 200, 200, 0)');

    ctx.beginPath();
    ctx.arc(x, y + r * 0.5, r * 0.4, 0, Math.PI * 2);
    ctx.fillStyle = reflectGradient;
    ctx.fill();
    ctx.closePath();
}

export function bubble(x, y, r ) {
    if (!ctx) return;

    const gradient = ctx.createRadialGradient(x, y, 0, x, y, r);
    gradient.addColorStop(0, 'rgba(255, 255, 255, 0.15)');
    gradient.addColorStop(0.7, 'rgba(200, 230, 255, 0.1)');
    gradient.addColorStop(1, 'rgba(180, 220, 255, 0.05)');

    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fillStyle = gradient;
    ctx.fill();
    ctx.closePath();

    //rainbow
    const rainbow = ctx.createRadialGradient(x - r * 0.4, y - r * 0.3, 0, x - r * 0.2, y - r * 0.1, r * 0.8);
    rainbow.addColorStop(0, 'rgba(255, 255, 150, 0.6)'); // yellow
    rainbow.addColorStop(0.3, 'rgba(150, 255, 200, 0.4)'); // green
    rainbow.addColorStop(0.6, 'rgba(255, 180, 180, 0.2)'); // pink/red
    rainbow.addColorStop(1, 'rgba(255, 255, 255, 0)');

    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fillStyle = rainbow;
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.strokeStyle = 'rgba(255, 255, 255, .8)';
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.closePath();

    //shine highlight
    ctx.beginPath();
    ctx.arc(x - r * 0.35, y - r * 0.35, r * 0.25, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(255, 255, 255, 0.85)';
    ctx.fill();
    ctx.closePath();
}

export function line(x1, y1, x2, y2, color = '#8B4513', w = 3) {
    if (!ctx) return;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = color;
    ctx.lineWidth = w;
    ctx.lineCap = 'round';
    ctx.stroke();
    ctx.closePath();
}

// Curved rope using quadratic bezier
export function rope(x1, y1, x2, y2, sag = 50, color = '#8B4513', w = 4) {
    if (!ctx) return;

    // Control point for curve (midpoint + sag)
    const midX = (x1 + x2) / 2;
    const midY = (y1 + y2) / 2 + sag;  // sag makes it hang down

    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.quadraticCurveTo(midX, midY, x2, y2);
    ctx.strokeStyle = color;
    ctx.lineWidth = w;
    ctx.lineCap = 'round';
    ctx.stroke();
    ctx.closePath();
}

export function img(image, x, y, w = null, h = null) {
    if (!ctx || !image) return;
    const width = w || image.width;
    const height = h || image.height;
    ctx.drawImage(image, x - width / 2, y - height / 2, width, height);
}

export function loadImg(src) {
    return new Promise((resolve, reject) => {
        const i = new Image();
        i.onload = () => resolve(i);
        i.onerror = () => reject(new Error('Failed: ' + src));
        i.src = src;
    });
}

// Swipe slash effect - like real Cut the Rope
export function swipeSlash(path) {
    if (!ctx || path.length < 2) return;

    ctx.save();

 
    ctx.shadowColor = '#FFD700';
    ctx.shadowBlur = 15;
    ctx.strokeStyle = '#FFD700';
    ctx.lineWidth = 8;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    ctx.beginPath();
    ctx.moveTo(path[0].x, path[0].y);
    for (let i = 1; i < path.length; i++) {
        ctx.lineTo(path[i].x, path[i].y);
    }
    ctx.stroke();

  
    ctx.shadowBlur = 0;
    ctx.strokeStyle = '#FFFFFF';
    ctx.lineWidth = 3;
    ctx.stroke();

    ctx.restore();
}

export function getCtx() {
    return ctx;
}
