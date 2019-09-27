/* 


[
  [" ","#"," ","#"," ","#"," ","#"],
  ["#"," ","#"," ","#"," ","#"," "],
  [" ","#"," ","#"," ","#"," ","#"],
  ["#"," ","#"," ","#"," ","#"," "],
  [" ","#"," ","#"," ","#"," ","#"],
  ["#"," ","#"," ","#"," ","#"," "],
  [" ","#"," ","#"," ","#"," ","#"],
  ["#"," ","#"," ","#"," ","#"," "]
]

let matrix = [];
for(let i = 0; i<8; i++) {
  matrix[i] = new Array(8);
  let rowFlag = (i%2 == 0);
  for(let j = 0; j<8; j++) {
     let colFlag = (j%2 == 0);
     if(rowFlag == colFlag)
    matrix[i][j] = " ";
     else 
      matrix[i][j] = "#";
  }
}
console.log(JSON.stringify(matrix));
*/
/*
let n = 1;
var num = function(inp) {
  place();
  function place() {
    console.log(inp, n);
  }
}
console.log(num([1,2]));
*/

// function square(n) {
//   return () => n * n;
// }

// let sq1 = square(2);
// let sq2 = square(3);

// // console.log(sq1());
// // console.log(sq2());


// function multiply(n) {
//   return (num) => num * n;
// }

// let mul1 = multiply(2);
// let mul2 = multiply(3);

// console.log(mul1(2));
// console.log(mul2(3));

var repeatedNumber = function(A){
  var total = (A.length * (A.length+1))/2;
  
  for(var i=0; i<A.length; i++) {
      var idx = Math.abs(A[i]);

      if(A[idx] < 0) {
          var duplicate = Math.abs(A[i]);
          continue;
      } 
      console.log(total, A[i], A);      
      if(!Number.isNaN(A[i]))
        total -= Math.abs(A[i]);
      A[idx] = -A[idx];
  }
  return [duplicate, total];
}

console.log(repeatedNumber([3,1,2,5,3]));