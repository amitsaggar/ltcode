/*
Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
Output:
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]

*/
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(input){
  result = [];
  visited = [];
  for(i=0; i<input.length; i++) {
    if (visited.indexOf(input[i]) > 0 ){
      continue;
    }
    perms = permute(input[i]);
    console.log( perms );
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
// e a t
// eat aet eta tae tae tea
function permutation(arr,pos,n,res){
  console.log(pos +' - '+ n + " - " + arr);
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

console.log( groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]) );