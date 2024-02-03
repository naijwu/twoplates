import { inputSchema, macrosSchema } from "./types";

export const MACROS: macrosSchema = Object.freeze({
    '2023-07-24': `~195g / ~1000 kcal`,
    '2023-07-25': `~210g / ~1500 kcal`,
    '2023-07-26': `~195g / ~1000 kcal`,
    '2023-07-27': `~215g / ~1800 kcal`,
    '2023-07-28': `~120g / ~600 kcal`,
    '2023-07-29': `~195g / ~1000 kcal`,
    '2023-07-30': `~195g / ~1000 kcal`,
    '2023-07-31': `~195g / ~1000 kcal`,
    '2023-08-01': `~195g / ~1000 kcal`,
    '2023-08-02': `~195g / ~1000 kcal`,
    '2023-08-03': `~195g / ~1000 kcal`,
    '2023-08-04': `~120g / ~600 kcal`,
    '2023-08-05': `~195g / ~1000 kcal`,
    '2023-08-06': `~150g / ~1500 kcal`,
    '2023-08-07': `~180g / ~1800 kcal`,
    '2023-08-08': `~195g / ~1000 kcal`,
    '2023-08-09': `~180g / ~2000 kcal`,
    '2023-08-10': `~195g / ~1800 kcal`,
    '2023-08-11': `~195g / ~1800 kcal`,
    '2023-08-12': `~120g / ~1800 kcal`,
    '2023-08-13': `~100g / ~1800 kcal`,
    '2023-08-14': `~195g / ~1500 kcal`,
    '2023-08-15': `~180g / ~2000 kcal`,
})

