/*
You are given strings A and B.  
How many of the letters in B are also present in A?

The letters in A are guaranteed distinct, and all characters in A and B are letters.
 Letters are case sensitive.

 Example:
 input: A='gtY', B = 'iTygrtg'
 output: 3
*/
var howManyCommon = function(A, B) {
    var a_len = A.length;
    var arr = [];
    var i,j;
    var count = 0;
    for(i=0;i<a_len;i++){
        char = A.substring(i,i+1);
        if(checkValue(char,arr)){
            arr.push(char);
        }
        arr.push(char);
    }

    for(i=0;i<arr.length;i++){
        for(j=0;j<B.length;j++){
            char = B.substring(j,j+1);
            if(arr[i]==char){
                count += 1;
            }
        }
    }
    return count;
};

//This function checks if char exists in array
// and returns the boolean value
function checkValue(char,array){
    var i;
    for(i=0;i<array.length;i++){
        if(array[i] == char){
            return true;
        }
    }
    return false;
}
