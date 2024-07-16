const whoWon= require('../RPS.js');

describe("whoWon function", function(){
test ("should return 'TIE!' if player 1 & player 2 are equal", function(){
let output= whoWon("rock","rock")
expect(output).toEqual("TIE!") 
    });

test ("should return 'Player 2 wins!' if player 1 picks 'paper' and player 2 picks 'scissors'", function(){
let output= whoWon("paper","scissors")
expect(output).toEqual("Player 2 wins!") 
     });

test ("should return 'Player 2 wins!' if player 1 picks 'scissors' and player 2 picks 'rock'", function(){
let output= whoWon("scissors","rock")
expect(output).toEqual("Player 2 wins!") 
    });
test ("should return 'Player 2 wins!' if player 1 picks 'boulder' and player 2 picks 'rock'", function(){
let output= whoWon("boulder","rock")
expect(output).toEqual("Player 1 wins!") 
    });

});