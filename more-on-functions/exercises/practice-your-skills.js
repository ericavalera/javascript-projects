//Create an anonymous function and set it equal to a variable.

let par= 41;
let par2= "lol"

let myAnon = function(par){
if(typeof par=="number"){
    return par * 3;
    } else {
    return "ARRR";
    }
};
console.log(myAnon(par2));
console.log(myAnon(par));



/* Your function should:
a) If passed a number, return the tripled value.
b) If passed a string, return the string “ARRR!”
c) Be sure to test your function before moving on the next part. 
*/

/* Add to your code! Use your fuction and the map method to change an array  as follows:
a) Triple any the numbers.
b) Replace any strings with “ARRR!”
c) Print the new array to confirm your work.
*/
let arr = ['Elocution', 21, 'Clean teeth', 100];
console.log(arr.map(myAnon));