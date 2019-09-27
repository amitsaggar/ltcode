var combinationSum2 = function(candidates, target, dice) {
  candidates = candidates.sort();
  let result = [];
  let dp = new Array(dice);
  for(let i=0; i<dice; i++) {
    dp[i] = new Array(candidates.length).fill(0);
  }
  backtrack(result, [], candidates, target, dice, dp);
  return result;
  
  function backtrack(result, list, candidates, target, dice, dp) {
      if(target < 0)
          return;
      else if(target == 0 && dice == 0) {
          result.push(list.slice());
      } else {
          
          for(let i=0; i<candidates.length; i++) {
              // if(i>0 && candidates[i] == candidates[i-1]) continue;
              list.push(candidates[i]);
              backtrack(result, list, candidates, target-candidates[i], dice-1);
              list.pop();
          }
      }
  }
}

let arr = combinationSum2([1,2,3,4,5,6], 8, 3);
console.log(JSON.stringify(arr));
