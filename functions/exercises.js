function makeLine(size){
    line ="";
    for(let i = 0; i < size; i++){
    line += "#"; 
}
    return line;
}
console.log(makeLine(5) +'\n');

function makeSquare(size){
square="";
for(let i=0; i < size; i++){
    square+= makeLine(size) + '\n'; 
}
return square;
}

console.log(makeSquare(5));

function makeRectangle(height,width){
 rectangle="";
 for(let i =0; i< width; i++){
    rectangle+= makeLine(height)+ '\n';
 }
 return rectangle;
}
console.log(makeRectangle(5,3));

function makeDownwardStairs(height){
    triangle="";
    for(let i = 0; i < height; i++){
        triangle+= makeLine(height)+ "\n";
    }
    return triangle;

}
console.log(makeDownwardStairs(5));