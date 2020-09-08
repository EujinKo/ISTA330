/*
Given a matrix M, return the transpose of M.

The transpose of a matrix is a 
new matrix whose rows are the columns 
of the original.

Example: 
input: [[1,2,3],[4,5,6]]
output: [[1,4], [2,5], [3,6]]

*/

var transpose = function(M) {
    let len_col = M[0].length;
    let len_row = M.length;

    let i,j;
    var matrix = [];
    var tmp;
    for(i=0;i<len_col;i++){
        tmp = [];
        for(j=0;j<len_row;j++){
            tmp.push(M[j][i]);
        }
        matrix.push(tmp);
    }
    return matrix;

};