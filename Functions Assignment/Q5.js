function factorial(n) {
    // Base case: if n is 0 or 1, return 1
    if (n === 0 || n === 1) {
      return 1;
    }
    // Recursive case: n * factorial of (n - 1)
    return n * factorial(n - 1);
  }
  
  // Test the function with different inputs
  console.log(`Factorial of 0: ${factorial(0)}`); // Output: 1
  console.log(`Factorial of 1: ${factorial(1)}`); // Output: 1
  console.log(`Factorial of 5: ${factorial(5)}`); // Output: 120
  console.log(`Factorial of 7: ${factorial(7)}`); // Output: 5040
  