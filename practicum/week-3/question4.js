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
  // var arr = [];
  // var tmp;
  // let size =0;
  // let i,j;
  // for(size=0;size<input.length;size++){
  //   tmp = [];
  //   for(i=0;i<input.length;i++){
  //     for(j=0;j<size;j++){

  //     }
  //   }
  //   arr.push(tmp);
  //   // alert(tmp);
  // }

  // return arr;
};

//Checks if the target exists in arr
function ifExist(arr,target){
  let i;
  for(i=0;i<arr.length;i++){
    if(target == arr[i]){
      return true;
    }
  }
  return false;
}


