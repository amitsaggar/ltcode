/*
Total permutations = (m+n)! / (m! * n!)
3 3
6*5*4*3*2 = 720/36 = 20
*/
var uniquePaths = function(x, y) {
  let T = [];
  for(i = 1 ; i<=x; i++) {
    T[i] = [];
    console.log(T);
    for(j = 1 ; j<=y; j++) {
      if (i == 1 || j==1)
      {
        T[i][j] = 1;
      } else {
        T[i][j] = T[i-1][j] + T[i][j-1];
      }
    }
  }

  return T[x][y];
}

console.log(uniquePaths(3,2));

