var palPartions = function(s) {
  result = [];

  function isPalindrome(str, low, high) 
  { 
      while (low < high) 
      { 
          if (str[low] != str[high]) 
              return false; 
          low++; 
          high--; 
      } 
      return true; 
  } 
  subA = [];
  for(i=0; i<s.length-1; i++) {
    subA.push(s.substr(i,1));
  }
  result.push(subA);
  
  for (p = 0; p <= s.length; p++) {
    for (q = p+1; q <= s.length; q++) {
      if(isPalindrome(s.split(""), p, q)){
        q = (p == 0? q+=1: q);
        result.push(s.substr(p,q));
      }
    }
  }
  return result;    
}  

console.log(palPartions("nitin"));