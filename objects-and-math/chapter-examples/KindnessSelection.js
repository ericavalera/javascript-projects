function randomSelection(arr1,arr2){
   let index = Math.floor(Math.random()*8);
   return arr1[index],arr2[index];
 }
 
 let happiness = ['Hope', 'Joy', 'Peace', 'Love', 'Kindness', 'Puppies', 'Kittens', 'Tortoise'];
 let happinessRandom={
  random: function(){
    let index= Math.floor(happiness.length * Math.random());
    console.log(happiness[index]);

  }
 }
 let words = ['Hello', 'World', 'Python', 'JavaScript', 'Rutabaga'];
 let wordsRandom={
  random: function(){
    let index= Math.floor(words.length * Math.random());
    console.log(words[index]);

  }
 }
 //for (i=0; i < 8; i++){
  // console.log(randomSelection(happiness));
 //};
 
 //Experiment with the code above. Try to:
 //a) Print 3 random selections from each array.
wordsRandom.random();
wordsRandom.random();
wordsRandom.random();
happinessRandom.random();
happinessRandom.random();
happinessRandom.random();


 //b) Have the code randomly pick one array, and then print 2 random items from it.
 console.log(randomSelection(happiness,words));
 //c) Create a new array, then fill it with one random item from words and happiness. Print the new array.