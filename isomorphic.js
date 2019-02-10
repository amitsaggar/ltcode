// var isIsomorphic = function(s, t) {
//   if(s.length != t.length)  return false;
//   let j = s.length;
//   let i = 0;
//   while(i < j){
//     let a = s.charCodeAt(i);
//     let b = isNaN(s.charCodeAt(i+1)) ? 0: s.charCodeAt(i+1);
//     // console.log( a + ' -- ' + b + ' - '+ i);

//     let c = t.charCodeAt(i);
//     let d = isNaN(t.charCodeAt(i+1)) ? 0 : t.charCodeAt(i+1);

//     // console.log( c + ' -- ' + d + ' - '+ i);
//     if(a < b && c < d) {
//       i++;
//     } else if(a > b && c > d) {
//       i++;    
//     } else if(a == b && c == d) {
//       i++;    
//     } else {
//       return false;
//     }
//   }
//   return true;
// };

var isIsomorphic = function(s, t) {
  var obj = {};

  for(var i = 0; i < s.length; i++){
      if(!obj['s' + s[i]]) obj['s' + s[i]] = t[i];
      if(!obj['t' + t[i]]) obj['t' + t[i]] = s[i];
      if(t[i] != obj['s' + s[i]] || s[i] != obj['t' + t[i]]) return false;
  }
  return true;
};

console.log(isIsomorphic("egg", "add"));