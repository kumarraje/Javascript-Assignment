//for loop
for (let i = 1; i <= 5; i++) {
    console.log("Count:", i);
  }

  
  //while Loop

  let a = 1;
while (a <= 5) {
  console.log("While Loop:", a);
  i++;
}


//do...while Loop
let b = 1;
do {
  console.log("Do-While Loop:", b);
  i++;
} while (b <= 5);


//for...of Loop
const colors = ["red", "green", "blue"];
for (let color of colors) {
  console.log("Color:", color);
}


//for...in Loop
const car = { brand: "Toyota", year: 2020 };
for (let key in car) {
  console.log(key + ":", car[key]);
}
