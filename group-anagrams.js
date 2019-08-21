/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(stringArr) {
  let result = new Array();
  let map = new Map();
  for(let i=0; i<stringArr.length; i++) {
      let str = stringArr[i].split("").sort().join("");
      if(!map.hasOwnProperty(str)) {
          map.set(str, []);
      }
      map.get(str).push(stringArr[i]);
      // console.log(map.get(str));
  }
  // console.log(map.values());
  for (var value of map.values()) {
    result.push(value);
  }
  return result;
}
let r = groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);

for (let i =0; i < r.length; i++) {
  console.log(r[i]);
}