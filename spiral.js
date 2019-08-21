/**
 * Problem we were working on -- 
 * Issue in the code we were working on - we only had 9 chances , 9 loops in case of (3*3). 
 * first one the (r,c) is becoming (0,0). Hence its not going further and outer loop also exists and it never went inside. 
 * I am still solving the problem, and will very soon resolve it.
*/ 
var fillMatrix = function(n) {

  if(n == 0) {
      return [];
  }

  let matrix = new Array(n).fill(0);

  for(let i=0; i<n; i++) {
      matrix[i] = new Array(n).fill(0);
  }


  let dirs = [ [0,1], [1,0], [0,-1], [-1,0] ];
  let length = matrix.length * matrix[0].length;
  let r = 0;
  let c = 0;
  let d = 0;
  let num = 1;

  while(num <= length) {
      for(let i = 0; i < n ; i++, num++) {
          // console.log(r+','+c + ', n:'+n +', d:'+d);
          matrix[r][c] = num;
          r += dirs[d][0];
          c += dirs[d][1];
      }
      // console.log('end of loop');
      r -= dirs[d][0];
      c -= dirs[d][1];
      d = (d + 1) % 4;
      if(d % 2 != 0) {
          n = n-1;
      }
      r += dirs[d][0];
      c += dirs[d][1];

  }

  return matrix;
};

fillMatrix(2).forEach((ele) => console.log(ele));
fillMatrix(3).forEach((ele) => console.log(ele));
fillMatrix(4).forEach((ele) => console.log(ele));

/**
 * 
 * New solution which is much simpler. 
 * I wish i had tried it first time.
 */
var fillMatrixSimplified = function(n) {
  if(n == 0) {
    return [];
  }
  let matrix = new Array(n).fill(0);
  for(let i=0; i<n; i++) {
    matrix[i] = new Array(n).fill(0);
  }
  
  let r = matrix[0].length
  let c = matrix.length - 1
  let count = 0;
  let [x, y] = [ -1, 0];
  let num = 1;
  
  while(r > 0 && c >= 0) {

      for (let i = 0; i < r; i++) {
          if (count%2) x -= 1; 
          else x += 1;
          matrix[y][x] = num;
          num++;
      }

      for (let j = 0; j <c; j ++) {
          if (count%2) y -= 1; 
          else y += 1;
          matrix[y][x] = num;
          num++;
      }

      count +=1;
      r--;
      c--;
  }
  return matrix;
};

// fillMatrixSimplified(2).forEach((ele) => console.log(ele));
// fillMatrixSimplified(3).forEach((ele) => console.log(ele));
// fillMatrixSimplified(4).forEach((ele) => console.log(ele));