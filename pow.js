// var callPower = function(x, n) {
//   neg = n < 0 ? true: false;
//   n = Math.abs(n);
//   function power(x, n)
//   {
//       if (n == 0) return 1;
//       if (n % 2 == 0) return Math.pow(power(x, n / 2), 2);
//       else return x * power(x, n - 1);
//   }  
//   result = power(x, n);
//   return (!neg) ? result : 1 / result;
// };

// console.log( callPower(2.00000, -2));

// var myPow = function(x, n) {
//   if (n === 0) return 1
//   else if (n === 1) return x;
//   else if (n === -1) return 1 / x;
//   else if (n % 2 === 0) {
//     // console.log('hi' + n/2)
//       const m = myPow(x, n/2);
//       return m * m
//   }
//   else return x * myPow(x, n - 1);
// };

// console.log( myPow(2.00000, -2));

/*
1*0 = 1
2*2 = 2*2
2*4 = (2*2)(2*2)
2*3 = 2(2*2)
1*-2 = 1/1 = 1
-2*3 = -2(-2*-2)
*/
var pow = function(a, b) {
  let negative = b < 0 ? true: false;
  b = Math.abs(b);
  if(b == 0)
    return 1;
  else if(b == 1)
    return a;
  else if(b == 2)
    return a*a;   
    
  if(b%2 == 0)
  {
    result = pow(a, b/2) * pow(a, b/2);
  } else {
    result = a*pow(a, b-1);
  }

  if(negative) {
    return 1/result;
  } else {
    return result;
  }
}

// console.log( pow(1, 0));
// console.log( pow(2, 2));
// console.log( pow(2, 4));
// console.log( pow(2, -3));
// console.log( pow(-2, 3));

// [-2, -3, 4, -1, -2, 1, 5, -3]

var MaxSumSubarray = function(arr){
  let Ms= arr[0];
  let Rs= arr[0];
  if(arr.length == 0)
    return 0;

  for(i = 1; i < arr.length; i++) {
    
    if(arr[i] > arr[i]+Rs) {
      Rs = arr[i];
    } else {
      Rs += arr[i];
    }
    // Update max sum
    if(Rs > Ms) {
      Ms = Rs;
    }
  }
  return Ms;
}

console.log( MaxSumSubarray([-2, -3, 4, -1, -2, 1, 5, -3]));

let input = "ilikesamsung";
let dictionary = ["mobile","samsung","sam","sung","man","mango", "icecream","and","go","i","like","ice","cream"];