var findLeaves = function(root) {
  let ans = [];
  
  let populateLeaves = (root) => {
      if (root == null)
          return 0;
      let leftDepth = populateLeaves(root.left);
      let rightDepth = populateLeaves(root.right);
      let d = Math.max(leftDepth, rightDepth);
      ans[d] = ans[d] || [];
      ans[d].push(root.val);
      return d + 1;
  }
  populateLeaves(root);
  return ans;
};

console.log(findLeaves([1,2,3,4,5]));