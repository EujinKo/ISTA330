/*
Given an array of integers A, 
a move consists of choosing any A[i], 
and incrementing it by 1.

Return the least number of moves to make every value in A unique.

Example:
input: [1,2,2]
output: 1
*/

var minMoves = function(A) {
    let count = 0;

    let i,j;
    while(isUnique(A)==false){
        for(i=0;i<A.length;i++){
            let tmp = A[i];
            for(j=0;j<A.length;j++){
                if(i!=j){
                    if(tmp == A[j]){
                        count += 1;
                        A[j] += 1;
                    }
                }
            }
        }
    }
    return count;
};


//Returns false if the input array is duplicate value
function isUnique(input){
    let i,j;
    for(i=0;i<input.length;i++){
        let tmp = input[i];
        for(j=0;j<input.length;j++){
            if(i!=j){
                if(tmp == input[j]){
                    return false;
                }
            }
        }
    }
    return true;
}

//Bubble sort function for the array input, returns new array
function bubble_sort(input){
    let l = input.length;
    let i,j,temp;
    for(i=l-1;i>0;i--){
      for(j=0;j<i;j++){
        if(input[j]>input[j+1]){
          temp = input[j];
          input[j] = input[j+1];
          input[j+1] = temp;
        }
      }
    }
    return input;
  };