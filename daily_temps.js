let dailyTemperatures = function (T) {
  let len = T.length
  let result = new Array(len)
  for (let i = 0; i < len; i ++) {
    result [i] = 0
  }
  let stack = []
  for (let i = 0; i < len; i ++) {
    let top = getStackTop(stack)
    console.log( top );
    if (top === null || T[top] >= T[i] ) {
      stack.push(i)
    } else {
      while(stack.length > 0 && T[top] < T[i]) {
        result[top] = i - top
        stack.pop()
        top = getStackTop(stack)
      }
      stack.push(i)
    }
    console.log( stack );
  }
  return result
}
let getStackTop = function (stack) {
  if (stack.length > 0) {
    return stack[stack.length - 1]
  } else {
    return null
  }
}
let T = [73, 74, 75, 71, 69, 72, 76, 73]
console.log(dailyTemperatures(T))