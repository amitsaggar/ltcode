// [3,9,20,null,null,15,7],
var levelOrder = function(root) {
  let res = [];
  function bTree(res, root, height) {
    if (root == null) return;
    if (height >= res.length) {
        res.push([]);
    }
    res[height].push(root.val);
    bTree(res, root.left, height+1);
    bTree(res, root.right, height+1);
  }

  bTree(res, root, 0);
  return res;
};

console.log(levelOrder([3,9,20,null,null,15,7]));
