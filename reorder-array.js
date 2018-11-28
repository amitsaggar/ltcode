/*
# Reorder an array according to given indexes
# Given two integer arrays of same size, “arr[]” and “index[]”, reorder elements in “arr[]”
# according to given index array. It is not allowed to given array arr’s length.
#
# Example:
#
# Input:  arr[]   = [10, 11, 12];
#         index[] = [1, 0, 2];
*/

var reorder = function(arrVals, arrKeys) {
  result = [];
  for(i=0; i<arrKeys.length; i++) {
    result[arrKeys[i]] = arrVals[i];
  }
  return [Object.keys(result), Object.values(result)];
};

var result = reorder([10, 11, 12], [1, 0, 2]);
result.forEach(element => {
  console.log( element);
});

// var reorderInPlace = function(arrVals, arrKeys) {
//   var temp;
//   for(i=0; i<arrKeys.length; i++) {
//     if (arrKeys[i] !== i) {
//       temp = arrVals[i];
//       arrVals[i] = arrVals[arrKeys[i]];
//       arrVals[arrKeys[i]] = temp;
//       console.log( arrKeys[i] + ' ' + i);
//     }
//   }
//   return arrVals;
// };


// console.log(reorderInPlace([10, 11, 12], [1, 0, 2]) );