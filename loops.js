var loops = function(m , n) {
  /*****
   * 
   * *
   * * *
   *****/
  a = new Array(m);
  for (i = 0; i < m; i++) {
    a[i] = new Array(n);
    for (j = 0; j <= i; j++) {
      a[i][j] = "*";
    }
    console.log( a[i] );
  }

  /*****
   * * *
   * *
   *
   *****/  
  b = new Array(m);
  for (k = 0; k < m; k++) {
    b[k] = new Array(n);
    for (l = 0; l <= n-k-1; l++) {
      b[k][l] = "*";
    }
    console.log( b[k] );
  }  

  /*****
   * * *
     * *
       *
   *****/  
  c = new Array(m);
  for (p = 0; p < m; p++) {
    c[p] = new Array(n);
    for (q = p; q < n; q++) {
      c[p][q] = "*";
    }
    console.log( c[p] );
  }    
}

loops(3,3);