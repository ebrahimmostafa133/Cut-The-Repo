const LEVELS_INFO = {

    boxes: [
        {
            id: 0,
            name: "Box 1",
            bgUrl: "../images/box1_bgd.png",
            gameBgUrl: "../images/bgr_01_p1.jpg",
            levels: [
                // Level 1-1: 
                {
                    id: 1, name: "Level 1", difficulty: "easy",
                    "physics": {
                        ropes: [
                            { anchorX: 0.50, anchorY: 0.08, lenRel: 0.30 }
                        ],
                        stars: [
                            { x: 0.50, y: 0.50 },
                            { x: 0.50, y: 0.62 },
                            { x: 0.50, y: 0.74 }
                        ],
                        frog: { x: 0.50, y: 0.88, r: 50 }
                    }
                },
                // Level 1-2:
                {
                    id: 2, name: "Level 2", difficulty: "easy",
                    "physics": {
                        ropes: [
                            { anchorX: 0.30, anchorY: 0.05, lenRel: 0.25 },
                            { anchorX: 0.50, anchorY: 0.04, lenRel: 0.50 },
                            { anchorX: 0.70, anchorY: 0.05, lenRel: 0.80 }
                        ],
                        stars: [
                            { x: 0.35, y: 0.40 },
                            { x: 0.50, y: 0.55 },
                            { x: 0.65, y: 0.50 }
                        ],
                        frog: { x: 0.50, y: 0.88, r: 50 }
                    }
                },
                // Level 1-3: 
                {
                    id: 3, name: "Level 3", difficulty: "easy",
                    "physics": {
                        ropes: [
                            { anchorX: 0.50, anchorY: 0.20, lenRel: 0.20 },
                            { anchorX: 0.60, anchorY: 0.20, lenRel: 0.10 },
                            { anchorX: 0.50, anchorY: 0.50, lenRel: 0.20 }
                        ],
                        stars: [
                            { x: 0.43, y: 0.35 },
                            { x: 0.41, y: 0.55 },
                            { x: 0.50, y: 0.72 }
                        ],
                        frog: { x: 0.60, y: 0.72, r: 50 }
                    }
                },
                // Level 1-4: Three ropes - strategic cutting
                {
                    id: 4, name: "Level 4", difficulty: "medium",
                    "physics": {
                        ropes: [
                            { anchorX: 0.50, anchorY: 0.15, lenRel: 0.20 },
                            { anchorX: 0.45, anchorY: 0.30, lenRel: 0.20 },
                            { anchorX: 0.55, anchorY: 0.30, lenRel: 0.20 },
                            { anchorX: 0.50, anchorY: 0.45, lenRel: 0.20 }
                        ],
                        stars: [
                            { x: 0.50, y: 0.47 },
                            { x: 0.38, y: 0.48 },
                            { x: 0.50, y: 0.65 }
                        ],
                        frog: { x: 0.60, y: 0.72, r: 50 }
                    }
                }
            ]
        },
        {
            id: 1,
            name: "Box 2",
            bgUrl: "../images/box2_bgd.png",
            gameBgUrl: "../images/bgr_02_p1.jpg",
            levels: [
                {
                    id: 5, name: "Level 5", difficulty: "easy",
                    "physics": {
                        ropes: [
                            { anchorX: 0.55, anchorY: 0.50, lenRel: 0.28 },
                            { anchorX: 0.45, anchorY: 0.30, lenRel: 0.20 }
                        ],
                        stars: [
                            { x: 0.45, y: 0.60 },
                            { x: 0.55, y: 0.40 },
                            { x: 0.55, y: 0.30 }
                        ],
                        bubbles: [
                            { x: 0.45, y: 0.70, r: 34 }
                        ],
                        frog: { x: 0.55, y: 0.88, r: 50 }, 
                    }
                },
                {
                    id: 6, name: "Level 6", difficulty: "medium",
                    "physics": {
                        ropes: [
                            { anchorX: 0.50, anchorY: 0.20, lenRel: 0.20 }
                        ],
                        stars: [
                            { x: 0.50, y: 0.10 },
                            { x: 0.50, y: 0.55 },
                            { x: 0.50, y: 0.70 }
                        ],
                        bubbles: [
                            { x: 0.50, y: 0.55, r: 34 },
                        ],
                        frog: { x: 0.50, y: 0.88, r: 50 }
                    }
                },
                {
                    id: 7, name: "Level 7", difficulty: "medium",
                    "physics": {
                        ropes: [
                            { anchorX: 0.50, anchorY: 0.05, lenRel: 0.30 },
                            { anchorX: 0.50, anchorY: 0.50, lenRel: .30}
                        ],
                        candy: { x: 0.80, y: 0.20 },
                        stars: [
                            { x: 0.40, y: 0.50 },
                            { x: 0.65, y: 0.50 },
                            { x: 0.50, y: 0.03 }
                        ],
                        bubbles: [
                            { x: 0.58, y: 0.77, r: 34 },
                        ],
                        frog: { x: 0.50, y: 0.90, r: 50 }
                    }
                },
                 {
                    id: 8, name: "Level 8", difficulty: "medium",
                    "physics": {
                        ropes: [
                            { anchorX: 0.50, anchorY: 0.17, lenRel: 0.67},
                            { anchorX: 0.40, anchorY: 0.80, lenRel: .30},
                            { anchorX: 0.55, anchorY: 0.60, lenRel: .30}
                        ],
                        candy: { x: 0.80, y: 0.20 },
                        stars: [
                            { x: 0.40, y: 0.50 },
                            { x: 0.40, y: 0.55 },
                            { x: 0.50, y: 0.93 }
                        ],
                        bubbles: [
                            { x: 0.50, y: 0.93, r: 34 },
                        ],
                        frog: { x: 0.50, y: 0.07, r: 50 }
                    }
                },

            ]
        },
        {
            id: 2,
            name: "Box 3",
            bgUrl: "../images/box3_bgd.png",
            gameBgUrl: "../images/bgr_03_p1.jpg",
            levels: [
                {
                    id: 9, name: "Level 9", difficulty: "medium",
                    "physics": {
                        ropes: [
                            { anchorX: 0.50, anchorY: 0.17, lenRel: 0.67},
                            { anchorX: 0.40, anchorY: 0.17, lenRel: .77},
                           
                        ],
                        candy: { x: 0.65, y: 0.85 },
                        stars: [
                            { x: 0.40, y: 0.50 },
                            { x: 0.40, y: 0.55 },
                            { x: 0.50, y: 0.93 }
                        ],
                        bubbles: [
                            { x: 0.43, y: 0.91, r: 34 },
                            { x: 0.50, y: 0.93, r: 34 },
                            { x: 0.57, y: 0.91, r: 34 },
                        ],
                        frog: { x: 0.40, y: 0.07, r: 50 }
                    }
                },
                 {
                    id: 10, name: "Level 10", difficulty: "medium",
                    "physics": {
                        ropes: [
                            { anchorX: 0.40, anchorY: 0.50, lenRel: 0.30},
                            { anchorX: 0.40, anchorY: 0.60, lenRel: .30},
                            { anchorX: 0.60, anchorY: 0.50, lenRel: .30},
                            { anchorX: 0.60, anchorY: 0.60, lenRel: .3},
                           
                        ],
                        candy: { x: 0.5, y: 0.5 },
                        stars: [
                            { x: 0.50, y: 0.19 },
                            { x: 0.55, y: 0.33 },
                            { x: 0.50, y: 0.80 }
                        ],
                        bubbles: [
                            { x: 0.50, y: 0.50, r: 34 },
                            { x: 0.50, y: 0.60, r: 34 },
                        ],
                        frog: { x: 0.50, y: 0.07, r: 50 }
                    }
                },
                {
                    id: 11, name: "Level 11", difficulty: "medium",
                    "physics": {
                        ropes: [
                            { anchorX: 0.40, anchorY: 0.30, lenRel: 0.20},
                            { anchorX: 0.60, anchorY: 0.30, lenRel: .20},
                            { anchorX: 0.50, anchorY: 0.50, lenRel: .20},
                           
                        ],
                        candy: { x: 0.5, y: 0.5 },
                        stars: [
                            { x: 0.50, y: 0.19 },
                            { x: 0.40, y: 0.52 },
                            { x: 0.60, y: 0.52 }
                        ],
                        bubbles: [
                            { x: 0.40, y: 0.52, r: 34 },
                            { x: 0.60, y: 0.52, r: 34 },
                        ],
                        frog: { x: 0.50, y: 0.90, r: 50 }
                    }
                },
                {
                    id: 12, name: "Level 12", difficulty: "medium",
                    "physics": {
                        ropes: [
                            { anchorX: 0.40, anchorY: 0.30, lenRel: 0.25},
                            { anchorX: 0.40, anchorY: 0.40, lenRel: .30},
                            { anchorX: 0.40, anchorY: 0.50, lenRel: .35},
                            { anchorX: 0.60, anchorY: 0.30, lenRel: 0.25},
                            { anchorX: 0.60, anchorY: 0.40, lenRel: .30},
                            { anchorX: 0.60, anchorY: 0.50, lenRel: .35},
                           
                        ],
                        candy: { x: 0.5, y: 0.5 },
                        stars: [
                            { x: 0.42, y: 0.82 },
                            { x: 0.50, y: 0.60 },
                            { x: 0.50, y: 0.90 }
                        ],
                        bubbles: [
                            { x: 0.50, y: 0.90, r: 34 },
                        ],
                        frog: { x: 0.50, y: 0.10, r: 50 }
                    }
                },
            ]
        }

    ]
}

const LEVELS_STATUS = LEVELS_INFO.boxes
    .flatMap(box => box.levels)
    .map((level, index) => ({
        id: level.id,
        status: index === 0 ? "unlocked" : "locked",
        stars: 0
    }));

export { LEVELS_INFO, LEVELS_STATUS };
