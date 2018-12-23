/*
https://leetcode.com/problems/prison-cells-after-n-days/
*/
var prisonAfterNDays = function(c, N) {
  function arraysEqual(arr1, arr2) {
    if(arr1.length !== arr2.length)
        return false;
    for(var i = arr1.length; i--;) {
        if(arr1[i] !== arr2[i])
            return false;
    }
    return true;
  }
  let f_c = [], next_c = [];
  for (let cycle = 0; N-- > 0; c = next_c.slice(0), ++cycle) {
    for (let i = 0; i < 8; ++i) {
      next_c[i] = (c[i - 1] == c[i + 1] ? 1 : 0);
    }
    // console.log(c.join(""));
    if (cycle == 0) f_c = next_c.slice(0);
    else if (arraysEqual(next_c, f_c)) N %= cycle;
  }
  return c;
}

console.log(prisonAfterNDays(['0','1','0','1','1','0','0','1'],7).join(""));