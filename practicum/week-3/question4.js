/*
Given a set of distinct integers, input, 
return all possible subsets (the power set).

The solution set must not contain duplicate subsets.
 
Example:
 input: [1,2,3]
 output: [
  [],   
  [1],
  [2],
  [3],  
  [1,3],
  [2,3],
  [1,2],
  [1,2,3]
]
*/

var powerSet = function(input) {

};

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