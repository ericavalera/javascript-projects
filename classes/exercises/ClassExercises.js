// Define your Book class here:
class Book{
    constructor(title, author, copyrightDate, isbn, pageNum, checkout, discarded){
        this.title= title;
        this.author= author;
        this.copyrightDate= copyrightDate;
        this.isbn= isbn;
        this.pageNum= pageNum;
        this.checkout= checkout;
        this.discarded= discarded;
    }
    checkout(usesNum){
        usesNum+= 1;
        this.checkout += usesNum;
    }
}



// Define your Manual and Novel classes here:

class Manual extends Book {
    constructor(title, author, copyrightDate, isbn, pageNum, checkout, discarded){
        super (title, author, copyrightDate, isbn, pageNum, checkout, discarded)
    }
    bye  = function (year){
        if(year - this.copyrightDate > 5){
            return this.discarded= "yes";
        }
    }
}

class Novel extends Book {
    constructor(title, author, copyrightDate, isbn, pageNum, checkout, discarded){
        super(title, author, copyrightDate, isbn, pageNum, checkout, discarded)
    }
 bye = function (){
        if (this.checkout > 100){
            return this.discarded= "yes";
        }

    }
}
// Declare the objects for exercises 2 and 3 here:
let prideAndPrejudice = new Novel ("Pride and Prejudice", "Jane Austen", 1813, 1111111111111, 432, 32, "No")

let topSecretShuttleBuildingManual = new Manual ("Top Secret Shuttle Building Manual", "Redacted", 2013, 0o0, 1147, 1, "No")
// Code exercises 4 & 5 here:

prideAndPrejudice.checkout+= 5;
topSecretShuttleBuildingManual.bye(2024)

console.log(topSecretShuttleBuildingManual)
console.log(prideAndPrejudice)