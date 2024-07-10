// Code your orbitCircumference function here:
function orbitCircumference(radius){
  let circumference = Math.round(Math.PI * 2 * radius)
  return circumference;
}

// Code your missionDuration function here:
function missionDuration (numOrbits, orbitRadius = 2000 , orbitalSpeed = 28000 ){
  let distance= orbitCircumference(orbitRadius) * numOrbits;
  let time= Math.round((distance / orbitalSpeed)*100)/100;
  return time;
}

// Copy/paste your selectRandomEntry function here:
function selectRandomEntry(arr){ 
  return arr[Math.floor(Math.random()*arr.length)];
    } 

// Code your oxygenExpended function here:
function oxygenExpended(candidate, orbitRadius, orbitalSpeed){
  let hours= missionDuration(3, orbitRadius, orbitalSpeed);
  let oxygen= Math.round(candidate.o2Used(hours)*1000)/1000;
  return `${candidate.name} will perform the spacewalk, which will last ${hours} hours and require ${oxygen} kg of oxygen.`
}
// Candidate data & crew array.
let candidateA = {
   'name':'Gordon Shumway',
   'species':'alf',
   'mass':90,
   'o2Used':function(hrs){return 0.035*hrs},
   'astronautID':414
 };
 let candidateB = {
   'name':'Lassie',
   'species':'dog',
   'mass':19.1,
   'o2Used':function(hrs){return 0.030*hrs},
   'astronautID':503
 };
 let candidateC = {
   'name':'Jonsey',
   'species':'cat',
   'mass':3.6,
   'o2Used':function(hrs){return 0.022*hrs},
   'astronautID':796
 };
 let candidateD = {
   'name':'Paddington',
   'species':'bear',
   'mass':31.8,
   'o2Used':function(hrs){return 0.047*hrs},
   'astronautID':291
 };
 let candidateE = {
   'name':'Pete',
   'species':'tortoise',
   'mass':417,
   'o2Used':function(hrs){return 0.010*hrs},
   'astronautID':599
 };
 let candidateF = {
   'name':'Hugs',
   'species':'ball python',
   'mass':2.3,
   'o2Used':function(hrs){return 0.018*hrs},
   'astronautID':890
 };
 
 let crew = [candidateA, candidateC,candidateE];
 let spacewalker= selectRandomEntry(crew);
 spaceWalker= crew[0];

 for(let i=1; i< crew.length; i++){
  if(crew[i].o2Used < spaceWalker.o2Used){
  spaceWalker= crew[i];
  }1
 }

console.log(`The mission will travel ${5 * orbitCircumference(2000)} around the planet, and will take ${missionDuration(5)} hours to complete.`)
console.log(oxygenExpended(spaceWalker));
