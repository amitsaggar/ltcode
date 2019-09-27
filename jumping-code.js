var jumpingCode = function(n) {
  let queue = new Array();
  for (let i = 1; i <= 9; i++) {
      queue.push(i);
      // console.log('i ' + i);
      while (!queue.length == 0) {
          let temp = queue.shift();
          if (temp > n) continue;
          console.log(temp + " ");
          let leftMost = temp % 10;
          // console.log('leftMost ' + leftMost);
          // console.log('push1 ' + (temp * 10 + (leftMost - 1)));
          // console.log('push2 ' + (temp * 10 + (leftMost + 1)));
          if (leftMost > 0) queue.push(temp * 10 + (leftMost - 1));
          if (leftMost < 9) queue.push(temp * 10 + (leftMost + 1));
      }
  }
};

// console.log(jumpingCode(10));

var num1 = 931151403;
var getCode = function() {
  //console.log('num', num1);
  var str = "123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let num = 6;
  let result = Array();
  if(num == 0) {
    return "0";
  }
  while(num > 0) {
      let randVal = Math.floor(Math.random() * 61);
      let ch = str.charAt(randVal  % 61);
     // console.log('ch: '+ch+', randVal:'+randVal);
      result.unshift(ch);

      num--;
    }
  //num1++;
  return result.join("");
}


console.log(getCode());
console.log(getCode());
console.log(getCode());
console.log(getCode());
