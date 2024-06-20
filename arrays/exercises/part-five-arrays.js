let str = 'In space, no one can hear you code.';
let arr = ['B', 'n', 'n', 5];

//1) Use the split method on the string to identify the purpose of the parameter inside the ().
console.log(str.split());
//prints the same
console.log(str.split('e'));
//removes the letter e from each word
console.log(str.split(''));
//isolates each character in parenthesis, for example 'I' 'n' 's' 'p' 'a' 'c' 'e'
console.log(str.split(' '));
//seperates every word
//2) Use the join method on the array to identify the purpose of the parameter inside the ().
console.log(arr.join());
//prints B,n,n,5
console.log(arr.join('a'));
//prints Banana5
console.log(arr.join(' '));
//prints B n n 5
console.log(arr.join(''));
//prints Bnn5
//3) Do split or join change the original string/array?
console.log(str);
console.log(arr);
//The originals remain unchanged.
//4) We can take a comma-separated string and convert it into a modifiable array. Try it! Alphabetize the cargoHold string, and then combine the contents into a new string.
let cargoHold = "water,space suits,food,plasma sword,batteries";
console.log(cargoHold.split(',').sort().join(','));
