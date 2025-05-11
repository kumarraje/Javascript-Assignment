function outerFunction(outerParam) {
    // Variable declared inside outerFunction
    const outerVariable = "I'm inside outerFunction";
  
    // Inner function that has access to both outerParam and outerVariable
    function innerFunction() {
      console.log(`Outer parameter: ${outerParam}`);
      console.log(`Outer variable: ${outerVariable}`);
    }
  
    // Return the inner function
    return innerFunction;
  }
  
  // Create a closure by calling outerFunction and storing the returned function
  const closure = outerFunction("Hello!");
  
  // Even though outerFunction has finished executing, innerFunction retains access to its variables
  closure();
  