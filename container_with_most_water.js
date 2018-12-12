/* 
This solution is O(N^2) but we discussed O(N) as well
coming from 2 different sides in one while loop (i < j)
  similarly checking min and max.
  if min < max -> increment min else decrement max.
*/
var maxArea = function(height) {
  let max = 0;
  for(i=0; i<height.length; i++ ) {
    for(j=i+i; j<height.length; j++ ) {
      min = Math.min(height[i], height[j]);
      max = Math.max(max, Math.min(j - i));
    }
  }
  return min*max;
};

console.log( maxArea([1,8,6,2,5,4,8,3,7]) );