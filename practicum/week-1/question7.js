/*
Given an array of 2n numbers, group the numbers into n pairs of integer,
such that the sum of the minimum of each pair is the largest.

Example: 
input: [4, 3, 8, 0]
output: 4
       because we can make the following pairs: (4, 8) and (3, 0) and 
       min(4,8) + min(3,0) = 4
       whatever other pairs we choose the sum of the minimums will not exceed 4.
*/

var maxSumOfMins = function(input) {
       var arr = input.sort();
       var arr_len = input.length;

       var i;
       var x,y;
       var sum = 0;
       for(i=0;i<arr_len/2;i++){
              x = arr[i*2];
              y = arr[i*2+1];
              sum += Math.min(x,y);
       }
       return sum;
};