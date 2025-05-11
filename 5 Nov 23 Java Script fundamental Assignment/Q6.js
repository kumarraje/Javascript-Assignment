//Poorly Named Variables:
let d = new Date();
let m = d.getMonth();
let y = d.getFullYear();
let formattedDate = m + 1 + '/' + y;
console.log(formattedDate);

//Clearly Named Variables:

let currentDate = new Date();
let currentMonth = currentDate.getMonth();
let currentYear = currentDate.getFullYear();
let formattedDateString = `${currentMonth + 1}/${currentYear}`;
console.log(formattedDateString);
