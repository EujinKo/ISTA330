/*
Given a string path, where path[i] = 'N', 'S', 'E' or 'W', each representing moving one
 unit north, south, east, or west, respectively. 
You start at the origin (0, 0) on a 2D plane and walk on the path specified by path.

Return true if the path crosses itself at any point, that is, if at any time you 
are on a location you've previously visited. 
Return false otherwise.

Example:
    input: "NESSESW"
    output: false
*/

var isCrossing = function(s) {
    var curr = [0,0];
    var path = [];
    path.push([curr[0],curr[1]]);
    for(i=0;i<s.length;i++){
        let tmp = s[i];
        if(tmp == 'N'){
            curr[1] += 1;
        }
        if(tmp == 'S'){
            curr[1] -= 1;
        }
        if(tmp == 'E'){
            curr[0] += 1;
        }
        if(tmp == 'W'){
            curr[0] -= 1;
        }
        path.push([curr[0],curr[1]]);

    }
    if(didCrossed(path) == true){
        return true;
    }
    return false;
};


function didCrossed(input){
    var arr = input;
    while(arr.length>0){
        let i;
        let val = arr.pop();
        for(i=0;i<arr.length;i++){
            let tmp = arr[i];
            if(val[0]==tmp[0] && val[1]==tmp[1]){
                return true;
            }
        }
    }
    return false;
}