// Define the processArray function
function processArray(arr) {
    let result = [];
    for (let num of arr) {
        if (num % 2 === 0) {
            result.push(num * 2); // Square even numbers
        } else {
            result.push(num * 3); // Triple odd numbers
        }
    }
    return result;
}

// Define the formatArrayStrings function
function formatArrayStrings(stringsArray, numbersArray) {
    let formattedArray = [];
    for (let i = 0; i < stringsArray.length; i++) {
        let string = stringsArray[i];
        let number = numbersArray[i];

        if (number % 2 === 0) {
            formattedArray.push(`${string.toUpperCase()} - ${number}`); // Uppercase if even
        } else {
            formattedArray.push(`${string.toLowerCase()} - ${number}`); // Lowercase if odd
        }
    }
    return formattedArray;
}

// Export the functions for use in other files
module.exports = {
    processArray,
    formatArrayStrings
};
