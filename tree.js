/*
* Definition for a binary tree node.
* function TreeNode(val) {
*     this.val = val;
*     this.left = this.right = null;
* }
*/

function TreeNode(data) {
  this.data = data;
  this.left = null;
  this.right = null;
}

var rob = function(root) {
  if(root == null) return 0;
  let val = 0;
  if(root.left != null) {
    val += rob(root.left.left) + rob(root.left.right);
  }
  if(root.right != null) {
    val += rob(root.right.left) + rob(root.right.right);
  }  
  return Math.max(root.val + val, rob(root.left)+rob(root.right));
};