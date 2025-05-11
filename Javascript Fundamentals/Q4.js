function extractDateParts(pattern, inputString) {
    const regex = new RegExp(pattern);
    const match = inputString.match(regex);
  
    if (match) {
      // match[0] is the full match; match[1], match[2], etc. are capturing groups
      return {
        day: match[1],
        month: match[2],
        year: match[3]
      };
    } else {
      return null;
    }
  }
  
  // Test string
  const testString = "Today's date is 11-05-2025";
  
  // Pattern with groups to capture day, month, and year
  const datePattern = /(\d{2})-(\d{2})-(\d{4})/;
  
  // Function call
  const extractedDate = extractDateParts(datePattern, testString);
  
  // Output result
  if (extractedDate) {
    console.log("Day:", extractedDate.day);
    console.log("Month:", extractedDate.month);
    console.log("Year:", extractedDate.year);
  } else {
    console.log("No valid date found.");
  }
  