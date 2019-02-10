var TwoSum = function() {
  this.nums = [];
  this.lookup = {};
};

/**
* Add the number to an internal data structure.. 
* @param {number} number
* @return {void}
*/
TwoSum.prototype.add = function(number) {
  this.nums.push(number);
  if(this.lookup[number] != undefined)
      this.lookup[number] += 1;
  else {
      this.lookup[number] = 1;
  }
  console.log(this.nums);
  console.log(this.lookup);
};

/**
* Find if there exists any pair of numbers which sum is equal to the value. 
* @param {number} value
* @return {boolean}
*/
TwoSum.prototype.find = function(value) {
  const n = this.nums.length;
  for(i=0; i<n; i++) {
      if(this.lookup[value - this.nums[i]] != undefined) {
          return true;
      }
  }
  return false;
};

ts = new TwoSum();
ts.add(0);
ts.add(0);
console.log(ts.find(0));