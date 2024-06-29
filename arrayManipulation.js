/**
 * Processes an array of numbers by squaring even numbers and tripling odd numbers.
 * @param {number[]} numbers - Array of numbers to be processed.
 * @returns {number[]} - New array with processed numbers.
 */
function processArray(numbers) {
    return numbers.map(number => number % 2 === 0 ? number ** 2 : number * 3);
}

// Example usage (optional for testing):
console.log(processArray([7, 14, 89, 56])); 

/**
 * Formats an array of strings based on the corresponding processed numbers.
 * @param {string[]} strings - Array of strings to be formatted.
 * @param {number[]} numbers - Array of processed numbers.
 * @returns {string[]} - Array of formatted strings.
 */
function formatArrayStrings(strings, numbers) {
    return strings.map((str, index) => numbers[index] % 2 === 0 ? str.toUpperCase() : str.toLowerCase());
}

// Example usage (optional for testing):
const strings = ["Osae", "Is", "smart"];
const processedNumbers = processArray([7, 14, 89, 56]); 
console.log(formatArrayStrings(strings, processedNumbers)); // Output: ["Osae", "is", "smart"]
