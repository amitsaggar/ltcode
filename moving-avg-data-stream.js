/*
Given a stream of integers and a window size, calculate the moving average of all integers in the sliding window.

Example:

MovingAverage m = new MovingAverage(3);
m.next(1) = 1
m.next(10) = (1 + 10) / 2
m.next(3) = (1 + 10 + 3) / 3
m.next(5) = (10 + 3 + 5) / 3
*/
var MovingAverage = function(size) {
    this.size = size;
    this.window = [];
    this.i = -1;
    this.total = 0;
};

// Order of numbers doesn't matter since addition is commutative
// So we just need to make sure we are removing the correct item
// on each iteration.
MovingAverage.prototype.next = function(val) {
    const idx = (++this.i) % this.size;          // repeating set from 0...size-1
    this.total += val - (this.window[idx] || 0); // subtract removed item from total
    this.window[idx] = val; // insert new value into moving index
    return this.total / this.window.length;
};

var m = new MovingAverage(3);
console.log(m.next(1));
console.log(m.next(10));
console.log(m.next(3));
console.log(m.next(3));