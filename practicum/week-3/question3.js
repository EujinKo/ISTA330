/*
Given an array input of 0s and 1s and an integer k, 
return true if all ones(1s) are at least k places away from each other, 
otherwise return false.

Example:
input: input = [1,0,0,0,1,0,0,1], k = 2
output: true
*/

var kStepAway = function(input, k) {
    let count = k;
    let i,j,tmp;
    for(i=0;i<input.length;i++){
        tmp = input[i];
        if(tmp == 1){
            if(count<k){
                return false;
            }else{
                count = 0;

            }
        }else{
            count += 1;
        }
        
    }
    return true;

};