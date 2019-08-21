var maximalRectangle = function(matrix) {
  let rows = matrix.length;
  let cols = matrix[0].length;
  if( rows == 0 && cols == 0)
    return 0;
  let maxArea = Number.MIN_VALUE;
  let stack = matrix[0];
  
  for(let i=0; i<rows; i++) {
    if(i != 0)
      stack = overLap(stack, matrix[i]);
    maxArea = Math.max(maxArea, maxHistogram(stack));
  }

  return maxArea;

  function overLap(p, q) {
    let r = []
    for(let i=0; i<p.length; i++) {
      r[i] = (q[i] == 0) ? 0 : p[i] + q[i];
    }
    return r;
  }

  function maxHistogram(row = []) {
    let n = row.length;
    let stack = new Array(n);
    stack.push(-1);
    let maxArea = 0;
    for(let i=0; i<n; i++) {
      while(stack.peek() != -1 && row[stack.peek()] >= row[i] )
      {
        maxArea = Math.max(maxArea, 
          row[stack.pop()] * (i - row[stack.peek()] -1 )
        );
        stack.push(i);
      }
      while(stack.peek() != -1) {
        maxArea = Math.max(maxArea, 
          row[stack.pop()] * (i - row.length -1 )
        );
      }
    }
    return maxArea;
  }
};