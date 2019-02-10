var TraverseDFS = function(node, callback) {
  if(callback)
    return callback(node);
  for(i=0; i<node.children.length; i++) {
    TraverseDFS(node.children[i], callback);
  }
}

traverseDFS(root, function(node) { console.log(node.val); });

