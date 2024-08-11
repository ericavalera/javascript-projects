let tortoiseOne = {
   species: "Galapagos Tortoise",
   name: "Pete",
   weight: 919,
   age: 85,
   diet: ["pumpkins", "lettuce", "cabbage"]
};
console.log(tortoiseOne);
function birthday(animal){
   animal.age= animal.age +1;
   return animal;
}
for(item in tortoiseOne){
   console.log(tortoiseOne[item]);
}

birthday(tortoiseOne);
console.log(tortoiseOne.age);
// Using a for..in loop, iterate through each property in the tortoiseOne object and print the value to the console.