import { inputSchema } from "./types";

export const DATA: inputSchema = Object.freeze({
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
})