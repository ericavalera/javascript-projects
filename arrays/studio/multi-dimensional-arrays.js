let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";

//1) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.
cabinet1 = food.split(",").sort();
cabinet2 = equipment.split(",").sort();
cabinet3 = pets.split(",").sort();
cabinet4 = sleepAids.split(",").sort();
//2) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.
cargoHold= [cabinet1, cabinet2, cabinet3, cabinet4];
console.log(cargoHold);
//3) Query the user to select a cabinet (0 - 3) in the cargoHold.
const input = require('readline-sync');
let cargoQuest= input.question("Enter the number of the cabinet you want to access: ")

//4) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error message.
if(cargoQuest > 4){
    console.log(`${cargoQuest} is an invalid entry, try again`);
}else {
    console.log(` ${cargoHold[cargoQuest]}`);
}
//5) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”
let cargoNum= input.question("Which cabinet number do you want to access? ");
let cabinetItem=input.question("which item this cabinet do you want to access? ");

if (cargoHold[cargoNum].includes(cabinetItem)){
    console.log(`Cabinet ${cargoNum} does contain ${cabinetItem}.`);
} else{
    console.log(`Cabinet ${cargoNum} does not include ${cabinetItem}.`)
}