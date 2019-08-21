function x(num1, num2) {
  if (num1 && num2) {
      return num1 + num2; 
  } else {
    return function(num3) {
      return num1 + num3;
    }
  }
}

console.log( x(1,2) );
console.log( x(2)(3) );