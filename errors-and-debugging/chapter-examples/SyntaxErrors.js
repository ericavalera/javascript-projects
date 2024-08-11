let day = "Wednesday";
console.log(day);

//runtime error example 
   let firstName = "Erica";
   console.log(firstName);

//logic error example
   let weeklyPay = 600;

   let dailyEarnings = weeklyPay / 5;
   console.log(dailyEarnings);






const input = require('readline-sync');

let degreesC = input.question('Temp in degrees C: ');
degreesC = Number(degreesC);
let degreesK = degreesC + 273.15;

console.log('Degrees K:', degreesK);