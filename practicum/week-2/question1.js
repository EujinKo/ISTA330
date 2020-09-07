/*
Given an array of numbers, input, 
find whether the largest element in the array 
is at least twice as much as every other number
 in the array. If this is the case return true otherwise return false.

 Example:
         input: [3,2,21,50]
         output: true
*/

var largestNumberIsAtLeastTwice = function(input) {
   let max = rtMax(input);

   let i;
   let tmp;
   for(i=0;i<input.length;i++){
           tmp = input[i];
           if(tmp!==max && tmp*2>max){
                return false;
           }
   }
   return true;
};

//This function returns max from the array input
function rtMax(input){
        if(input.length == 0){
                return false;
        }
        let max = input[0];
        let i;
        for(i=0;i<input.length;i++){
                if(input[i]>max){
                        max = input[i];
                }
        }
        return max;
}