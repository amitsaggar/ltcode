var isValidBST = function(root, lowerBound=-Infinity, upperBound=Infinity) {
  if (root === null) {
    return true; 
  } else if (root.val <= lowerBound || root.val >= upperBound) {
    return false;
  } else {
    return isValidBST(root.left, lowerBound, root.val) && isValidBST(root.right, root.val, upperBound);
  }
};

console.log( isValidBST([5,1,4,null,null,3,6]) );