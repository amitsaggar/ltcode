/* 
Given a collection of distinct integers, return all possible permutations.

Example:

Input: [1,2,3]
Output:
[
  [1,2,3],
  [1,3,2],
  [2,1,3],
  [2,3,1],
  [3,1,2],
  [3,2,1]
]
Javascript backtracking
*/

var permute = function(nums) {
  let res = [];
  permutation(nums,0,nums.length-1,res);
  return res;
};

function permutation(arr,pos,n,res){
  if(pos === n){
      res.push(arr.slice());
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