function makeLine(size){
    line ="";
    for(let i = 0; i < size; i++){
    line += "#"; 
}
    return line;
}
console.log(makeLine(5));

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

function makeDownstairs(size){
    downstairs="";
    for(let i=0; i < size; i++){
        downstairs+=makeLine(i+1) +'\n';
    } return downstairs.slice(0,-1);
}
console.log(makeDownstairs(5));

function makeSpaceLine(numSpaces, numChar, hash){ 
    hash="#";
    return " ".repeat(numSpaces) + hash.repeat(numChar) + " ".repeat(numSpaces);
}
console.log(makeSpaceLine(3, 5));

function makePyramid(height){
    pyramid= "";
    for(let i=0; i< height; i++){
    pyramid+= (makeSpaceLine(height - i - 1, 2*i + 1) + "\n");
    }
    return pyramid.slice(0,-1);
} 
console.log(makePyramid(5))

function makeDiamond(height){
    diamondTop="";
    diamondBottom=""
    for (let i= 0; i < height; i++){
     diamondTop+= makePyramid(height);
     diamondBottom+=diamondTop.split("\n").slice(0,-1).reverse().join("\n");
      return diamondTop +"\n"+ diamondBottom;
    } 
} console.log(makeDiamond(5));