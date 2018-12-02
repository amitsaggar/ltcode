/*
Given a binary tree, find its maximum depth.

The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

Note: A leaf is a node with no children.

Example:

Given binary tree [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
return its depth = 3.
*/

var maxDepth = function(root, level = 1) {
  return !root ? level - 1 : Math.max(level, maxDepth(root.left, level + 1), maxDepth(root.right, level + 1));
};

var maxDepth = function(root) {
  const depths = []; 
  (function DFS(root, depth) {
      if(root === null) {    
          depths.push(depth);
          return;
      }
      depth += 1;
      DFS(root.left, depth);
      DFS(root.right, depth);
  })(root, 0);
  return Math.max(...depths);
};