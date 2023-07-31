import { inputSchema } from "./types";

export const DATA: inputSchema = Object.freeze({
    'Dumbbell weighted lunges': {
        '2023-07-31': {
            note: '1m rests',
            sets: [
                [7, 50],
                [6, 50],
                [6, 50]
            ]
        }
    },
    'Calf raises': {
        '2023-07-31': {
            note: '2m rests, using leg press machine',
            sets: [
                [10, 180],
                [10, 210],
                [12, 210]
            ]
        }
    },
    'Dumbbell side raises': {
        '2023-07-30': {
            note: 'single superset, just wanted the pump lol',
            sets: [
                [8, 40],
                [6, 35],
                [9, 30],
                [10, 25]
            ]
        },
        '2023-07-29': {
            note: '2m rests',
            sets: [
                [7, 35],
                [8, 35],
                [9, '35 (supserset)'],
                [3, '25 (supserset)']
            ]
        }
    },
    'Pull ups': {
        '2023-07-29': {
            note: '2m rests',
            sets: [
                [8, 'BW, close grip'],
                [8, 'BW, close grip'],
                [6, 'BW, neutral wide grip']
            ]
        }
    },
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
        '2023-07-30': {
            note: '2m rests',
            sets: [
                [12, 135],
                [15, 135],
                [15, 135],
                [14, 135]
            ]
        },
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
        '2023-07-30': {
            note: '3~4m rests',
            sets: [
                [6, 135],
                [5, 155],
                [3, 185],
                [2, 195],
                [1, 205],
                [0, 215],
                [1, 185],
                [7, '155, paused'],
                [6, '155, paused'],
                [3, '170, paused (supserset)'],
                [5, '135, paused (supserset)'],
            ]
        },
        '2023-07-27': {
            note: '3m rests',
            sets: [
                [5, '135, paused'],
                [6, 155],
                [3, 185],
                [0, 205],
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
        '2023-07-29': {
            note: '3m rests',
            sets: [
                [10, 135],
                [8, 155],
                [6, 185],
                [10, 155],
                [10, '165 (supserset)'],
                [11, '135 (supserset)'],
            ]
        },
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
        '2023-07-29': {
            note: '3m rests',
            sets: [
                [9, 115],
                [8, 130],
                [5, 145],
                [3, '160 (supserset)'],
                [3, '130 (supserset)'],
                [3, '100 (supserset)']
            ]
        },
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