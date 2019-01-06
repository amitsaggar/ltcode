// var multiply = function(num1, num2) {
//   let m = num1.length, n = num2.length;
//   let pos = [];
 
//   for(i = m - 1; i >= 0; i--) {
//       sum = 0;
//       carry = 0;
//       for(j = n - 1; j >= 0; j--) {
//           mul = (num1.charAt(i) - 0) * (num2.charAt(j) - 0); 
//           console.log( mul );
//           if(carry == 0) {
//             sum += (mul) % 10;
//           } else {
//             sum += (mul) % 10;
//             sum += carry;
//           }
//           carry = Math.floor(mul / 10);
//       }
//       // console.log(sum);
//   }  
//   // return pos.length == 0 ? "0" : pos.join("");
// }

var multiply = function(a, b) {
  const product = Array(a.length+b.length).fill(0);
  for (let i = a.length; i--; null) {
      let carry = 0;
      for (let j = b.length; j--; null) {
          product[1+i+j] += carry + a[i]*b[j];
          carry = Math.floor(product[1+i+j] / 10);
          product[1+i+j] = product[1+i+j] % 10;
      }
      product[i] += carry;
  }
  sb = product.join("").replace(/^0*(\d)/, "$1");
  return ;
}

console.log(multiply("33","22"));