function subsets(nums) {
  let list = new Array();
  nums.sort();
  backtrack(list, [], nums, 0);

  return list;
}

function backtrack(list , tempList, nums, start){
  list.push(tempList.slice());
  for(let i = start; i < nums.length; i++){
      if(i > start && nums[i] == nums[i-1]) continue; // skip duplicates
      tempList.push(nums[i]);
      backtrack(list, tempList, nums, i + 1);
      tempList.pop();
  }
}

result = subsets([1,2,3]);

result.forEach(function(element) {
  console.log(element);
});