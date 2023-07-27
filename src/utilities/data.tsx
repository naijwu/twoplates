import { inputSchema } from "./types";

export const DATA: inputSchema = Object.freeze({
    'Tricep pulldowns': {
        '2023-07-27': {
            note: 'Elbow started feeling funny, called rest of workout off',
            sets: [
                [15, 90],
                [5, 90]
            ]
        }
    },
    'Overhead tricep extensions': {
        '2023-07-27': {
            note: '3m rests',
            sets: [
                [8, 120],
                [15, 135],
                [12, 135],
                [14, 135]
            ]
        }
    },
    'Bench': {
        '2023-07-27': {
            note: '3m rests, failed 205',
            sets: [
                [5, '135, paused'],
                [6, 155],
                [3, 185],
                [5, '155, paused'],
                [5, '155, paused'],
            ]
        },
        '2023-07-25': {
            note: '3m rests',
            sets: [
                [5, 135],
                [6, 155],
                [3, 185],
                [1, 195],
                [1, 205],
                [1, 185],
                [6, 155]
            ]
        },
        '2023-07-20': {
            note: '3m rests',
            sets: [
                [8, 135],
                [6, 155],
                [4, 170],
                [2, 185],
                [4, 155],
                [8, 135]
            ]
        }
    },
    'Squat': {
        '2023-07-26': {
            note: '3m rests',
            sets: [
                [7, 135],
                [8, 135],
                [9, 135]
            ]
        }
    },
    'Barbell rows': {
        '2023-07-26': {
            note: '3m rests',
            sets: [
                [8, 135],
                [6, 155],
                [5, 185],
                [1, 205],
                [5, 155],
                [12, 135],
            ]
        }
    },
    'Lat pulldowns': {
        '2023-07-26': {
            note: '3m rests',
            sets: [
                [8, 115],
                [8, 130],
                [5, 145],
                [5, 145],
                [8, 130],
                [8, 115],
            ]
        }
    }
})