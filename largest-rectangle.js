var largestRectangle = function(input) {
  if(input.length == 0 || !input) {
    return 0;
  }
  if(input.length == 1) {
    return input[0];
  }

  let stack = new Array();
  stack.push(-1);
  let maxarea = 0;
  
  for(let i=0; i<input.length; i++) {

    let height = input[i];
    while(getPeekEle(stack, input, false) != -1 && getPeekEle(stack, input, true) >= height) {
      maxarea = Math.max(input[stack.pop()] * (i - getPeekEle(stack, input, false) -1));
    }
    stack.push(i); 
  }

  while(getPeekEle(stack, input, false) != -1) {
    maxarea = Math.max(maxarea, input[stack.pop()] * (input.length - getPeekEle(stack, input, false) -1));
  }

  function getPeekEle(stack, input, flag) {
    return (flag) ? input[stack[stack.length-1]]: stack[stack.length-1];
  }

  return maxarea;
};

console.log(largestRectangle([2,1,5,6,2,3]));