const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
let strtrim = str.slice(3,10) + str.slice(0,3);
//Use a template literal to print the original and modified string in a descriptive phrase.
console.log (`The pig-latin version of ${str} is ${strtrim}.`);
//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
let strtrim2= input.question("Enter the number for the string change: ");
let strtrim3= str.slice(strtrim2,10)+ str.slice(0, strtrim2);

//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
if(strtrim2 > 7){
    console.log(`Error ${strtrim2} exceeds the change amount.`);
} else {
    console.log(`Brand spanking new pig-latin word - ${strtrim3}!`);
}