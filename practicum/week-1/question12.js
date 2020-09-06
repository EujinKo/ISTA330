/*
A string, input, which contains only letters a and b is given.
A list of substrings s1, s2, .., sn is called a partition for input if and only if
  input == s1 + s2 + ... + sn.

  
A substring is balanced if it has equal number of a's and b's.
The number of balanced substrings in a partition is called the balence number of the partition.
Among all the possible partitions of the input string, what is the maximum balance number?

Example:
input: 'abaabbabab'
output: 4 because the following partition has the highest number of balanced substrings:
          'ab', 'aabb', 'ab', 'ab'
*/


var maxBalanceNumber = function(input) {
  if(input.length == 0){
    return 0;
  }

  var arr = [];
  var trig = input.substr(i,1);
  var char;
  var str = "";
  var i;
  for(i=0;i<input.length;i++){
    char = input.substr(i,1);
    if(trig!==char){
      trig = char;
      arr.push(str);
      str = "";
      str += char;
    }else{
      str += char;
    }
  }
  arr.push(str);
  let max = 0;
  while(arr.length != 0){
    let a = arr.shift();
    let b = arr.shift();
    let a_len = a.length;
    let b_len = b.length;

    let tmp;
    if(a_len < b_len){
      tmp = a_len*2;
    }else{
      tmp = b_len*2;
    }
    if(tmp>max){
      max = tmp;
    }
  }

  return max;
};
