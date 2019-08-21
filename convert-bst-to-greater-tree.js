var convertBST = function(root) {
  let sum = 0;
  function convertRec(val) {
    if(!val) return null;
    convertRec(val.right);
    sum = val.val += sum;
    convertRec(val.left);
  }
  convertRec(root);

  return root;
};

console.log(convertBST([5,2,13]));