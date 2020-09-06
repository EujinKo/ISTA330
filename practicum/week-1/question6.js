/*
Given an array of non-negative integers, return  the median (https://en.wikipedia.org/wiki/Median) of the array. 
Example: 
input: [1, 2, 2, 3, 4, 7, 9]
output: 3 
*/

var median = function(input) {
    var arr_len = input.length;
    if(arr_len%2==0){
        return (input[arr_len/2-1]+input[arr_len/2])/2;
    }else{
        return input[arr_len/2-0.5];
    }
};