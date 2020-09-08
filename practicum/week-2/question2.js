
/*
Given an integer array, input, 
find the subarray
 which has the largest sum and return its sum.

Example: input: [-12,3,-1,5,-2,1,-7]
         output: 7
                 because [3,-1,5] has the largest sum.
          */

 var largestSubarray = function(input) {
     let i,j;
     let max = 0;
     for(i=0;i<input.length;i++){
             for(j=0;j<input.length;j++){
                     let tmp = input.slice(i,j);
                     let sum = rtSum(tmp);
                     if(sum>max){
                             max = sum;
                     }
             }
     }
     return max;
    
 };

 //Returns sum of the array
 function rtSum(input){
        let i;
        var sum = 0;
        for(i=0;i<input.length;i++){
                sum += input[i];
        }
        return sum;
 }
