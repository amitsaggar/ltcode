/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

var sumNumbers = function(root) {
	return sum(root, 0);
}

var sum = function(n, s){  
	if (n == null) return 0;
  if (n.right == null && n.left == null) return s*10 + n.val;
	return sum(n.left, s*10 + n.val) + sum(n.right, s*10 + n.val);
}

console.log(sumNumbers([4,9,0,5,1]));