class LRU {
  constructor(capacity) {
    this.capacity = capacity;
    this.map = new Map();
  }
  get(key){
    let val = this.map.get(key);
    if (typeof val === 'undefined') return -1;
    this.map.delete(key);
    this.map.set(key, val);
    return val;
  }
  put(key,val){
    if (this.map.has(key)) { this.map.delete(key) }
    this.map.set(key, val);
    let keys = this.map.keys();
    while(this.map.size > this.capacity) {
      this.map.delete(keys.next().value);
    }
  }
}

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.map = new Map();
  }

  get(key) {
    let val = this.map.get(key);
    if (typeof val === 'undefined') { return -1 }
    this.map.delete(key);
    this.map.set(key, val);
    return val;
  }

  put(key, value) {
    if (this.map.has(key)) { this.map.delete(key) }
    this.map.set(key, value);
    let keys = this.map.keys();
    while (this.map.size > this.capacity) { 
      this.map.delete(keys.next().value);
    }
  }
}

const cache = new LRUCache( 2 /* capacity */ );

cache.put(1, 1);
cache.put(2, 2);
console.log(cache.get(1));       // returns 1
cache.put(3, 3);    // evicts key 2
console.log(cache.get(2));       // returns -1 (not found)
cache.put(4, 4);    // evicts key 1
console.log(cache.get(1));       // returns -1 (not found)
console.log(cache.get(3));       // returns 3
console.log(cache.get(4));       // returns 4

class MRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.map = new Map();
  }

  get(key) {
    let val = this.map.get(key);
    if (typeof val === 'undefined') { return -1 }
    this.map.delete(key);
    this.map.set(key, val);
    return val;
  }

  put(key, value) {
    if (this.map.has(key)) { this.map.delete(key) }
    this.map.set(key, value);
    if(this.map.size > this.capacity) {
      let keys = this.map.keys();
      let start = 0;
      while (this.map.size > this.capacity) { 
        if(start < this.capacity) {
          keys.next();
          start++;          
        } else {
          this.map.delete(keys.next().value);
        }
      }
    }
  }
}

const cache1 = new MRUCache( 2 /* capacity */ );
cache1.put(1, 1);
cache1.put(2, 2);
console.log(cache1.get(1));       // returns 1
cache1.put(3, 3);    // evicts key 1
