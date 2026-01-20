import { init, clear, drawBg, circle, line, rope, img, loadImg, getSize, swipeSlash } from './renderer.js';
import { gravity, move, ropeLimit, slow } from './physics.js';

let running = false;
let paused = false;
let frameId = null;
let lastT = 0;

let candy = null;
let ropes = [];
let starsRel = [];

let starImg = null;
let frogImg = null;

// Swipe tracking for cutting
let swipePath = [];
let isDrawing = false;

// ═══════════════════════════════════════════════════════
// 1. SETUP - reads level data and positions objects
// ═══════════════════════════════════════════════════════
function setup(levelData = null) {
    const { w, h } = getSize();

    if (!levelData) {
        levelData = {
            ropes: [
                { anchorX: 0.25, anchorY: 80, len: 200 },   // Left - PRIMARY (straight)
                { anchorX: 0.45, anchorY: 60, len: 450 },   // Center - curved (> 300 needed)
                { anchorX: 0.65, anchorY: 60, len: 600 }    // Right - curved (> 460 needed)
            ],
            stars: [
                { x: 0.30, y: 0.50 },
                { x: 0.55, y: 0.40 }
            ]
        };
    }

    // First, find the primary rope (shortest defined, or first)
    const primary = levelData.ropes[0];
    const primaryAnchor = { x: w * primary.anchorX, y: primary.anchorY };

    // Candy hangs directly below primary anchor at full rope length
    const candyX = primaryAnchor.x;
    const candyY = primaryAnchor.y + primary.len;

    // Calculate lengths for other ropes so they can reach the candy
    ropes = levelData.ropes.map((r, i) => {
        const anchor = { x: w * r.anchorX, y: r.anchorY };

        if (i === 0) {
            // Primary rope - use defined length
            return { anchor, len: r.len, cut: false };
        } else {
            // Other ropes - calculate length to reach candy + some slack for curve
            const dx = candyX - anchor.x;
            const dy = candyY - anchor.y;
            const distToCandy = Math.sqrt(dx * dx + dy * dy);
            const len = r.len || (distToCandy + 50);  // Add slack for curve
            return { anchor, len, cut: false };
        }
    });

    candy = {
        x: primaryAnchor.x,
        y: primaryAnchor.y + primary.len,
        vx: 0,
        vy: 0,
        r: 25
    };

    console.log('Candy at:', candy.x, candy.y);

    starsRel = levelData.stars.map(s => ({
        rx: s.x,
        ry: s.y,
        r: 15,
        got: false
    }));

    swipePath = [];
}

// ═══════════════════════════════════════════════════════
// 2. APPLY CONSTRAINTS - physics for all ropes
// ═══════════════════════════════════════════════════════
function update(dt) {
    if (!candy) return;

    // Check if all ropes are cut
    const allCut = ropes.every(r => r.cut);

    gravity(candy, dt);
    move(candy, dt);

    // Only apply rope constraints if not all cut
    if (!allCut) {
        ropes.forEach(rope => {
            if (!rope.cut) {
                ropeLimit(candy, rope.anchor, rope.len);
            }
        });
    }

    slow(candy);
}

// ═══════════════════════════════════════════════════════
// 3. CUT ROPE - checks if swipe line crosses rope
// ═══════════════════════════════════════════════════════
function checkSwipeCuts() {
    if (swipePath.length < 2) return;

    // Get last two points of swipe
    const p1 = swipePath[swipePath.length - 2];
    const p2 = swipePath[swipePath.length - 1];

    ropes.forEach(rope => {
        if (!rope.cut && candy) {
            // Check if swipe line intersects with rope line
            if (linesIntersect(
                p1.x, p1.y, p2.x, p2.y,
                rope.anchor.x, rope.anchor.y, candy.x, candy.y
            )) {
                rope.cut = true;
                console.log('Rope cut!');
            }
        }
    });
}

// ═══════════════════════════════════════════════════════
// 4. LINE INTERSECTION - checks if two lines cross
// ═══════════════════════════════════════════════════════
function linesIntersect(x1, y1, x2, y2, x3, y3, x4, y4) {
    // Calculate direction of lines
    const d1 = direction(x3, y3, x4, y4, x1, y1);
    const d2 = direction(x3, y3, x4, y4, x2, y2);
    const d3 = direction(x1, y1, x2, y2, x3, y3);
    const d4 = direction(x1, y1, x2, y2, x4, y4);

    if (((d1 > 0 && d2 < 0) || (d1 < 0 && d2 > 0)) &&
        ((d3 > 0 && d4 < 0) || (d3 < 0 && d4 > 0))) {
        return true;
    }

    // Check for collinear cases
    if (d1 === 0 && onSegment(x3, y3, x4, y4, x1, y1)) return true;
    if (d2 === 0 && onSegment(x3, y3, x4, y4, x2, y2)) return true;
    if (d3 === 0 && onSegment(x1, y1, x2, y2, x3, y3)) return true;
    if (d4 === 0 && onSegment(x1, y1, x2, y2, x4, y4)) return true;

    return false;
}

