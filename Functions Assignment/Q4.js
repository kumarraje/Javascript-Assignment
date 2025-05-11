function calculateTax() {
    return function (income) {
      let taxRate;
  
      if (income <= 5000) {
        taxRate = 0.05; // 5%
      } else if (income <= 20000) {
        taxRate = 0.1; // 10%
      } else if (income <= 50000) {
        taxRate = 0.2; // 20%
      } else {
        taxRate = 0.3; // 30%
      }
  
      return income * taxRate;
    };
  }
  
  // Create a tax calculator using the closure
  const taxCalculator = calculateTax();
  
  // Test the function with various incomes
  console.log(`Tax on 4000: $${taxCalculator(4000)}`);
  console.log(`Tax on 15000: $${taxCalculator(15000)}`);
  console.log(`Tax on 30000: $${taxCalculator(30000)}`);
  console.log(`Tax on 60000: $${taxCalculator(60000)}`);
  