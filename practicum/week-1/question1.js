/*
Given an array of numbers, return the running sum of the array. 
Running sum of a cell in the array is the sum of the cells up to that cell.
For example given the input array [5, 6, 1], the running sum is 
[5, 5+6, 5+6+1]
*/

var runningSum = function(input) {
   var arr_len = input.length;
   var arr = [];
   var sum = 0;
   
   var i;
   for(i=0;i<arr_len;i++){
       sum += input[i];
       arr.push(sum);
   }
   return arr;
};