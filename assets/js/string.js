function firstNonRepeatingCharacter(str) {
    // Create a hash map to store character frequencies
    const charCount = new Map();
    
    // Iterate through the string to count character frequencies
    for (let char of str) {
        charCount.set(char, (charCount.get(char) || 0) + 1);
    }
    
    // Iterate through the string again to find the first non-repeating character
    for (let char of str) {
        if (charCount.get(char) === 1) {
            return char;
        }
    }
    
    // If no non-repeating character found, return null
    return null;
}

// Example usage:
const inputString = "aabbcdeeffgh";
const firstNonRepeating = firstNonRepeatingCharacter(inputString);
console.log("First non-repeating character:", firstNonRepeating);