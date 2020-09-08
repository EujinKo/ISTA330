/*
Given an array of distinct integers, input, 
find all pairs of elements with the minimum  difference (that is the minimum of the absolute value of the difference)
 of any two elements. 

Return a list of pairs in ascending order. 
For each pair [a, b] we have:

 1. a, b are from the input array
 2. a < b
 3. b - a equals to the minimum difference of any two elements in the input array
 
Example:
input: [1,-5,-10,24,19,-4,-14,23]
output: [[-5, -4], [23, 24]]
*/

var minPairs = function(input) {
    let minDif = rtMinDif(input);
    let arr = [];
    let dup = input;

    while(dup.length!=0){
        
        let val1 = dup.splice(rtMinIndex(dup),1);
        let i;
        for(i=0;i<dup.length;i++){
            let val2 = dup[i];
            if(rtAbs(val1-val2)==minDif){
                dup.splice(i,1);
                let tmp=[];
                if(val1<val2){
                    tmp.push(val1);
                    tmp.push(val2);
                }else{
                    tmp.push(val2);
                    tmp.push(val1);
                }
                arr.push(tmp);
            }
        }
        
    }

    return arr;
};

//This function returns the index of minimum value of the input array
function rtMinIndex(input){
    if(input.length==0){
        return undefined;
    }
    let minval = input[0];
    let min_index = 0;
    let i;

    for(i=0;i<input.length;i++){
        if(input[i]<minval){
            min_index = i;
            minval = input[i];
        }
    }
    return min_index;
}

//Returns minimum difference between the values in the input array
function rtMinDif(input){
    if(input.length<2){
        return -1;
    }
    let i,j;
    let min = rtAbs(input[0]-input[1]);
    for(i=0;i<input.length;i++){
        for(j=0;j<input.length;j++){
            if(i!=j){
                let dif = rtAbs(input[i]-input[j]);
                if(dif<min){
                    min = dif;
                }
            }
        }
    }
    return min;
}

//Gets input and returns its absolute value
function rtAbs(input){
    if(input<0){
        return input * -1;
    }
    return input;
}