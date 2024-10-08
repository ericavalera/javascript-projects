//Define three variables for the LaunchCode shuttle - one for the starting fuel level, another for the number of astronauts aboard, and the third for the altitude the shuttle reaches.
let fuelLevel = "";
let astronautNum = "";
let shuttleAlt = "";
const input= require('readline-sync');




/*Exercise #4: Construct while loops to do the following:
  a. Query the user for the starting fuel level. Validate that the user enters a positive, integer value greater than 5000 but less than 30000. */
while(!fuelLevel){
  fuelLevel= input.question("Enter the starting fuel level: ");
    if(fuelLevel > 5000 && fuelLevel < 30000){
     fuelLevel=true;
      break;
    } 
    else{
      console.log(`${fuelLevel} is an invalid entry! Number should be more than 5000 & less than 30000`);
      fuelLevel= false;
    }
}



//b. Use a second loop to query the user for the number of astronauts (up to a maximum of 7). Validate the entry.
  
  while(!astronautNum){
    astronautNum= input.question("Enter astronaut number: ");
    if(astronautNum <= 7){
      astronautNum=true;
      break;
    } 
    else{
      console.log(`${astronautNum} is an invalid number of astronauts; should be 7 or less.`);
      astronautNum= false;
    }
  }
  
//c. Use a final loop to monitor the fuel status and the altitude of the shuttle. Each iteration, decrease the fuel level by 100 units for each astronaut aboard. Also, increase the altitude by 50 kilometers.

while (fuelLevel >= 0 ) {
  
  shuttleAlt += 50;
  fuelLevel -= 100 * astronautNum;
  console.log(shuttleAlt);
  console.log(fuelLevel);
  
  }
/*Exercise #5: Output the result with the phrase, “The shuttle gained an altitude of ___ km.”

If the altitude is 2000 km or higher, add “Orbit achieved!” Otherwise add, “Failed to reach orbit.”*/
console.log(`The shuttle gained an altitude of ${shuttleAlt} km; and ${fuelLevel} remains.`)


if (shuttleAlt >= 2000 ){
  console.log("Orbit achieved!")
} else{
  console.log("Failed to reach orbit.")
}