//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.
class CrewCandidate {
    constructor(name, mass, scores){
        this.name= name;
        this.mass= mass;
        this.scores= scores;

    }
    addScore(newScore){
        this.scores.push(newScore);
    }

    average() {
        let total = 0;
        for (let i = 0; i < this.scores.length; i++) {
            total += this.scores[i];
        }
        let average = total / this.scores.length;
        return Math.round(average * 10) / 10;
    }

    status(){
        let result;
        let averageScore= this.average();
        if (averageScore >= 90){
            result= "Accepted";
        } else if (averageScore >= 80){
            result=  "Reserved";
        } else if(averageScore >= 70){
         result= "Probationary";
        } else { 
            result=  "Rejected";
        } 
        return `${this.name} earned an average score of ${this.average()}% and has a status of ${result}`;
     }
    } 


let bubbaBear= new CrewCandidate ("Bubba Bear", 135, [88,85,90]);

let merryMaltese= new CrewCandidate("Merry Maltese", 1.5, [93,88,97]);

let gladGator= new CrewCandidate("Glad Gator", 225, [75,78,62]);



console.log(bubbaBear);
console.log(merryMaltese);
console.log(gladGator);

bubbaBear.addScore(83);

console.log(bubbaBear.scores);

console.log(merryMaltese.average());

//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.
console.log(bubbaBear.status());

console.log(merryMaltese.status());

console.log(gladGator.status());


//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.
gladGator.addScore(100);
gladGator.addScore(100);
console.log(gladGator.status()); // gladGator will take two extra scores of 100% to get to Reserved status