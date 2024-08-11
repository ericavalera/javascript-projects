const input = require('readline-sync');

function getValidInput(prompt, isValid) {
    
    let userInput = input.question(prompt);

    while (!isValid(userInput)) {
      console.log("Invalid input. Try again.");
      userInput = input.question(prompt);
    }

    return userInput;
}

// TODO 1: write a validator 
// that ensures input starts with "a"
/* let startsWith= function(letter){
  if(letter[0]==="a"){
    return true;
  } return false;
};
console.log(getValidInput("Enter your favorite letter: ", startsWith)) */
// TODO 2: write a validator 
// that ensures input is a vowel
let startsWith2= function(vowel){
  if(vowel[0]==="e"|| vowel[0]==="o"||vowel[0]==="i"||vowel[0]==="a"|| vowel[0]==="u"){
    return true;
  }return false;
}
console.log(getValidInput("Enter an object: ", startsWith2));
// Be sure to test your code!

