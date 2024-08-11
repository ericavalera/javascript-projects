//Try adding new properties inside constructor.
class Astronaut {
   constructor(name, age, mass){
     this.name = name;
     this.age = age;
     this.mass = mass;
   }
}

let fox = new Astronaut('Fox', 7, 12);

console.log(fox);
console.log(fox.age, fox.color);

fox.age = 9;
fox.color = 'red';

console.log(fox);
console.log(fox.age, fox.color);

class Zodiac {
  constructor (name, birthday, sign){
    this.name= name;
    this.birthday= birthday;
    this.sign=sign;
  }
}

let mia= new Zodiac('Mia', "December 19, 2019");

console.log(mia);
console.log(mia.sign);

mia.attributes= "fiesty";
console.log(mia.attributes);
console.log(typeof mia.sign);
console.log(mia)
//Try modifying or adding properties below.