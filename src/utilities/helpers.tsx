import { inputSchema, parsedSchema } from "./types";

const MONTHS = [
    '',
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
]

export function dateToString(s: string) {
    return `${MONTHS[parseInt(s.substring(5, 7))]} ${s.substring(s.length - 2)}, ${s.substring(0, 4)}`
}

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

// takes non-number weight in data and tries to parse it
function deduceNumber(weight: string) {
    if (weight.toLowerCase().includes('bw')) {
        return 177; // my bodyweight
    } else if (weight.includes(',') || weight.includes(' ')) {
        const exploded = weight.includes(',') ? weight.split(',') : weight.split(' ');
        for (let i = 0; i < exploded.length; i++) {
            const possibleWeight = parseInt(exploded[i]);
            if (!isNaN(possibleWeight)) {
                return possibleWeight
            }
        }
        return -1
    }
    return -1
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
    
    const exerciseKeys = Object.keys(value);

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

        for (let i = 0; i < exerciseKeys.length; i++) {
            const exercisedDates = Object.keys(value[exerciseKeys[i]]);
            exercisedDates.sort((a, b) => (new Date(b) as any) - (new Date(a) as any));
            
            for (let j = 0; j < exercisedDates.length; j++) {
                const thisDate = exercisedDates[j]
                let highestWeight = -1;

                const sets = value[exerciseKeys[i]][exercisedDates[j]].sets
                for (let k = 0; k < sets.length; k++) {
                    const weightToCompare = typeof sets[k][1] == 'number' 
                        ? sets[k][1] 
                        : deduceNumber(sets[k][1])
                    if (weightToCompare > highestWeight) {
                        highestWeight = weightToCompare
                    }
                }

                if (highestWeight > PRDates[exerciseKeys[i]].weight) {
                    PRDates[exerciseKeys[i]] = {
                        date: thisDate,
                        exercise: value[exerciseKeys[i]][exercisedDates[j]],
                        weight: highestWeight
                    }
                }
            }
        }
        
        const parsedPRDates: any = Object.fromEntries(Object.keys(value).map(k => [k, {}]));
        Object.keys(PRDates).map((key) => parsedPRDates[key][PRDates[key].date] = PRDates[key].exercise)

        return parseData(parsedPRDates)
    }
    
    return parseData(value);
}