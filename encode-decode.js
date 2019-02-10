const encode = function(strs){
  return strs.reduce((res, str)=>{ return res += (str.length+"/"+str)}, "")
}

const decode = function(string){
  const res = []
  while(string != ""){
    let e = string.search("/"), len = +string.substring(0,e)
    res.push(string.substring(e+1, e+len+1))
    string = string.slice(e+len+1)
  }
  return res
}

/**
 * Encodes a list of strings to a single string.
 *
 * @param {string[]} strs
 * @return {string}
 */
var encode = function(strs) {
  let strArray = strs.split("");
  let ascii = [];
  strArray.forEach(element => {
    ascii.push(element.charCodeAt(0));
  });
  return ascii;
};

/**
 * Decodes a single string to a list of strings.
 *
 * @param {string} s
 * @return {string[]}
 */
var decode = function(s) {
  let str = "";
  s.forEach(element => {
    str += String.fromCharCode(element);
  });
  return str;    
};

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */
console.log(decode(encode("encode")));
