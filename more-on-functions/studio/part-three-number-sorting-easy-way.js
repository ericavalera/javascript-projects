//Sample arrays for testing:
let nums1 = [5, 10, 2, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];

function minimumVal(arr){
    let min= arr[0];

    for(let i= 0; i < arr.length; i++){
        if(arr[i]< min){
            min= arr[i];
        }
    } return min;
} 

function ascendingArray(arrayNums){
    let sortedNums=[];
    let minimum="";
    let minIndex="";
    
    while(0 < arrayNums.length){
        minimum = minimumVal(arrayNums);
        sortedNums.push(minimum);
        minIndex= arrayNums.indexOf(minimum);
        arrayNums.splice(minIndex,1);
    }
     return sortedNums;
      }

function descendingArray(arrNums) {
        return ascendingArray(arrNums).reverse();
    }
//Sort each array in ascending order.

console.log(ascendingArray(nums1));
console.log(ascendingArray(nums2));
console.log(ascendingArray(nums3));

//Sort each array in decending order.
console.log(descendingArray(nums1));
console.log(descendingArray(nums2));
console.log(descendingArray(nums3));