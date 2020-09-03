/*
Given an array of numbers, for each number in the array 
find out how many numbers in the array are both even and bigger than the number.

Example:
input: [23, 44, 12, 4]
output: [1, 0, 1, 2]
*/

var biggerAndEven = function(input) {
    var arr=[];
    
    var i,n;
    for(i=0;i<input.length;i++){
        n = input[i];
        arr.push(checkNCondition(n,input));
    }
    return arr;
};

// Checks condition and returns the number of legal numbers
function checkNCondition(n,array){
    var i;
    var temp;
    var count = 0;
    for(i=0;i<array.length;i++){
        temp = array[i];
        if(n<temp && temp%2==0){
            count +=1;
        }
    }
    return count;
}