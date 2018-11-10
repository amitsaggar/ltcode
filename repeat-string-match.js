/*
Given two strings A and B, find the minimum number of times A has to be repeated such that B is a substring of it. If no such solution, return -1.

For example, with A = "abcd" and B = "cdabcdab".

Return 3, because by repeating A three times (“abcdabcdabcd”), B is a substring of it; and B is not a substring of A repeated two times ("abcdabcd").

Note:
The length of A and B will be between 1 and 10000.
*/

var repeatedStringMatch = function(A, B) {
    let i = 0;
    let str = '';
    do {
        str = A.repeat(++i);
        if (str.indexOf(B) !== -1){
            return i;
        }
    }
    while (str.length <= B.length);
    if (A.repeat(++i).indexOf(B) !== -1){
        return i;
    }
    return -1;
}

const A = "abcd";
const B = "cdabcdab";

console.log( repeatedStringMatch(A,B) );
