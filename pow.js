var callPower = function(x, n) {
  neg = n < 0 ? true: false;
  n = Math.abs(n);
  function power(x, n)
  {
      if (n == 0) return 1;
      if (n % 2 == 0) return Math.pow(power(x, n / 2), 2);
      else return x * power(x, n - 1);
  }  
  result = power(x, n);
  return (!neg) ? result : 1 / result;
};

console.log( callPower(2.00000, -2));

var myPow = function(x, n) {
  if (n === 0) return 1
  else if (n === 1) return x;
  else if (n === -1) return 1 / x;
  else if (n % 2 === 0) {
    // console.log('hi' + n/2)
      const m = myPow(x, n/2);
      return m * m
  }
  else return x * myPow(x, n - 1);
};

console.log( myPow(2.00000, -2));