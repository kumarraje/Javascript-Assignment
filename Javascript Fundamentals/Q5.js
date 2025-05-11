function getDeliveryTime(packageType) {
    switch (packageType.toLowerCase()) {
      case "standard":
        console.log("Estimated delivery: 3-5 business days.");
        break;
      case "express":
        console.log("Estimated delivery: 1-2 business days.");
        break;
      case "overnight":
        console.log("Estimated delivery: Next day delivery.");
        break;
      default:
        console.log("Invalid package type. Please choose 'standard', 'express', or 'overnight'.");
    }
  }
  
  // Test the function with different inputs
  getDeliveryTime("standard");   // Output: 3-5 business days
  getDeliveryTime("express");    // Output: 1-2 business days
  getDeliveryTime("overnight");  // Output: Next day delivery
  getDeliveryTime("priority");   // Output: Invalid package type
  