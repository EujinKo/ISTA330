/*
There are n soldiers standing in a line. 
Each soldier is assigned a unique rating value.

You have to form a team of 3 soldiers 
under the following rules:

1. Choose 3 soldiers with index (i, j, k) with ratings (rating[i], rating[j], rating[k]).
2. A team is valid if:  (rating[i] < rating[j] < rating[k]) where (0 <= i < j < k < n).

Return the number of teams you can form given the conditions. 
(soldiers can be part of multiple teams).


 Example:
         input: [2,5,3,4,1]
         output: 1
         We can only form one team given the 
         conditions: (2,3,4)
*/

var howManyTeams = function(input) {
        var count = 0;
        if(input.length<0){
                return count;
        }
        let second,third;
        while(input.length>0){
                let tmp = input[0];
                second = biggerThanIndex(input,0)
                if(second.length>0){
                        let i;
                        for(i=0;i<second.length;i++){
                                third = biggerThanIndex(input,second[i]);
                                if(third.length>0){
                                        input.splice(third[0],1);
                                        input.splice(second[i],1);
                                        count+=1;
                                        break;

                                }
                        }

                }
                input.shift();
        }
        return count;
};

//This function finds an array of index values which are bigger
// than the value at the arr[index]
function biggerThanIndex(arr, index){
        let new_arr = [];
        let i;
        let val = arr[index];
        for(i=index;i<arr.length;i++){
                if(arr[i]>val){
                        new_arr.push(i);
                }
        }
        // alert(new_arr);
        return new_arr;
}

