var convertBST = function(root) {
  let sum = 0;
  const convertRec = node => {
      if(!node) return null;
      convertRec(node.right);
      sum = node.val += sum;
      convertRec(node.left);
  };
  convertRec(root);

  return root;
};