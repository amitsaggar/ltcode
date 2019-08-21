var minMeetingRooms = function(intervals) {
  let ints = intervals.sort((a,b) => a[0] != b[0] ? a[0] - b[0] : a[1] - b[1]);
  let rooms = 1;
  for(let i=0; i < ints.length-1; i++) {
      let prev = ints[i];
      let curr = ints[i+1];
      
      if(prev[1] > curr[0] && prev[1] > curr[1]) {
          rooms++;
      }
  }
  return rooms;
};

console.log(minMeetingRooms([[0, 30],[5, 10],[15, 20]]));