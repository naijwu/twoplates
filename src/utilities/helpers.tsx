import { inputSchema, parsedSchema } from "./types";

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
            _date: new Date(allExercisedDates[i]),
            exercises: outputObj[allExercisedDates[i]]
        })
    }

    return output.sort((a, b) => b._date - a._date);
}

export function parseFilteredData(initialValue: inputSchema, filters: string[], showOnlyPR: boolean): parsedSchema {

    const value = JSON.parse(JSON.stringify(initialValue));
    const exercises = Object.keys(value);

    if (filters?.length > 0) {
        const deleteFields = []
        for (let i = 0; i < exercises.length; i++) {
            if (!filters.includes(exercises[i])) {
                deleteFields.push(exercises[i])
            }
        }
        for (let i = 0; i < deleteFields.length; i++) {
            delete value[deleteFields[i]]
        }
    }

    if (showOnlyPR) {
        // get array of dates of PRs
        const PRDates: {
            [key: string]: {
                date: string,
                exercise: string,
                weight: number
            }
        } = Object.fromEntries(Object.keys(value).map(k => [k, {
            date: '',
            exercise: k,
            weight: -1,
        }]));

        for (let i = 0; i < exercises.length; i++) {
            const exercisedDates = Object.keys(value[exercises[i]]);
            for (let j = 0; j < exercisedDates.length; j++) {
                const thisDate = exercisedDates[j]
                let highestWeight = -1;

                const sets = value[exercises[i]][exercisedDates[j]].sets
                for (let k = 0; k < sets.length; k++) {
                    if (sets[k][1] > highestWeight) {
                        highestWeight = sets[k][1]
                    }
                }

                if (highestWeight > PRDates[exercises[i]].weight) {
                    PRDates[exercises[i]] = {
                        date: thisDate,
                        exercise: exercises[i],
                        weight: highestWeight
                    }
                }
            }
        }

        const onlyIncludedDates: {
            date: string,
            exercise: string
        }[] = []
        Object.keys(PRDates).map((key) => onlyIncludedDates.push({
            date: PRDates[key].date,
            exercise: PRDates[key].exercise
        }))

        // TODO: filter
    }

    return parseData(value);
}