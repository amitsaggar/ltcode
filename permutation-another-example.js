function permute(nums) {
  let list = [];
  // Arrays.sort(nums); // not necessary
  backtrack(list, [], nums, []);
  return list;
}

function backtrack(list, tempList, nums, used){
  if(tempList.length == nums.length){
     list.push(tempList.slice());
  } else{
     for(let i = 0; i < nums.length; i++){ 
        if(used[i] || i > 0 && nums[i] == nums[i-1] && !used[i - 1]) continue;
        used[i] = true;
        tempList.push(nums[i]);
        backtrack(list, tempList, nums, used);
        used[i] = false; 
        tempList.pop();
     }
  }
} 

a = permute(["a", "b", "c"]);
for(let i = 0; i < a.length; i++) {
  console.log(a[i]);
}