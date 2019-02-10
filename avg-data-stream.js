/*
  MovingAverage m = new MovingAverage(3);
  m.next(1) = 1
  m.next(10) = (1 + 10) / 2
  m.next(3) = (1 + 10 + 3) / 3
  m.next(5) = (10 + 3 + 5) / 3
*/
var MovingAverage = function(size) {
  this.size = size;
  this.arr = [];
};

MovingAverage.prototype.next = function(val) {
  this.arr.push(val);
  while (this.arr.length > this.size) this.arr.shift();
  avg = this.arr.reduce((a, b) => a + b)/ Math.min(this.size, this.arr.length);
  console.log(avg);
};

let m = new MovingAverage(3);
m.next(1);
m.next(10);
m.next(3);
m.next(5);