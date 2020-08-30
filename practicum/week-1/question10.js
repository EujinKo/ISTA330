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
    arr.sort();

    var max = arr[arr.length-1];
    var min = arr[0];
    return max-min;
};