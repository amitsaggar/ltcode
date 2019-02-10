

A = [8,9,9]

var plusone = function(A) {
  let carry = 0, sum = [], length = A.length;
  let last = A[length-1];
  for(i=length-1; i>=0; i--) {
    num = A[i] + carry;
    if(i == length-1 ) {
      num += 1;
    }
    if(num > 9) {
      carry= (num) / 10;
      num = num % 10;
    } 
    sum.push(num);
  }
  console.log(sum.reverse());
}

plusone(A);
