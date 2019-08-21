var numIslands = function(grid) {
  const r = grid.length;
  const c = grid[0].length;
  let count = 0;
  
  for(let i = 0; i <  r; i++) {
      for(let j = 0; j <  c; j++) {
          if(grid[i][j] === "1") {
              count +=1;            
              dfs(i, j);
          }
      }
  }
  return count;
  
  function dfs(i, j) {
      if(i < 0 || 
         i >= r || 
         j < 0 || 
         j >= c ) {
          return;
      }
      if( grid[i][j] == '0')
        return;
      
      grid[i][j] = '0';

      dfs(i+1, j);
      dfs(i-1, j);
      dfs(i, j+1);
      dfs(i, j-1);
  }
};

console.log(numIslands([["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]));