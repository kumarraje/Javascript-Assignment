// Curry function that accepts a function as an argument
function curry(fn) {
    // Returns a new function
    return function curried(...args) {
      // If the number of arguments matches the number of parameters in the original function, call the function
      if (args.length >= fn.length) {
        return fn(...args);
      }
      // Otherwise, return a new function that collects arguments
      return function(...next) {
        return curried(...args, ...next);
      };
    };
  }
  
  // Function that adds two numbers
  function add(a, b) {
    return a + b;
  }
  
  // Create a curried version of the add function
  const curriedAdd = curry(add);
  
  // Test the curried function
  console.log(curriedAdd(5)(3)); // Output: 8
  