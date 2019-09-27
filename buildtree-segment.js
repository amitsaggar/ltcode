var buildSegmentTree = function(input) {
  if(!input || input.length == 0) {
    return [];
  }
  let tree = [];
  helper(input, 0, input.length-1, tree, 1);

  return tree;

  function helper(input, start, end, tree, treeNode) {
    if(start > end) {
      return;
    }
    if(start == end) {
      tree[treeNode] = input[start];
      return;
    }

    let mid = Math.floor((start+end)/2);
    // console.log(start, end, mid);
    helper(input, start, mid, tree, 2*treeNode);
    helper(input, mid+1, end, tree, 2*treeNode+1);
    tree[treeNode] = tree[2*treeNode] + tree[2*treeNode + 1];
    return tree;
  }
}

console.log(buildSegmentTree([1,2,3,4,5,6,7,8,9]));