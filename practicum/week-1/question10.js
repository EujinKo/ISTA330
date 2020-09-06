/*
Given an integer n, return difference between the maximum and the minimum of its digits.


Example:
input: 472
output: 7 - 2 = 5
*/

var maxMinusMin = function(n) {
    
    var temp;
    var num = n;
    var arr = [];
    while(num>10){
        temp = num%10;
        arr.push(temp);
        num = (num-temp)/10;
    }
    arr.push(num);

    var max = rtMax(arr);
    var min = rtMin(arr);
    return max-min;
};

//This function returns the minimum value in the array
function rtMin(input){
    if(input.length==0){
        return null;
    }
    var i;
    var min = input[0];
    for(i=0;i<input.length;i++){
        if(min>input[i]){
            min = input[i];
        }
    }
    return min;
}

//This function returns the maximum value in the array
function rtMax(input){
    if(input.length==0){
        return null;
    }
    var i;
    var max = input[0];
    for(i=0;i<input.length;i++){
        if(max<input[i]){
            max = input[i];
        }
    }
    return max;
}