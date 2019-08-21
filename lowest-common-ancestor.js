
var LCA = function(node, A, B) {
  if(node == null)
    return;
  
  if(node.val == A || node.val == B)
    return node
  
  let left = LCA(node.left, A, B);
  let right = LCA(node.left, A, B);

  if(left.val != null && right.val != null)  
    return curr;

  if(left == null)
    return right;
  else
    return left;
  };

  1,2,3,4
  