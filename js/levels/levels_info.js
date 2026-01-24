const LEVELS_INFO = {

    boxes: [
        {
            id: 0,
            name: "Box 1",
            levels: [
                // Level 1-1: 
                {
                    id: 1, name: "Level 1", difficulty: "easy",
                    "physics": {
                        ropes: [
                            { anchorX: 0.50, anchorY: 0.08, lenRel: 0.35 }
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
                            { anchorX: 0.70, anchorY: 0.05, lenRel: 0.55 }
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
                            { x: 0.45, y: 0.55 },
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
                },
                // Level 1-5: Advanced - multiple ropes, precision needed
                {
                    id: 5, name: "Level 5", difficulty: "hard",
                    "physics": {
                        ropes: [
                            { anchorX: 0.32, anchorY: 0.06, lenRel: 0.28 },
                            { anchorX: 0.44, anchorY: 0.04, lenRel: 0.50 },
                            { anchorX: 0.56, anchorY: 0.04, lenRel: 0.50 },
                            { anchorX: 0.68, anchorY: 0.06, lenRel: 0.55 }
                        ],
                        stars: [
                            { x: 0.38, y: 0.42 },
                            { x: 0.50, y: 0.55 },
                            { x: 0.50, y: 0.70 }
                        ],
                        frog: { x: 0.50, y: 0.88, r: 50 }
                    }
                }
            ]
        },
        {
            id: 1,
            name: "Box 2",
            levels: [
                {
                    id: 6, name: "Level 6", difficulty: "easy",
                    "physics": {
                        ropes: [
                            { anchorX: 0.35, anchorY: 0.05, lenRel: 0.28 },
                            { anchorX: 0.65, anchorY: 0.04, lenRel: 0.50 }
                        ],
                        stars: [
                            { x: 0.38, y: 0.42 },
                            { x: 0.50, y: 0.58 },
                            { x: 0.50, y: 0.72 }
                        ],
                        frog: { x: 0.5, y: 0.93, r: 50 }
                    }
                },
                {
                    id: 7, name: "Level 7", difficulty: "medium",
                    "physics": {
                        ropes: [
                            { anchorX: 0.35, anchorY: 0.06, lenRel: 0.28 },
                            { anchorX: 0.50, anchorY: 0.04, lenRel: 0.48 },
                            { anchorX: 0.65, anchorY: 0.06, lenRel: 0.55 }
                        ],
                        stars: [
                            { x: 0.38, y: 0.42 },
                            { x: 0.50, y: 0.55 },
                            { x: 0.50, y: 0.70 }
                        ],
                        frog: { x: 0.50, y: 0.88, r: 50 }
                    }
                },

            ]
        },
        {
            id: 2,
            name: "Box 3",
            levels: [
                { id: 8, name: "Level 8", difficulty: "medium" },
                { id: 9, name: "Level 9", difficulty: "hard" }
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
        id: 3, status: "unlocked", stars: 0
    },
    {
        id: 4, status: "unlocked", stars: 0
    },
    {
        id: 5, status: "unlocked", stars: 0
    },
    {
        id: 6, status: "locked", stars: 0
    },
    {
        id: 7, status: "locked", stars: 0
    },
    {
        id: 8, status: "locked", stars: 0
    },
    {
        id: 9, status: "locked", stars: 0
    }

]

export { LEVELS_INFO, LEVELS_STATUS };
