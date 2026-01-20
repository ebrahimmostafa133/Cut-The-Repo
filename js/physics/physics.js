export const G = 980;
export const DAMP = 0.998;

export function gravity(obj, dt) {
    obj.vy += G * dt;
}

export function move(obj, dt) {
    obj.x += obj.vx * dt;
    obj.y += obj.vy * dt;
}

export function slow(obj) {
    obj.vx *= DAMP;
    obj.vy *= DAMP;
}

export function ropeLimit(candy, anchor, len) {
    const dx = candy.x - anchor.x;
    const dy = candy.y - anchor.y;
    const dist = Math.sqrt(dx * dx + dy * dy);

    if (dist > len) {
        const nx = dx / dist;
        const ny = dy / dist;

        candy.x = anchor.x + nx * len;
        candy.y = anchor.y + ny * len;

        const dot = candy.vx * nx + candy.vy * ny;
        if (dot > 0) {
            candy.vx -= dot * nx;
            candy.vy -= dot * ny;
        }
    }
}

export function updateCandy(candy, anchor, len, dt) {
    gravity(candy, dt);
    move(candy, dt);
    ropeLimit(candy, anchor, len);
    slow(candy);
}

export function stopped(candy, threshold = 0.5) {
    return Math.abs(candy.vx) < threshold && Math.abs(candy.vy) < threshold;
}
