/*
Given a non-negative integer n, 
generate the first n rows of Pascal's triangle (https://en.wikipedia.org/wiki/Pascal%27s_triangle).

Example:
input: 4
output: [
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1] 
]
*/

var PascalTriangle = function(n) {
  if(n==0){
    return arr;
  }
  var arr = [
    [1]
  ];
  if(n==1){
    return arr;
  }
  arr.push([1,1]);
  if(n==2){
    return arr;
  }

  let i;
  for(i=2;i<n;i++){
    let new_arr = [];
    let tmp_arr = arr[i-1];
    
    new_arr.push(1);
    for(j=1;j<tmp_arr.length;j++){
      let sum = tmp_arr[j-1]+tmp_arr[j];
      new_arr.push(sum);
    }
    new_arr.push(1);
    arr.push(new_arr);
  }
  // alert(arr);
  return arr;

};