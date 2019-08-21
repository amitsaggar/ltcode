/*
insert(val): Inserts an item val to the set if not already present.
remove(val): Removes an item val from the set if present.
getRandom: Returns a random element from current set of elements. Each element must have the same probability of being returned.

loc
{
  "b": 1,
  "c": 0
}

nums
[ "c", "b"]
******************
*/
var RandomizedSet = function() {
  this.nums = [];
  this.loc = {};
}

RandomizedSet.prototype.insert = function(val) {
  if(this.loc[val])
    return false;
  this.loc[val] = this.nums.length;
  this.nums.push(val);
  return true;
}

RandomizedSet.prototype.remove = function(val) {
  // console.log(this.loc[val]);
  if(this.loc[val] == undefined)
    return false;
  
  let loc = this.loc[val];
  if(loc < this.nums.length-1) {
        this.nums[loc] = this.nums[this.nums.length-1];
        this.loc[this.nums[this.nums.length-1]] = loc;
  }
  delete this.loc[val];
  delete this.nums[this.nums.length-1];
  return true;
}

RandomizedSet.prototype.getRandom = function() {
  return Math.floor(Math.random() * this.nums.length);    
};

RandomizedSet.prototype.print = function() {
    console.log(this.loc);
    console.log(this.nums);
};

let rd = new RandomizedSet();
rd.insert(1)
rd.insert(2);
rd.insert(3);
rd.remove(1);
console.log(rd.getRandom());
rd.print();