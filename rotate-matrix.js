/*
You are given an n x n 2D matrix representing an image.

Rotate the image by 90 degrees (clockwise).

Note:

You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

Example 1:

Given input matrix = 
[
  [1,2,3],
  [4,5,6],
  [7,8,9]
],

rotate the input matrix in-place such that it becomes:
[
  [7,4,1],
  [8,5,2],
  [9,6,3]
]
*/

var rotateMatrix = function(matrix) {
  let n = matrix.length;

  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      let tmp = matrix[j][i];
      matrix[j][i] = matrix[i][j];
      matrix[i][j] = tmp;
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n / 2; j++) {
      // console.log(i + ' -- ' + j);
      // console.log(i + ' -- ' + parseInt(n - j - 1));      
      let tmp = matrix[i][j];
      matrix[i][j] = matrix[i][n - j - 1];
      matrix[i][n - j - 1] = tmp;
    }
  }

  matrix.forEach( (element) => {
    console.log( element );
  });
};

rotateMatrix([
  [1,2,3],
  [4,5,6],
  [7,8,9]
]);