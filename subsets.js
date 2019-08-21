// nums = [1,2]
/*
var subsets = function(nums) {
  if(nums.length == 0) return [];
  let subs = new Array(2);
  var res = [];
  function helper(nums, subs, i, res) {
    if (i == nums.length) {
      subs1 = subs.filter(function (el) {
        return el != null;
      });
      res.push(subs1);
      // subs = subs1
      // console.log( subs1 );
    } else {
      subs[i] = null;
      helper(nums, subs, i+1, res);
      subs[i] = nums[i];
      helper(nums, subs, i+1, res);
    }
  }
  helper(nums, subs, 0, res);
  return res;
};
*/

function subsets(nums) {
  let list = new Array();
  nums.sort();
  backtrack(list, [], nums, 0);

  return list;
}

function backtrack(list , tempList, nums, start){
  list.push(tempList.slice());
  console.log(tempList.slice());
  for(let i = start; i < nums.length; i++){
      tempList.push(nums[i]);
      backtrack(list, tempList, nums, i + 1);
      tempList.pop();
  }
}

result = subsets([1,2,3]);

// result.forEach(function(element) {
//   console.log(element);
// });