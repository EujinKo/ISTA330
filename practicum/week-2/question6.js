/*
Given an array of size n, 
find the m-element. 
The m-element is 
the element that appears more than ⌊ n/2 ⌋ times.

If the majority element does not exist return undefined.

Example: 
input: [1, 2, 2, 3, 2, 7, 2]
output: 2 
*/

var m_element = function(input) {
    let len = input.length;
    let m = len/2;

    let i,j;
    for(i=0;i<len;i++){
        let val = input[i];
        let count = 0;
        for(j=0;j<len;j++){
            if(val===input[j]){
                count+=1;
            }
        }

        if(count>=m){
            return val;
        }
    }
    return -1;
};