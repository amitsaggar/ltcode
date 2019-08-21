var uniquePathsWithObstacles = function(obstacleGrid) {

  for(i = 0 ; i<obstacleGrid.length; i++) {
    for(j = 0 ; j<obstacleGrid[0].length; j++) {        
      if ((i == 0 || j==0) && obstacleGrid[i][j] == 0)
      {
        obstacleGrid[i][j] = 1;
      } else if(obstacleGrid[i][j] == 1){
        obstacleGrid[i][j] = 0; 
      } else if(obstacleGrid[i][j] == 0) {
        obstacleGrid[i][j] = obstacleGrid[i-1][j] + obstacleGrid[i][j-1];
      }
    }
  }
  return obstacleGrid[obstacleGrid.length-1][obstacleGrid[0].length-1];
};

console.log(uniquePathsWithObstacles([[1,0]]));