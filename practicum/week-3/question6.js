/*
A zero-indexed array A of length N 
contains all integers from 0 to N-1. 
Find and return the longest length of set S, 
where S[i] = {A[i], A[A[i]], A[A[A[i]]], ... } 
subjected to the rule below:

Suppose the first element in S starts with 
the selection of element A[i] of index = i, 
the next element in S should be A[A[i]], 
and then A[A[A[i]]]… Then you should stop 
adding elements to S just before a duplicate element 
occurs in S.

Example: 
input: A = [5,4,0,3,1,6,2]
output:  4
     because the longest S is:
     S = {A[0], A[A[0]], A[A[A[0]]], A[A[A[A[0]]]]}
     A[0] = 5
     A[A[0]] = A[5] = 6
     A[A[A[0]]] = A[6] = 2
     A[A[A[A[0]]]] = A[2] = 0
     but A[A[A[A[A[0]]]]] = A[0] = 5 which is a duplicate.
*/

var longestNested = function(A) {
     var nested = [];
     
     let i;
     for(i=0;i<A.length;i++){
          let tmp_arr = [];
          
          let value = A[i];
          while(existsDuplicate(tmp_arr,value) == false){
               tmp_arr.push(value);
               value = A[value];

          }
          alert(tmp_arr);
          nested.push(tmp_arr);
     }

     let count = 0;
     for(i=0;i<nested.length;i++){
          let tmp = nested[i];
          if(tmp.length>count){
               count = tmp.length;
          }
     }
     return count;

};


//Checks whether value target exists in the array input
function existsDuplicate(input,target) {
     let i;
     for(i=0;i<input.length;i++){
         tmp = input[i];
     //     alert(tmp+","+target);
         if(tmp == target){
              return true;
         }
 
     }
      return false;
 
};