var climbStairs = function(n) {
  if(n === 0)  return 0
  if(n === 1)  return 1
  if(n === 2)  return 2
  
  var arr = [1,2];
  for(let i = 2; i < n; i++) {
      arr[i] = arr[i-1] + arr[i-2]
  }
  return arr[n-1]
  };
  
  console.log( climbStairs(5) );