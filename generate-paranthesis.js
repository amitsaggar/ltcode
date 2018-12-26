function generateParenthesis(n) {
  let res = [];
  generate(n, n, '', res);
  // backtrack('', 0, 0, res, n.length);
  return res;
}

function backtrack(S, left, right, res, N) {
  if (S.length == 2 * N)
      res.push(S);
      return;
  if(left < N){
    backtrack(S+'(', left+1, right, N);
  }
  if(right < left){
    backtrack(S+')', left, right+1), N;
  }
}

function generate(l, r, s, res) { // l: left remaining, r: right remaining
  if (l > r) return;  // e.g. ))(

  if (!l && !r) return res.push(s);
  // console.log( l + ' -- ' + r + ' -- ' + s + ' ++ ' + res)
  if (l) generate(l - 1, r, s + '(', res);
  if (r) generate(l, r - 1, s + ')', res);
}


// var generateParanthesis = function(n) {
//   let ans = [];
//   if(n==0) {
//     return ans.push("");
//   } else {
//     for(c=0; c<n; ++c){
//       left = generateParanthesis(c);
//       right = generateParanthesis(n-1-c);
//       return ans.push("(" + left + ")" + right);
//     }
//   }
//   return ans;
// }

console.log(generateParenthesis(3));