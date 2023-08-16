//1. Округление цифр в рандоме

//const max = 80;
//const min = 10;

//console.log(Math.random() * (max - min) + min);

//console.log(Math.round(Math.random() * (max - min) + min));

// 2. Вибір рандомом кольору

//const colors = ["tomato", "teal", "orange", "deeppink", "skyblue"];
//const max = colors.length - 1;
//const min = 0;
//const index = Math.round(Math.random() * (max - min) + min);
//const color = colors[index];
//console.log(color);
//document.body.style.backgroundColor = color;

//3.
const numbers = [51, 18, 13, 24, 7, 85, 9];
let biggestNumber = number[0];

for (const number of numbers) {
  if (number > biggestNumber) {
    biggestNumber = number;
  }
}

console.log("biggestNumber: ", biggestNumber);
