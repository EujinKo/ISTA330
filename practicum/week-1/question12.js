/*
A string, input, which contains only letters a and b is given.
A list of substrings s1, s2, .., sn is called a partition for input if and only if
  input == s1 + s2 + ... + sn.

A substring is balanced if it has ewual number of a's and b's.
The number of balanced substrings in a partition is called the balence number of the partition.
Among all the possible partitions of the input string, what is the maximum balance number?

Example:
input: 'abaabbabab'
output: 4 because the following partition has the highest number of balanced substrings:
          'ab', 'aabb', 'ab', 'ab'
*/


var maxBalanceNumber = function(input) {

  var count_a = 0;
  var count_b = 0;
  var count_bal = 0;
  var char;
  for(i=0;i<input.length;i++){
    char = input.substr(i,1);
    if(char==='a'){
      count_a += 1;
    }else{
      count_b += 1;
    }

    if(count_a==count_b){
      count_bal += 1;
      count_a = 0;
      count_b = 0;
    }
  }
  return count_bal;
};
