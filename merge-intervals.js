// function merge(intervals) {
//   let interval = intervals.sort((a,b) => a[0] != b[0]? a[0] - b[0]: a[1] - b[1]);
//   let result = [];
//   for(i=0; i<interval.length-1; i++) {
//     let idea = interval[i];
//     // console.log(interval[i+1]);
//     if(interval[i+1][0] < interval[i][1]) {
//       idea[1] = interval[i+1][1];
//       result.push(idea);
//     } else {
//       result.push(interval[i+1]);
//     }
//   }
//   return result;
//   result.forEach((element) => console.log(element));
// }

function merge(intervals) {
  if (intervals.length == 0) return [];
  if (intervals.length == 1) return intervals;
  intervals.sort((a, b) => a[0] !== b[0] ? a[0] - b[0] : a[1] - b[1]);
  let res = [];
  let prev = intervals[0];
  for (let i=1; i<intervals.length; i++) {
    let curr = intervals[i];
    if (curr[0] <= prev[1]) {
      prev[1] = Math.max(prev[1], curr[1]);
      res.push(prev);
      prev = curr;      
    } else {
      res.push(curr);
    }
  }
  // return res;
  res.forEach((element) => console.log(element));
}



function merge(intervals) {
  if (!intervals.length) return intervals
  intervals.sort((a, b) =>  a[0] != b[0] ? a[0] - b[0] : a[1] - b[1]);
  let start = intervals[0][0];
  let end = intervals[0][1];
  let result = [];
  for(let i=1; i<intervals.length; i++) {
    curr = intervals[i];
    if(end >= curr[0]) {
      end = Math.max(end, curr[1]);
    } else{
      result.push([start, end]);
      start = curr[0];
      end = curr[1];      
    }
  }
  result.push([start, end]);  
  return result;
}

console.log(merge([[1,3],[2,6],[8,10],[15,18]]));
