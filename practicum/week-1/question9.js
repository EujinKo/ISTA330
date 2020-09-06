/*
We have a string, input, and an integer array, shuffleIndices.
We want to shuffle the string based on the shufleIndices array.

Example:
input: 'llheo', shuffleIndices = [2, 3, 0, 1, 4]
output: 'hello'

*/

var suffleString = function(input, shuffleIndices) {
    const len = input.length;
    var i,n;
    var arr = [];
    for(i=0;i<len;i++){
        arr.push('');
    }

    for(i=0;i<len;i++){
        n = shuffleIndices[i];
        arr[n] = input.substr(i,1);
    }

    var str = "";
    for(i=0;i<len;i++){
        str += arr[i];
    }
    return str;

};