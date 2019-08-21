var minMeetingRooms = function(intervals) {
    let ints = intervals.sort((a,b) => a[0] - b[0]);
    let prev = [ints[0][0], ints[0][1]];
    let rooms = 1;
    for(let i=1; i <= ints.length-1; i++) {

      if((ints[i][0] >= prev[0]) && (ints[i][0] < prev[1])) {
          rooms += 1;
          if(ints[i][1] >= prev[1])
            prev = [ints[i][0], prev[1]];           
          else 
            prev = ints[i];
      } else {
        prev = [prev[0], Math.max(prev[1], ints[i][1])];
      }
    }
    return rooms;
};

console.log(minMeetingRooms([[2,15],[36,45],[9,29],[16,23],[4,9]]));