export const DATA: inputSchema = Object.freeze({
    'Leg raises': {
        '2023-08-08': {
            note: '',
            sets: [
                [15, 'BW'],
                [10, 'BW'],
                [17, 'BW']
            ]
        }
    },
    'Single arm cable bicep curls': {
        '2023-08-14': {
            note: '3m rests',
            sets: [
                [10, '40 (x2)'],
                [10, '50 (x2)'],
                [11, '60 (x2)'],
                [12, '60 (x2)'],
                [15, '50 (x2)'],
            ]
        },
        '2023-08-08': {
            note: '3m rests',
            sets: [
                [10, '40 (x2)'],
                [11, '50 (x2)'],
                [11, '60 (x2)'],
                [15, '50 (x2)'],
            ]
        },
        '2023-08-05': {
            note: '3m rests',
            sets: [
                [10, '40 (x2)'],
                [10, '50 (x2)'],
                [10, '60 (x2)'],
                [11, '50 (x2)'],
                [12, '50 (x2)']
            ]
        },
        '2023-08-02': {
            note: '3m rests',
            sets: [
                [8, '40 (x2)'],
                [10, '50 (x2)'],
                [10, '60 (x2)'],
                [8, '50 (x2)']
            ]
        }
    },
    'Cable rows': {
        '2023-08-11': {
            note: '3m rests',
            sets: [
                [10, 175],
                [10, 175]
            ]
        },
        '2023-08-02': {
            note: '3m rests',
            sets: [
                [10, 130],
                [12, 145],
                [11, 160]
            ]
        }
    },
    'Rear delt fly machine': {
        '2023-08-02': {
            note: '1m rests; TL',
            sets: [
                [10, 100],
                [10, 100],
                [8, 120]
            ]
        }
    },
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
        '2023-10-17': {
            note: '',
            sets: [
                [12, 30],
                [10, 35],
                [10, 35],
                [10, 35]
            ]
        },
        '2023-10-03': {
            note: '',
            sets: [
                [15, 35],
                [15, 35],
                [15, 35],
                [15, 35]
            ]
        },
        '2023-09-28': {
            note: '',
            sets: [
                [15, 35],
                [10, 40],
                [10, 40],
                [10, 40]
            ]
        },
        '2023-09-25': {
            note: '',
            sets: [
                [15, 35],
                [10, 40],
                [10, 40]
            ]
        },
        '2023-09-16': {
            note: '',
            sets: [
                [12, 35],
                [15, 35],
                [8, 40],
                [8, 40]
            ]
        },
        '2023-09-13': {
            note: '',
            sets: [
                [12, 35],
                [12, 35],
                [12, 35],
                [12, 35]
            ]
        },
        '2023-09-08': {
            note: '',
            sets: [
                [12, 35],
                [12, 35],
                [13, 35],
                [12, '35 (superset)'],
                [5, '20 (supserset)']
            ]
        },
        '2023-08-30': {
            note: '',
            sets: [
                [12, 35],
                [12, 35],
                [12, 35]
            ]
        },
        '2023-08-23': {
            note: '',
            sets: [
                [15, 35],
                [15, 35]
            ]
        },
        '2023-08-18': {
            note: '',
            sets: [
                [12, 35],
                [12, 35],
                [12, 35]
            ]
        },
        '2023-08-14': {
            note: '3m rests',
            sets: [
                [12, 35],
                [12, 35],
                [13, 35],
                [14, 35]
            ]
        },
        '2023-08-11': {
            note: '3m rests',
            sets: [
                [10, 35],
                [12, 35],
                [11, 35]
            ]
        },
        '2023-08-07': {
            note: '3m rests',
            sets: [
                [12, 35],
                [12, 40],
                [15, 35],
                [12, 35]
            ]
        },
        '2023-08-03': {
            note: '3m rests',
            sets: [
                [12, 35],
                [12, 35],
                [12, 35],
                [12, 35]
            ]
        },
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
                [9, '35 (superset)'],
                [3, '25 (superset)']
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
        '2023-10-17': {
            note: '',
            sets: [
                [20, 155],
                [20, 165],
                [20, 165]
            ]
        },
        '2023-10-05': {
            note: '',
            sets: [
                [15, 155],
                [20, 165],
                [14, 165],
                [12, 155]
            ]
        },
        '2023-10-03': {
            note: '',
            sets: [
                [20, 165],
                [20, 165],
                [20, 165],
                [25, 165]
            ]
        },
        '2023-09-28': {
            note: '',
            sets: [
                [20, 165],
                [20, 165],
                [20, 165],
                [25, 165]
            ]
        },
        '2023-09-25': {
            note: '',
            sets: [
                [20, 150],
                [20, 165],
                [20, 165],
                [20, 165]
            ]
        },
        '2023-09-16': {
            note: '',
            sets: [
                [16, 165],
                [20, 150],
                [20, 150],
                [21, 150]
            ]
        },
        '2023-09-13': {
            note: '',
            sets: [
                [15, 150],
                [15, 150],
                [15, 165],
                [16, 165]
            ]
        },
        '2023-09-08': {
            note: '',
            sets: [
                [15, 150],
                [15, 150],
                [15, 150],
                [20, 150]
            ]
        },
        '2023-09-05': {
            note: '',
            sets: [
                [16, 150],
                [16, 150]
            ]
        },
        '2023-08-30': {
            note: '',
            sets: [
                [15, 150],
                [15, 150],
                [15, 150],
                [15, 165]
            ]
        },
        '2023-08-23': {
            note: '',
            sets: [
                [15, 150]
            ]
        },
        '2023-08-18': {
            note: '',
            sets: [
                [12, 165],
                [12, 165]
            ]
        },
        '2023-08-14': {
            note: '2m rests',
            sets: [
                [15, 165],
                [15, 165]
            ]
        },
        '2023-08-10': {
            note: '2m rests',
            sets: [
                [12, 165],
                [14, 165],
                [13, 165],
            ]
        },
        '2023-08-07': {
            note: '3m rests',
            sets: [
                [15, 135],
                [15, 150],
                [15, 150],
                [20, 150]
            ]
        },
        '2023-08-03': {
            note: '3m rests',
            sets: [
                [15, 135],
                [15, 135],
                [16, 135],
                [17, 135]
            ]
        },
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
        '2024-02-01': {
            note: '',
            sets: [
                [8, 155],
                [5, 185],
                [1, 225],
                [1, 235],
            ]
        },
        '2023-10-21': {
            note: '',
            sets: [
                [10, 135],
                [6, 155],
                [4, 185],
                [1, 225],
                [1, 225],
                [1, 225]
            ]
        },
        '2023-10-17': {
            note: '',
            sets: [
                [9, 135],
                [6, 155],
                [4, '185, paused'],
                [2, 205],
                [1, 225],
                [6, 185],
                [10, '155, paused']
            ]
        },
        '2023-10-05': {
            note: '',
            sets: [
                [9, 135],
                [6, 155],
                [1, 205],
                [1, 225],
                [2, 205],
                [6, 185],
                [9.5, 155]
            ]
        },
        '2023-10-03': {
            note: '',
            sets: [
                [10, 135],
                [6, 155],
                [3, 185],
                [1, 215],
                [1, 225],
                [1, '230 (rough)'],
                [9, '155, paused']
            ]
        },
        '2023-09-30': {
            note: '',
            sets: [
                [10, 135],
                [4, 155]
            ]
        },
        '2023-09-25': {
            note: '',
            sets: [
                [11, 135],
                [9, 155],
                [6, 185],
                [3, 205],
                [1, 215],
                [1, 225],
                [6, 185],
                [10, 155]
            ]
        },
        '2023-09-16': {
            note: '',
            sets: [
                [11, 135],
                [8, '150 (whoops)'],
                [5, 185],
                [3, 205],
                [6, 185],
                [10, 135]
            ]
        },
        '2023-09-13': {
            note: '',
            sets: [
                [12, '135, paused'],
                [8, 155],
                [4, 185],
                [2, 205],
                [4, 185],
                [10, 155]
            ]
        },
        '2023-09-08': {
            note: '',
            sets: [
                [11, '135, paused'],
                [8, '155, paused'],
                [6, 185],
                [3, 205],
                [0, 225]
            ]
        },
        '2023-09-05': {
            note: '',
            sets: [
                [10, '135, paused'],
                [5, 185],
                [2, 205]
            ]
        },
        '2023-08-30': {
            note: '',
            sets: [
                [10, 135],
                [3, 205],
                [1, 225],
                [2, 205],
                [10, '155, paused']
            ]
        },
        '2023-08-21': {
            note: '',
            sets: [
                [10, 135],
                [6, 185],
                [3, 205],
                [1, 225],
                [0, 235]
            ]
        },
        '2023-08-18': {
            note: '',
            sets: [
                [7, 155],
                [32, 185],
                [1, 205],
                [0, 235],
                [1, 225],
                [1, 225],
                [2, 205],
                [6, 185],
                [10, '155, paused']
            ]
        },
        '2023-08-15': {
            note: '3~4m rests',
            sets: [
                [6, 155],
                [3, 185],
                [1, 205],
                [0, 235],
                [1, 230],
                [5, 185],
                [12, 155],
            ]
        },
        '2023-08-13': {
            note: '3~4m rests, felt nauseous so called it a day',
            sets: [
                [6, 155],
                [3, 185],
                [1, 205],
                [1, 225],
                [1, 225]
            ]
        },
        '2023-08-11': {
            note: '3m rests',
            sets: [
                [9, '155, paused'],
                [3, '185, paused'],
                [2, 205],
                [1, '205, paused'],
                [3, '185, paused'],
                [9, '155, paused']
            ]
        },
        '2023-08-10': {
            note: '3~4m rests',
            sets: [
                [6, '135, paused'],
                [6, 155],
                [2, 185],
                [1, 205],
                [1, 220],
                [1, 225],
                [1, 225],
                [3, '185, paused'],
                [9, '155, paused'],
            ]
        },
        '2023-08-07': {
            note: '3~4m rests',
            sets: [
                [5, 135],
                [6, 155],
                [3, 185],
                [1, 205],
                [1, 215],
                [0, 220],
                [1, 205],
                [5, 185],
                [3, '185, paused'],
            ]
        },
        '2023-08-03': {
            note: '3~4m rests',
            sets: [
                [5, 135],
                [6, 155],
                [3, 185],
                [1, 205],
                [1, 210],
                [2, 195],
                [8, '155, paused'],
                [5, '165, paused']
            ]
        },
        '2023-07-31': {
            note: '3m rests; UBC ARC',
            sets: [
                [6, '135, paused'],
                [6, '155, paused'],
                [3, '185, paused'],
                [6, '155, paused']
            ]
        },
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
                [3, '170, paused (superset)'],
                [5, '135, paused (superset)'],
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
        '2023-08-11': {
            note: '2m rests',
            sets: [
                [1, 155],
                [2, 175]
            ]
        },
        '2023-08-04': {
            note: 'no words',
            sets: [
                [7, 135],
                [0, 205]
            ]
        },
        '2023-07-26': {
            note: '3m rests',
            sets: [
                [7, 135],
                [8, 135],
                [9, 135]
            ]
        }
    },
    'Lat pulldowns': {
        '2023-08-05': {
            note: '3m rests',
            sets: [
                [9, 115],
                [8, 130],
                [6, 160],
                [4, 175],
                [6, 160],
                [6, 145]
            ]
        },
        '2023-08-02': {
            note: '3m rests; TL',
            sets: [
                [10, 110],
                [8, 120],
                [6, 140],
                [6, 130]
            ]
        },
        '2023-07-29': {
            note: '3m rests',
            sets: [
                [9, 115],
                [8, 130],
                [5, 145],
                [3, '160 (superset)'],
                [3, '130 (superset)'],
                [3, '100 (superset)']
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
    },
    'Barbell rows': {
        '2023-08-08': {
            note: '3m rests',
            sets: [
                [12, 155],
                [10, 170],
                [6, 185],
                [3, 205],
                [8, 170],
                [12, 155],
            ]
        },
        '2023-08-05': {
            note: '3m rests',
            sets: [
                [10, 135],
                [11, 155],
                [10, 165],
                [6, 185],
                [10, '165 (superset)'],
                [10, '135 (superset)']
            ]
        },
        '2023-08-02': {
            note: '3m rests; TL',
            sets: [
                [10, 135],
                [10, 155],
                [6, 185],
                [10, 165],
                [10, '165 (superset)'],
                [10, '135 (superset)']
            ]
        },
        '2023-07-29': {
            note: '3m rests',
            sets: [
                [10, 135],
                [8, 155],
                [6, 185],
                [10, 155],
                [10, '165 (superset)'],
                [11, '135 (superset)']
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
                [12, 135]
            ]
        }
    },
    'Pull ups': {
        '2023-08-11': {
            note: '2m rests',
            sets: [
                [6, 'BW, neutral'],
                [6, 'BW, neutral wide'],
                [4, 'BW, regular']
            ]
        },
        '2023-08-08': {
            note: '2~3m rests',
            sets: [
                [6, 'BW, neutral'],
                [8, 'BW, neutral'],
                [7, 'BW, neutral'],
                [6, 'BW, neutral wide']
            ]
        },
        '2023-07-29': {
            note: '2m rests',
            sets: [
                [8, 'BW, close'],
                [8, 'BW, close'],
                [6, 'BW, neutral wide']
            ]
        }
    }
})