/*
Given a m x n matrix filled with non-negative numbers, 
find a path from top left to bottom right 
which minimizes the sum of all numbers along its path. Return the sum.

Note: You can only move either down or right at any point in time.

Example: 
input: [
  [1,3,1],
  [1,5,1],
  [4,2,1]
]
output: 7
        Because the path 1→3→1→1→1 minimizes the sum.

*/

var minPath = function(M) {
  return search(M,[0,0]);
     
};


function search(M, curr){
  let curr_val = M[curr[0]][curr[1]];
  // alert("x,y:("+curr[0]+","+curr[1]+")");
  if(curr[0] == (M.length-1) && curr[1] == (M.length-1)){
    return curr_val;
  }

  let right = 1000;
  let down = 1000;
  if((curr[0]+1)<=( M.length-1)){
    down = search(M,[(curr[0]+1),curr[1]]);
  }
  if((curr[1]+1)<=( M[0].length-1)){
    right = search(M,[curr[0],(curr[1]+1)]);
    
  }
  // alert("x,y:("+curr[0]+","+curr[1]+")down:"+(down)+"right:"+(right));

  if(down<right){
    return curr_val+down;
  }else{
    return curr_val+right;
  }
}