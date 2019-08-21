function intervalAvgs(intervals) {
  let events = [];
  intervals.forEach(intr => {
    events.push({type: 'open', x: intr[0], speed: intr[2]});
    events.push({type: 'close', x: intr[1], speed: intr[2]});
  });
  events.sort((a, b) => a.x - b.x); // ascending by x point

  // console.log(events[0], events[1], events[2], events[3]);
  let result = [];
  let prevX = events.length > 0 ? events[0].x : 0;
  let sum = 0;
  let count = 0;
  events.forEach(ev => {
    if (ev.x != prevX) {
      result.push([prevX, ev.x, sum / count]);
      prevX = ev.x;
    }
    if (ev.type == 'open') {
      sum += ev.speed;
      count++;
    } else {
      sum -= ev.speed;
      count--;
    }
  });
  return result;
}

let sample = [
  [0, 14, 90],
  [3, 15, 80]
];
console.log(JSON.stringify(intervalAvgs(sample))); // [[0,3,90],[3,14,85],[14,15,80]]
let sample2 = [
  [0, 10, 100],
  [4, 6, 20]
];
console.log(JSON.stringify(intervalAvgs(sample2))); // [[0,4,100],[4,6,60],[6,10,100]]