var canReorderDoubled = function(A) {
  let lookup = {};
  let result = [];

  function allTrue(obj)
  {
    for(var o in obj)
        if(obj[o]!= 0) return false;
    return true;
  }

  for(i=0; i<=A.length-1; i++) {
    if(lookup[A[i]] != null) {
      lookup[A[i]] += 1;
    } else {
      lookup[A[i]] = 1;
    }
  }
  // A = A.sort(function(a, b){return a - b});
  for(i=0; i<=A.length-1; i++) {
    let ele = A[i];
    if (lookup[ele] == 0) continue;
    
    double = ele*2;
    found = false;
    if (double != null && lookup[double] != null && lookup[double] != 0) {
      lookup[double] -= 1;
      found = true;
    }
    if(found) {
      if(lookup[ele] != 0) {
        lookup[ele] -= 1;
      }
    }
  }
  return allTrue(lookup);
};

console.log(canReorderDoubled([1,2,4,16,8,4]));