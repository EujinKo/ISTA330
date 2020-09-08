/*
Given an array of integers, input, 
a d-integer is an integer which has 
a frequency in the array equal to its value.

Return a d-integer. If there are multiple 
d-integers return the largest of them.
If there is no d-integer return -1.

Example:
input: [3,5,3,3,5,1]
output: 3
*/

var d_integer = function(input) {
    let list = [];
    
    let i;
    for(i=0;i<input.length;i++){
        if(findNinArray(list,input[i])==false){
            list.push(input[i]);
        }
    }

    let num_list = [];
    for(i=0;i<list.length;i++){
        num_list.push(findHowMany(input,list[i]));
    }

    let max = -1;
    for(i=0;i<list.length;i++){
        let val = list[i];
        let num_val = num_list[i];
        if(val===num_val && val>max){
            max = val;
        }
    }
    return max;

};


//Checks whether target value exists in input array
function findNinArray(arr,target){
    let i;
    for(i=0;i<arr.length;i++){
        if(arr[i]===target){
            return true;
        }
    }
    return false;
}

//Checks how many target value exists in input array
//  and return it's number
function findHowMany(arr,target){
    let i;
    let count = 0;
    for(i=0;i<arr.length;i++){
        if(arr[i]===target){
            count += 1;
        }
    }
    return count;
}