function direction(ax, ay, bx, by, cx, cy) {
    return (cx - ax) * (by - ay) - (cy - ay) * (bx - ax);
}

function onSegment(ax, ay, bx, by, cx, cy) {
    return cx >= Math.min(ax, bx) && cx <= Math.max(ax, bx) &&
        cy >= Math.min(ay, by) && cy <= Math.max(ay, by);
}

// ═══════════════════════════════════════════════════════
// DRAW - render everything
// ═══════════════════════════════════════════════════════
function draw() {
    const { w, h } = getSize();

    clear();
    drawBg('#87CEEB');

    // Draw ropes
    ropes.forEach(r => {
        if (!r.cut) {
            circle(r.anchor.x, r.anchor.y, 10, '#4AA3DF');
            // Calculate sag based on rope length
            const sag = Math.min(r.len * 0.5, 80);
            rope(r.anchor.x, r.anchor.y, candy.x, candy.y, sag, '#8B4513', 4);
        }
    });

    // Draw candy
    if (candy) {
        circle(candy.x, candy.y, candy.r, '#FF6B6B');
    }

    // Draw stars
    starsRel.forEach(s => {
        if (!s.got) {
            const sx = w * s.rx;
            const sy = h * s.ry;
            if (starImg) {
                img(starImg, sx, sy, 40, 40);
            } else {
                circle(sx, sy, s.r, '#FFD700');
            }
        }
    });

    // Draw frog
    if (frogImg) {
        img(frogImg, w / 2, h - 80, 100, 100);
    } else {
        circle(w / 2, h - 80, 50, '#4CAF50');
    }

    // Draw swipe slash (golden glow like real game)
    if (isDrawing && swipePath.length > 1) {
        swipeSlash(swipePath);
    }
}

// ═══════════════════════════════════════════════════════
// GAME LOOP
// ═══════════════════════════════════════════════════════
function loop(t) {
    if (!running) return;

    const dt = Math.min((t - lastT) / 1000, 0.1);
    lastT = t;

    if (!paused) update(dt);
    draw();
    frameId = requestAnimationFrame(loop);
}

export async function start() {
    if (running) return;

    // Wait for DOM to be fully ready
    if (document.readyState !== 'complete') {
        await new Promise(resolve => window.addEventListener('load', resolve));
    }

    if (!init()) {
        console.error('Canvas failed');
        return;
    }

    try { starImg = await loadImg('./images/star_result_small.png'); } catch (e) { }
    try { frogImg = await loadImg('./images/pin-omnom.png'); } catch (e) { }

    // Wait for next animation frame AND ensure canvas has size
    const waitForCanvas = () => {
        return new Promise(resolve => {
            const check = () => {
                const { w, h } = getSize();
                if (w > 0 && h > 0) {
                    resolve();
                } else {
                    requestAnimationFrame(check);
                }
            };
            requestAnimationFrame(check);
        });
    };

    await waitForCanvas();

    setup();
    running = true;
    paused = false;
    lastT = performance.now();
    frameId = requestAnimationFrame(loop);

    // Swipe to cut (like real Cut the Rope)
    const canvas = document.getElementById('game-canvas');

    // Mouse events
    canvas.addEventListener('mousedown', (e) => {
        isDrawing = true;
        swipePath = [{ x: e.clientX, y: e.clientY }];
    });

    canvas.addEventListener('mousemove', (e) => {
        if (isDrawing) {
            swipePath.push({ x: e.clientX, y: e.clientY });
            // Keep path short for performance
            if (swipePath.length > 20) swipePath.shift();
            checkSwipeCuts();
        }
    });

    canvas.addEventListener('mouseup', () => {
        isDrawing = false;
        swipePath = [];
    });

    canvas.addEventListener('mouseleave', () => {
        isDrawing = false;
        swipePath = [];
    });



    canvas.addEventListener('touchmove', (e) => {
        e.preventDefault();
        if (isDrawing) {
            const touch = e.touches[0];
            swipePath.push({ x: touch.clientX, y: touch.clientY });
            if (swipePath.length > 20) swipePath.shift();
            checkSwipeCuts();
        }
    });

    canvas.addEventListener('touchend', () => {
        isDrawing = false;
        swipePath = [];
    });
}

export function stop() {
    running = false;
    if (frameId) {
        cancelAnimationFrame(frameId);
        frameId = null;
    }
}

export function pause() {
    paused = true;
}

export function resume() {
    if (paused) {
        paused = false;
        lastT = performance.now();
    }
}

// Export for external use (Zeyad's input.js)
export function cutRopeAt(mouseX, mouseY) {
    swipePath.push({ x: mouseX, y: mouseY });
    checkSwipeCuts();
}

start();
