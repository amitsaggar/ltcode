/*
Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

Example 1:

Input: "babad"
Output: "bab"
Note: "aba" is also a valid answer.
Example 2:

Input: "cbbd"
Output: "bb"
*/
var checkPalindrome = function(subst) {
  if(subst == subst.split('').reverse().join('') || subst.length==2){  
    return true;
  } else {
    return false;
  }

};

var longestPalindrome = function(s) {
  let len = s.length;
  let i = 0
  let j = 1;
  let maxlength = [];
  while(j < len) {
    first = s.charAt(i);
    last = s.charAt(j);
    subs_to_check = s.substring(i, j-i+1);
    if (checkPalindrome(subs_to_check)) {
      if ( maxlength.length < subs_to_check.length ) {
        maxlength[0]=subs_to_check;
      }
      j++;
    } else {
      i++;
      j++;
    }
    console.log( subs_to_check + '--' + i + '--'+ j + '--' + checkPalindrome(subs_to_check) + '---' + maxlength);
  }
    return maxlength[0];
};

// console.log( longestPalindrome("sdababdd") );

function is_Palindrome(str1) {
  var rev = str1.split("").reverse().join("");
  return str1 == rev;
}
  
function longest_palindrome(str1){
  
  var max_length = 0,
  maxp = '';
  
  for(var i=0; i < str1.length; i++) 
  {
    var subs = str1.substr(i, str1.length);
    // console.log( subs );
    for(var j=subs.length; j>=0; j--) 
    {
      var sub_subs_str = subs.substr(0, j);
      console.log( sub_subs_str );
      if (sub_subs_str.length <= 1)
      continue;
      
      if (is_Palindrome(sub_subs_str))
      {
        if (sub_subs_str.length > max_length) 
        {
          max_length = sub_subs_str.length;
          maxp = sub_subs_str;
          console.log( 'maxp: ' + maxp );
        }
      }
    }
  }
  return maxp;
}

console.log(longest_palindrome("banana"));
  
  // console.log(longest_palindrome("HYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDE")); 