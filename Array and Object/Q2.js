const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// Sort the array
ages.sort((a, b) => a - b);

// Find the min and max age
const minAge = ages[0];
const maxAge = ages[ages.length - 1];

// Find the median age
let median;
const mid = Math.floor(ages.length / 2);
if (ages.length % 2 === 0) {
  median = (ages[mid - 1] + ages[mid]) / 2;
} else {
  median = ages[mid];
}

// Find the average age
const sum = ages.reduce((acc, curr) => acc + curr, 0);
const average = sum / ages.length;

// Find the range of the ages
const range = maxAge - minAge;

// Compare the value of (min - average) and (max - average), use abs() method
const minDiff = Math.abs(minAge - average);
const maxDiff = Math.abs(maxAge - average);

// Output the results
console.log("Sorted ages:", ages);
console.log("Min age:", minAge);
console.log("Max age:", maxAge);
console.log("Median age:", median);
console.log("Average age:", average);
console.log("Range of ages:", range);
console.log("|Min - Average|:", minDiff);
console.log("|Max - Average|:", maxDiff);
