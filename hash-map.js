var hash = function(key, val){
  this.key = key;
  this.val = val;
}
/**
 * Initialize your data structure here.
 */
var MyHashMap = function() {
  this.storage = [];
};

/**
 * value will always be non-negative. 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function(key, value) {
  let h = new hash(key, value);
  this.storage.push(h);
};

/**
 * Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key 
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function(key) {
  let val = -1;
  this.storage.forEach((element) => {
    if (element.key == key) {
      val = element.val;
    }
    }
  );
  return val;
};

/**
 * Removes the mapping of the specified value key if this map contains a mapping for the key 
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function(key) {
  this.storage.forEach((element,index) => {
    if (element.key == key) {
      this.storage.splice(index,1);
    }
    }
  );
  return this.storage;
};

hashMap = new MyHashMap();
hashMap.put(1, 1);          
hashMap.put(2, 2);         
console.log(hashMap.get(2));
console.log(hashMap.remove(2));
console.log(hashMap.remove(1));
/** 
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = Object.create(MyHashMap).createNew()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */