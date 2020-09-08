/*
An array is monotonic if it is 
either monotone increasing 
or monotone decreasing.

An array A is monotone increasing 
if for all i <= j, A[i] <= A[j].  
An array A is monotone decreasing 
if for all i <= j, A[i] >= A[j].

For a given array, input, 
return true if and only if the input array is monotonic.

Example: 
input: [12, 6, 2, 2, 2, 0]
output: true
*/

var isMonotonic = function(input) {
    if(input.length <= 1){
        return true;
    }
    
    let isDecreasing;
    if(input[0]<input[1]){  //Increasing
        isDecreasing = false;
    }else{  //Decreasing
        isDecreasing = true;
    }

    let i;
    for(i=1;i<input.length;i++){
        if(isDecreasing && input[i-1]<input[i]){    //Increasing
            return false;
        }else if(!isDecreasing && input[i-1]>input[i]){
            return false;
        }
    }
    return true;
};

console.log('hi');