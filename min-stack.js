var MinStack = function() {
  this.values = [];
  this.minValue;
};

/**
* @param {number} x
* @returns {void}
*/
MinStack.prototype.push = function(x) {
  this.values.push([x,this.minValue]);
  
  if(this.values.length === 1)
      this.minValue = x;
  else if(x < this.minValue)
      this.minValue = x;
};

/**
* @returns {void}
*/
MinStack.prototype.pop = function() {
  var items = this.values.pop();
  this.minValue = items[1];
};

/**
* @returns {number}
*/
MinStack.prototype.top = function() {
  return this.values[this.values.length - 1][0];
};

/**
* @returns {number}
*/
MinStack.prototype.getMin = function() {
  return this.minValue;
};