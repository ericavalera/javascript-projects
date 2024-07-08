let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6,
   astronautID: 1,
   move:function (){
   return Math.floor(Math.random()*10);
   }
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5,
   astronautID: 2,
   move:function (){
   return Math.floor(Math.random()*10);
   }
};

let superChimpTwo ={
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6,
   astronautID: 3,
   move:function (){
   return Math.floor(Math.random()*10);
   }
};

let puppy= {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5,
   astronautID: 4,
   move:function (){
   return Math.floor(Math.random()*10);
   }
};

let waterBear= {
   name: "Almina",
   species: "Tardigrade",
   mass: 0.0000000001,
   age: 1,
   astronautID: 5,
   move:function (){
   return Math.floor(Math.random()*10);
   }
};

let crew=[superChimpOne, salamander, superChimpTwo, puppy, waterBear];

function crewReports(animal){
   return animal.name + ' is a '+ animal.species +". They are "+ animal.age + " years old and " + animal.mass +" kilograms. Their ID is "+ animal.astronautID +' .';
}
console.log(crewReports(waterBear));
console.log(crewReports(puppy));
console.log(crewReports(superChimpTwo));
console.log(crewReports(salamander));
console.log(crewReports(superChimpOne));

function fitnessTest(array){
   raceResults=[];
   steps=[];
   turns=[];
   for(let i = 0; array.length > i; i++){
      turns= 0;
      steps= 0;
      while(steps< 20){
        steps += array[i].move();
        turns += 1;
      }raceResults.push(`${array[i].name} took ${turns} turns to take 20 steps.`);
   }return raceResults;
}
console.log(fitnessTest(crew));

// After you have created the other object literals, add the astronautID property to each one.

// Add a move method to each animal object

// Create an array to hold the animal objects.

// Print out the relevant information about each animal.

// Start an animal race!
