/*
Given an array of non-negative integers, return  the median (https://en.wikipedia.org/wiki/Median) of the array. 
Example: 
input: [1, 2, 2, 3, 4, 7, 9]
output: 3 
*/

var median = function(input) {
    var arr = input.sort();
    var arr_len = input.length;
    if(arr_len%2==0){
        return (arr[arr_len/2-1]+arr[arr_len/2])/2;
    }else{
        return arr[arr_len/2-0.5];
    }
};