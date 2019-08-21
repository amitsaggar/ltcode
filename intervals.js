function merge(intervals) {
  if (!intervals.length) return intervals;
  intervals.sort((a, b) => a[0] !== b[0] ? a[0] - b[0] : a[1] - b[1]);
  let res = [];
  for (let i=0; i<intervals.length-1; i++) {
    let prev = intervals[i];
    let curr = intervals[i+1];
    if (curr[0] <= prev[1]) {
      prev[1] = Math.max(prev[1], curr[1]);
      res.push(prev);
    } else {
      res.push(curr);
    }
  }
  return res
}

// var merge = function(intervals) {
//   let inte = intervals.sort((a,b) => a[0] != b[0] ? a[0]-b[0] : a[1]-b[1]);
//   let result = [];
//   for(let i = 0; i < inte.length-1; i++) {
//     let prev = inte[i];
//     let curr = inte[i+1];
//     if (curr[0] <= prev[1]) {
//       prev[1] = Math.max(prev[1], curr[1]);
//       result.push(prev);
//     } else {
//       result.push(curr);
//     }
//   }
//   return result;
// };

a = merge([[1,3],[2,6],[8,10],[15,18]]);


a.forEach(element => {
  console.log( element[0] + ' - ' + element[1]);
});
// console.log(merge([[1,3],[2,6],[8,10],[15,18]]));