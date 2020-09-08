/*
Given an integer n, 
put each number from 1 to n 
into groups based on the sum of its digits. 

Return how many groups have the largest size.

Example:
input: n = 11
output: 2
The groups are: [1, 10], [2, 11], [3], [4], [5], [6], [7], [8], [9]
so there are two groups with the largest size.
*/

var largestGroupsCount = function(n) {
    let arr = [];
    let i;
    //Initializes the array
    for(i=0;i<10;i++){
        arr.push([]);
    }

    for(i=1;i<=n;i++){
        let sum = sumOfDigits(i);
        let tmp = arr[sum-1];
        tmp.push(i);
    }
    
    let count = 0;
    let max_l = maxLengthIn2DArray(arr);
    // alert(max_l);
    for(i=0;i<arr.length;i++){
        if(arr[i].length == max_l){
            count+=1;
        }
    }
    return count;
}

//Returns the length of the maximum length of sub array
function maxLengthIn2DArray(input){
    let i;
    let max = 0;
    for(i=0;i<input.length;i++){
        let len = input[i].length;
        if(len>max){
            max = len;
        }
    }
    return max;
}

//This function returns the sum of the digits
function sumOfDigits(num){
    var arr = [];
    while(num>=10){
        temp = num%10;
        arr.push(temp);
        num = (num-temp)/10;
    }
    arr.push(num);

    let i;
    let sum = 0;
    for(i=0;i<arr.length;i++){
        sum += arr[i];
    }
    return sum;
}