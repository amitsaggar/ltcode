/*
a = 7 1 5 2 3 6
b = 3 8 6 20 7
*/

var intersection = function(a,b) {
  let hash = {};
  let c = a.concat(b);
  let result = [];
  for(i=0; i<c.length; i++) {
    if (hash[c[i]] != undefined) {
      hash[c[i]] += 1;
      result.push(c[i]);
     } else {
      hash[c[i]] = 1;
     } 
  }
  return result;
};

console.log(intersection([7,1,5,2,3,6], [3,8,6,20,7]));

