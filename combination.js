var binomialCoefficient = function(n, k) {
  let bc = new Array(n+1);

  for(let i=0; i<n+1; i++){
    bc[i] = [];
  }

  for(let i=1; i<n; i++){
    bc[i][0] = 1;
    bc[i][i] = 1;
  }

  if(n > 0) {
    for(let i=1; i<n+1; i++){
      for(let j=1; j<i; j++){
        bc[i][j] = bc[i - 1][j - 1] + bc[i - 1][j];
      }
    }
  }

  return bc[n][k];
}

console.log(binomialCoefficient(6,4));