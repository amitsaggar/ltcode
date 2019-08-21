var longestPalindrome = function(s) {
  let C = 0, R = 0;
  let P = new Array(s.length);
  P.fill(0);
  
  for(let i=0; i < s.length; i++) {
      let mirr = 2*C - i;
      
      // Copy Mirror.
      if(i < R) {
          P[i] = Math.min(R-i, P[mirr]);
      } else 
        P[i] = 0;

      // Check for palindrome
      while( s[i + (1 + P[i])] == s[i - (1 - P[i])] ) {
          P[i]++;
      }

      // Move C & R
      if(i + P[i] > R) {
          C = i;
          R = i + P[i];
      }
  }
  return P;
};

console.log(longestPalindrome("babad"));