// Function to find matches based on a given regex character class pattern
function findCharacterClassMatches(pattern, inputString) {
    const regex = new RegExp(pattern, 'g'); // 'g' flag to find all matches
    const matches = inputString.match(regex);
    return matches ? matches : [];
  }
  
  // Test string
  const testString = "Hello123!@#World";
  
  // Test cases
  console.log("Digits:", findCharacterClassMatches("[0-9]", testString));         // Digits
  console.log("Uppercase Letters:", findCharacterClassMatches("[A-Z]", testString)); // Uppercase letters
  console.log("Lowercase Letters:", findCharacterClassMatches("[a-z]", testString)); // Lowercase letters
  console.log("Special Characters:", findCharacterClassMatches("[^a-zA-Z0-9]", testString)); // Special characters
  