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
              x = input.splice(rtMaxIndex(input),1);
              y = input.splice(rtMaxIndex(input),1);
              sum += Math.min(x,y);
       }
       return sum;
};


//Returns index of the max value of the array
function rtMaxIndex(input){
       if(input.length == 0){
              return -1;
       }
       let max = input[0];
       let max_i = 0;
       let i;
       for(i=0;i<input.length;i++){
              if(input[i]>max){
                     max = input[i];
                     max_i = i;
              }
       }
       return max_i;
}