//level data is stored in relative coordinates
//physics calculations use absolute coordinates

export function relToAbsX(rx, w) {
    return rx * w;
}

export function relToAbsY(ry, h) {
    return ry * h;
}

export function relToAbsDist(rDist, h) {
    return rDist * h;
}

export function absToRelX(x, w) {
    return w > 0 ? x / w : 0;
}

export function absToRelY(y, h) {
    return h > 0 ? y / h : 0;
}