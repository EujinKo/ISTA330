/*
Given two integer arrays input1 and input2, 
and the integer d, return the d-count 
between the two arrays.

The d-count is defined as 
the number of elements input1[i] such that 
there is not any element input2[j] 
where |input1[i]-input2[j]| <= d.

Example:
input: input1 = [2,1,26,3], input2 = [-5,-2,10,-3,7], d = 6
output: 1
*/

var d_count = function(input1, input2, d) {
    let i,j;
    let count = 0;
    var trig = false;
    for(i=0;i<input1.length;i++){
        // alert(i);
        for(j=0;j<input2.length;j++){
            if(checkCondition(input1[i],input2[j],d)){
                // alert(input1[i]+","+input2[j]);
                trig = false;
                break;
            }
            trig = true;
        }
        if(trig){
            count+=1;
        }
        
    }
    return count;
};

//Checks the d condition. returns true if it matches
function checkCondition(input1,input2,d){
    if(rtAbs(input1-input2)<=d){
        return true;
    }
    return false;
}

//Gets input and returns its absolute value
function rtAbs(input){
    if(input<0){
        return input * -1;
    }
    return input;
}