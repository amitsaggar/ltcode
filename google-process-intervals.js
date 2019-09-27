/*
Input: [[1, 150, 300], [2, 100, 200], [3, 300, 350]]

[
  [2, 100, 200],
  [1, 150, 300], 
  [3, 300, 350]
]

2: 50
1: 100
3: 50

  [2, 100, 200]
  [1, 150, 300], 
  [3, 300, 350]

  2, 150-100,
  [1, 200, 300]

  */

var googleProcesses = function(intervals) {
  if (!intervals.length) return intervals;
  intervals.sort((a, b) =>  a[1] - b[1]);
  let result = [];

  let id = intervals[0][0];
  let start = intervals[0][1];
  let end = intervals[0][2];

  for(let i=1; i<intervals.length; i++) {
    curr = intervals[i];
    if(end >= curr[1]) {
      result.push([id, curr[1] - start]);
      id = curr[0];
      start = end;
      end = curr[2];
      // end = Math.max(end, curr[2]);
    } else{
      result.push([id, end-start]);
      id = curr[0];
      start = curr[1];
      end = curr[2];      
    }
  }
  result.push([id, end - start]);
  return result;
}

let result = googleProcesses([[1, 150, 300], [2, 100, 200], [3, 300, 350]]);
result.forEach(element => {
  console.log(element);
});