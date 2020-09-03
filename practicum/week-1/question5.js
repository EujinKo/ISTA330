/*
Given a non-negative integer, we want to reduce it to zero. 
We are allowed to do one of the following three operations:
1. divide the number by 3
2. divide the number by 4
3. subtract 1 from the number
Find the minimum number of operations to reduce a given number to zero.
Example: 
input: 12
output: 3
12 divided by 4 becomes 3 which divided by 3 becomes 1. The third and last step is the substraction by one operation.
*/

var minimalReduction = function(n) {
    var count = 0;
    var num = n;
    while(num != 0 ){
        if(num%4==0){
            num = divide_four(num);
        }else if(num%3==0){
            num = divide_three(num);
        }else{
            num = subtract_one(num);
        }
        count += 1;
    }
    return count;
};


function divide_three(n){
    return n/3;
}
function divide_four(n){
    return n/4;
}
function subtract_one(n){
    return n-1;
}