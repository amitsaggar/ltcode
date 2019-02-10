var combinationSum = function(candidates, target) {
  if (!candidates || !candidates.length) {
      return []; 
  }   

  let result = []; 

  function dfs(candidates, tmpArr, remain, start) {
      if (remain < 0) {
          return;
      } else if (remain == 0) {
          result.push(tmpArr.slice());
          return;
      } else {
          for (let i = start; i < candidates.length; i++) {
              tmpArr.push(candidates[i]);
              dfs(candidates, tmpArr, remain - candidates[i], i); 
              tmpArr.pop();
          }   
      }   
  }   

  dfs(candidates, [], target, 0); 

  return result;
};

console.log(combinationSum([2,3,6,7], 7));