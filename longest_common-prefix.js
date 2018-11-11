/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:

Input: ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
Note:

All given inputs are in lowercase letters a-z.
*/

/*
  Interate over array of words.
  make first word your prefix.
  while prefix not empty and iterate over all words
    get the next word 
    check if next is indexof prefix (!=0)
      take of last letter of prefix.
  loop
*/
str = ["flower","flow","flight"];

const longestCommonPrefix = function(arr) { 
  let prefix = (arr.length) ? arr[0] : '';
  let i = 1
  
  while (prefix && i < arr.length) {
      const next = arr[i];
      while (next.indexOf(prefix) !== 0) {
          prefix = prefix.slice(0, -1);
      }
      i++;
  
  }
  return prefix;
}



// var longestCommonPrefix = function(strs) {
//   const word_chars_array = [];
//   const result = "";
//   // var i = 0;
//   // var j = 0;
//   strs.forEach((val, index) => {
//     word_chars_array[index] = String(val).split('');
//   });
//   for(i=0;i<=strs.length;i++){   
//     for(j=0;j<=word_chars_array.length;j++){
//       if(word_chars_array[i][j] === word_chars_array[i+1][j] === word_chars_array[i+2][j]){
//         result += word_chars_array[i][j];
//         debugger;
//       }else {
//         break;
//       }
//     }
//   }
//   return result;
// };

console.log(longestCommonPrefix(str));