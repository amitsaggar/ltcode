function merge(intervals) {
  let interval = intervals.sort((a,b) => a[0] != b[0]? a[0] - b[0]: a[1] - b[1]);
  let result = [];
  for(i=0; i<interval.length-1; i++) {
    let idea = interval[i];
    // console.log(interval[i+1]);
    if(interval[i+1][0] < interval[i][1]) {
      idea[1] = interval[i+1][1];
      result.push(idea);
    } else {
      result.push(interval[i+1]);
    }
  }
  return result;
  // result.forEach((element) => console.log(element));
}

merge([[1,3],[2,6],[8,10],[15,18]]);
