var searchMatrix = function(matrix, target) {
  if(matrix == null || matrix.length < 1 || matrix[0].length <1) {
      return false;
  }
  let col = matrix[0].length-1;
  let row = 0;
  while(col >= 0 && row <= matrix.length-1) {
      if(target == matrix[row][col]) {
          return true;
      } else if(target < matrix[row][col]) {
          col--;
      } else if(target > matrix[row][col]) {
          row++;
      }
  }
  return false;
}

console.log( searchMatrix ([
  [1,   4,  7, 11, 15],
  [2,   5,  8, 12, 19],
  [3,   6,  9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
], 20) );