const LEVELS_INFO = {

    boxes: [
        {
            id: 0,
            name: "Box 1",
            levels: [
                {
                    id: 1, name: "Level 1", difficulty: "easy",
                    "physics": {
                        ropes: [
                            { anchorX: 0.25, anchorY: 0.05, lenRel: 0.2 },   // Left - PRIMARY (straight)
                            { anchorX: 0.45, anchorY: 0.04, lenRel: 0.45 },   // Center - curved
                            { anchorX: 0.65, anchorY: 0.04, lenRel: 0.6 }    // Right - curved
                        ],
                        stars: [
                            { x: 0.30, y: 0.50 },
                            { x: 0.55, y: 0.40 }
                        ],
                        frog: { x: 0.5, y: 0.93, r: 50 }
                    }
                },
                {
                    id: 2, name: "Level 2", difficulty: "medium",
                    "physics": {
                        ropes: [
                            { anchorX: 0.2, anchorY: 0.05, lenRel: 0.25 },
                            { anchorX: 0.5, anchorY: 0.03, lenRel: 0.5 },
                            { anchorX: 0.8, anchorY: 0.05, lenRel: 0.3 }
                        ],
                        stars: [
                            { x: 0.35, y: 0.45 },
                            { x: 0.5, y: 0.35 },
                            { x: 0.7, y: 0.50 }
                        ],
                        frog: { x: 0.5, y: 0.93, r: 50 }
                    }
                },
                {
                    id: 3, name: "Level 3", difficulty: "hard",
                    "physics": {
                        ropes: [
                            { anchorX: 0.15, anchorY: 0.06, lenRel: 0.3 },
                            { anchorX: 0.4, anchorY: 0.02, lenRel: 0.55 },
                            { anchorX: 0.7, anchorY: 0.03, lenRel: 0.65 }
                        ],
                        stars: [
                            { x: 0.25, y: 0.40 },
                            { x: 0.5, y: 0.30 },
                            { x: 0.75, y: 0.45 }
                        ],
                        frog: { x: 0.5, y: 0.93, r: 50 }
                    }
                }
            ]
        },
        {
            id: 1,
            name: "Box 2",
            levels: [
                {
                    id: 4, name: "Level 4", difficulty: "easy",
                    "physics": {
                        ropes: [
                            { anchorX: 0.3, anchorY: 0.05, lenRel: 0.28 },
                            { anchorX: 0.7, anchorY: 0.04, lenRel: 0.32 }
                        ],
                        stars: [
                            { x: 0.5, y: 0.50 }
                        ],
                        frog: { x: 0.5, y: 0.93, r: 50 }
                    }
                },
                {
                    id: 5, name: "Level 5", difficulty: "medium",
                    "physics": {
                        ropes: [
                            { anchorX: 0.2, anchorY: 0.06, lenRel: 0.22 },
                            { anchorX: 0.5, anchorY: 0.02, lenRel: 0.52 },
                            { anchorX: 0.8, anchorY: 0.06, lenRel: 0.25 }
                        ],
                        stars: [
                            { x: 0.35, y: 0.45 },
                            { x: 0.65, y: 0.55 }
                        ],
                        frog: { x: 0.5, y: 0.93, r: 50 }
                    }
                },
                {
                    id: 6, name: "Level 6", difficulty: "hard",
                    "physics": {
                        ropes: [
                            { anchorX: 0.1, anchorY: 0.07, lenRel: 0.35 },
                            { anchorX: 0.35, anchorY: 0.02, lenRel: 0.6 },
                            { anchorX: 0.65, anchorY: 0.01, lenRel: 0.7 },
                            { anchorX: 0.9, anchorY: 0.07, lenRel: 0.28 }
                        ],
                        stars: [
                            { x: 0.25, y: 0.35 },
                            { x: 0.5, y: 0.25 },
                            { x: 0.75, y: 0.40 }
                        ],
                        frog: { x: 0.5, y: 0.93, r: 50 }
                    }
                }
            ]
        },
        {
            id: 2,
            name: "Box 3",
            levels: [
                { id: 7, name: "Level 7", difficulty: "medium" },
                { id: 8, name: "Level 8", difficulty: "hard" }
            ]
        }
    ]
}
const LEVELS_STATUS = [
    {
        id: 1, status: "unlocked", stars: 0
    },
    {
        id: 2, status: "unlocked", stars: 0
    },
    {
        id: 3, status: "locked", stars: 0
    },
    {
        id: 4, status: "locked", stars: 0
    },
    {
        id: 5, status: "locked", stars: 0
    },
    {
        id: 6, status: "locked", stars: 0
    },
    {
        id: 7, status: "locked", stars: 0
    },
    {
        id: 8, status: "locked", stars: 0
    }
]

export { LEVELS_INFO, LEVELS_STATUS };
