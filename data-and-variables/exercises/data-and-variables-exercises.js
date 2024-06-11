//Declare and assign a variable for each item in the Data Table above.
let spaceShuttle="Determination";
let shuttleSpeed= 17500;
let distToMarsKm= 225000000;
let distToMoonKm= 384400;
let milesPerKilo= 0.621;

//For each variable you declared in part A, use the typeof operator to print its type to the console, one item per line.
console.log(typeof spaceShuttle);
console.log(typeof shuttleSpeed);
console.log(typeof distToMarsKm);
console.log(typeof distToMoonKm);
console.log(typeof milesPerKilo);

//Mars Mission
let milesToMars= distToMarsKm * milesPerKilo;
let hoursToMars= milesToMars / shuttleSpeed;
let daysToMars= hoursToMars/ 24;
console.log(spaceShuttle +" will take "+ daysToMars+ " days to reach Mars.")

//Moon Mission
let milesToMoon= distToMoonKm * milesPerKilo;
let hoursToMoon= milesToMoon/ shuttleSpeed;
let daysToMoon= hoursToMoon/ 24;
console.log(spaceShuttle+" will take "+ daysToMoon+ "days to reach the Moon.")


