/*
Given a string, determine if it is a palindrome, 
considering only alphanumeric characters and ignoring cases.

Note: For the purpose of this question, 
we define empty string as valid palindrome.

Example:
input: 'Was it a car or a cat I saw'
output: true
*/

var isPalindrome = function(s) {
    var arr = [];
    let i;
    for(i=0;i<s.length;i++){
        if(s[i] != ' '){
            let tmp = s[i].toLowerCase();
            if(tmp>='a' && tmp <= 'z'){
                arr.push(tmp);
            }
        }
    }
    let size = arr.length;
    for(i=0;i<size/2;i++){
        if(arr[i]!=arr[size-1-i]){
            return false;
        }
    }
    return true;
};