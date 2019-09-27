/* 
Given a pattern and a string input - find if the string follows the same pattern and return true or false.

Examples:

Pattern : "abab", input: "redblueredblue" should return true.
Pattern: "aaaa", input: "asdasdasdasd" should return true.
Pattern: "aabb", input: "xyzabcxzyabc" should return false.
*/
var wordPattern = function(pattern, str) {    
  let word_list = str.split("");
  let pattern_list = pattern.split("");

  let w2p = {};
  let p2w = {};
  for(let i=0; i < word_list.length; i++) {
      let w = word_list[i]
      let p = pattern_list[i]
      if (w2p[w] && p2w[p]) {
          if (w2p[w] != p || p2w[p] != w)
              return false;
      }
      else if (w2p[w] || p2w[p])
          return false;
      else {
          p2w[p] = w
          w2p[w] = p
      }
  console.log('w2p ', w2p)
  console.log('p2w ', p2w);
  }
  return true;
}

console.log(wordPattern("abab", "redblueredblue"))