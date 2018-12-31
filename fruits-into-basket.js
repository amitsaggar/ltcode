var totalFruit = function(tree) {
  let ans = 0, i = 0;
  let count = {};
  function size(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
  };  
  for (j = 0; j < tree.length; ++j) {
    count[tree[j]] = !count.hasOwnProperty(tree[j]) ? 1: count[tree[j]]+1;
      while (size(count) >= 3) {
          count[tree[i]] -= 1;
          if (count[tree[i]] == 0) {
              delete count[tree[i]];
          }
          i++;
      }

      ans = Math.max(ans, j - i + 1);
  }

  return ans;
}

console.log(totalFruit([1,2,3,2,2]));