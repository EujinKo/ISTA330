
/*
The array cookies represent the number of cookies that each kid has. 
Given the array cookies and an integer extraCookies, determine whether there is a
way to distribute the extraCookies among the kids in a way that kids get equal number of cookies.
Example: input: cookies = [3, 5, 8] , extraCookies = 8
         output: true
         Because we can give 5 of the extraCookies to the first kid and the remaining 3 to the second kid
         and therfore each of the three kids will get 8 cookies.
 */

 var canGetEqualCookies = function(cookies, extraCookies) {
        var arr_len = cookies.length;

        var sum_of_cookies = 0;
        var max = 0;
        var i;
        for(i=0;i<arr_len;i++){
                sum_of_cookies += cookies[i];

                if(cookies[i]>max){
                        max = cookies[i];
                }
        }
        var req_cookies = arr_len*max;
        var avail_cookies = extraCookies+sum_of_cookies;

        return Boolean(req_cookies == avail_cookies);
 };
