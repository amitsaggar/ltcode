// LinkedList.
var LinkedList = function() {
  this.head = null;
}

LinkedList.prototype.push = function(val) {
  node = {
    value: val,
    next: null
  }
  if(this.head == null) {
    this.head = node
  } else {
    current = this.head;
    while(current.next) {
      current = current.next;
    }
    current.next = node;
  }
}
// Stack

var Stack = function() {
  this.size = 0;
  this.stack = {};
}

Stack.prototype.push = function(val) {
  this.stack[this.size] = val;
  this.size++;
}

Stack.prototype.pop = function() {
  this.size && this.size--;
  var result = this.stack[this.size];
  delete this.stack[this.size];
  return result;
}

// let s = new Stack();
// s.push('asd');
// s.push('def');
// s.push('iij');
// // s.pop();
// // console.log( s);
// console.log( s.pop() );
// console.log( s);

var Queue = function() {
  this.size = 0;
  this.queue = {};
}

Queue.prototype.push = function(val) {
  this.queue[this.size] = val;
  this.size++;
}

Queue.prototype.pop = function() {
  var result = null;
  if (this.size > 0) {
    result = this.queue[0];
    delete this.queue[0];
    this.size--;
  }
  return result;
}

let q = new Queue();
q.push('asd');
q.push('def');
q.push('iij');
console.log( q.pop() );
console.log( q.pop() );
// console.log( q.pop() );
// console.log( q.pop() );
// console.log( q.pop() );
// console.log( q.pop() );
// console.log( q.pop() );
// console.log( q.pop() );
// console.log( q.pop() );
console.log( q );