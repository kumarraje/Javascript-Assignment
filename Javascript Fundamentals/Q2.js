// Function that tests if a string matches a given regex pattern
function testRegex(pattern, str) {
    const regex = new RegExp(pattern); // Create RegExp object from pattern
    return regex.test(str);            // Returns true if matched, else false
  }
  
  // Test cases
  console.log(testRegex("hello", "hello world"));        // true
  console.log(testRegex("^hello", "hello world"));       // true (starts with "hello")
  console.log(testRegex("world$", "hello world"));       // true (ends with "world")
  console.log(testRegex("\\d+", "My age is 30"));        // true (contains one or more digits)
  console.log(testRegex("abc", "123456"));               // false (no match)
  