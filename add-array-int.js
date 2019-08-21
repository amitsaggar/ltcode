var addToArrayForm = function(A, K) {
  let len = A.length;
  let result = [];
  let carry = 0;
  for(i = len-1; i >= 0; i--) {
      digit = A[i] + carry;
      if(carry) carry = 0;
      if(K >= 0) {
        let mod = K%10;
        K = Math.floor(K/10);
        digit += mod;
            if(digit >= 10) {
                carry = digit%10;
                num = Math.floor(digit / 10);
                result.push(num);
            } else {
                result.push(digit);
            }
        } else {
        result.push(A[i]); 
        }
  }
  return result.reverse().join("");
};

console.log( addToArrayForm([1,2,0,0], 34) );