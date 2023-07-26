import { inputSchema, parsedSchema } from "./example";

export function parseData(value: inputSchema): parsedSchema {

    const output: parsedSchema = []

    const outputObj: any = {}
    const exercises = Object.keys(value);

    for (let i = 0; i < exercises.length; i++) {
        // gets date strings (YYYY-MM-DD) of when this exercise was done
        const exercisedDates = Object.keys(value[exercises[i]]);

        for (let j = 0; j < exercisedDates.length; j++) {
            // create exercise session object
            const exerciseSession = {
                exercise: exercises[i],
                ...value[exercises[i]][exercisedDates[j]]
            }
            
            // append exercise session object to respective date's array of exercises
            const updatedDateExercises = JSON.parse(JSON.stringify(outputObj[exercisedDates[j]] || []));
            updatedDateExercises.push(exerciseSession);
            outputObj[exercisedDates[j]] = updatedDateExercises;
        }
    }

    // parse outputObj to output type (object into array)
    const allExercisedDates = Object.keys(outputObj)
    for (let i = 0; i < allExercisedDates.length; i++) {
        output.push({
            date: allExercisedDates[i],
            exercises: outputObj[allExercisedDates[i]]
        })
    }

    return output
}