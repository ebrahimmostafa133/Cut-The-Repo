const LEVELS_INFO = {

    boxes: [
        {
            id: 0,
            name: "Box 1",
            levels: [
                { id: 1, name: "Level 1", difficulty: "easy" },
                { id: 2, name: "Level 2", difficulty: "medium" },
                { id: 3, name: "Level 3", difficulty: "hard" }
            ]
        },
        {
            id: 1,
            name: "Box 2",
            levels: [
                { id: 4, name: "Level 4", difficulty: "easy" },
                { id: 5, name: "Level 5", difficulty: "medium" },
                { id: 6, name: "Level 6", difficulty: "hard" }
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
        id: 2, status: "locked", stars: 0
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

export {LEVELS_INFO, LEVELS_STATUS};
