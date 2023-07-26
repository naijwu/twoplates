type sets = (number | string)[][]; // 0 = reps, 1 = weight

// reason for different input/output: less effort when tracking by exercise
export type inputSchema = {
    [key: string]: {
        [key: string]: {
            note?: string;
            sets: sets;
        }
    }
}

export type parsedSchema = {
    date: string;
    exercises: {
        exercise: string;
        note?: string;
        sets: sets;
    }[];
}[];

// Date: YYYY-MM-DD
export const INPUT_EXAMPLE: inputSchema = {
    'Bench press': {
        '2023-07-26': {
            note: '3m rests',
            sets: [
                [5, 135],
                [5, 135],
                [5, 135],
                [5, 135],
                [5, 135]
            ]
        }
    },
    'Squat': {
        '2023-07-25': {
            note: '3m rests',
            sets: [
                [5, 135],
                [5, 135],
                [5, 135],
                [5, 135],
                [5, 135]
            ]
        },
        '2023-07-23': {
            note: '3m rests',
            sets: [
                [5, 135],
                [5, 135],
                [5, 135],
                [5, 135],
                [5, 135]
            ]
        }
    },
    'Deadlift': {
        '2023-07-23': {
            note: '3m rests',
            sets: [
                [5, 135],
                [5, 135],
                [5, 135],
            ]
        }
    }
}

export const PARSED_EXAMPLE: parsedSchema = [
    {
        date: '2023-07-26',
        exercises: [
            {
                exercise: 'Bench press',
                note: '3m rests',
                sets: [
                    [5, 135],
                    [5, 135],
                    [5, 135],
                    [5, 135],
                    [5, 135]
                ]
            }
        ]

    },
    {
        date: '2023-07-25',
        exercises: [
            {
                exercise: 'Squat',
                note: '3m rests',
                sets: [
                    [5, 135],
                    [5, 135],
                    [5, 135],
                    [5, 135],
                    [5, 135]
                ]
            }
        ]
    },
    {
        date: '2023-07-23',
        exercises: [
            {
                exercise: 'Squat',
                note: '3m rests',
                sets: [
                    [5, 135],
                    [5, 135],
                    [5, 135],
                    [5, 135],
                    [5, 135]
                ]
            },
            {
                exercise: 'Deadlift',
                note: '3m rests',
                sets: [
                    [5, 135],
                    [5, 135],
                    [5, 135]
                ]
            }
        ]
    }
]