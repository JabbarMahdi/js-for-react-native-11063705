// Import the processArray and formatArrayStrings functions from arrayManipulation.js
const { processArray, formatArrayStrings } = require('./arrayManipulation');

// Define the createUserProfiles function
let nextId = 1;

function createUserProfiles(names, modifiedNames) {
    let profiles = [];
    for (let i = 0; i < names.length; i++) {
        let originalName = names[i];
        let modifiedName = modifiedNames[i];
        let profile = {
            originalName: originalName,
            modifiedName: modifiedName,
            id: nextId++
        };
        profiles.push(profile);
    }
    return profiles;
}

// Example usage:
let inputNames = ['Alice', 'Bob', 'Charlie'];
let inputModifiedNames = ['ALICE - 6', 'bob - 4', 'charlie - 9'];

// Process the numbers array using processArray
let processedNumbers = processArray([1, 2, 3, 4, 5]);

// Format the strings array based on processed numbers using formatArrayStrings
let formattedNames = formatArrayStrings(inputNames, processedNumbers);

// Create user profiles using original names and formatted names
let userProfiles = createUserProfiles(inputNames, formattedNames);

console.log(userProfiles);
