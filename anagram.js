var groupAnagrams = function(input){
  result = [];
  visited = [];
  for(i=0; i<input.length; i++) {
    if (visited.indexOf(input[i]) > 0 ){
      continue;
    }
    perms = permute(input[i]);
    visited = visited.concat(perms);
    result[i] = perms.filter(value => -1 !== input.indexOf(value));
    perms = "";
  }
  return result;
};

function permute(numstr) {
  let res = [];
  nums = numstr.split("");
  permutation(nums,0,nums.length-1,res);
  return res;
};

function permutation(arr,pos,n,res){
  if(pos === n){
      res.push(arr.join(""));
  }else{
    for(let x = pos; x <= n;x++){
      swap(arr,pos,x);
      permutation(arr,pos+1,n,res);
      swap(arr,pos,x);
    }
  }
}

function swap(arr,index1,index2){
  let temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}

console.log(anagram(["eat", "tea", "tan", "ate", "nat", "bat"]));