var longestCommonPrefix = function(strs) {
  var res = '';
  
  if(strs.length === 0)return '';
  else if(strs.length ===1 )return strs[0];
  
  for(var i =0;i<strs[0].length;i++){
      for(var j=0;j<strs.length-1;){
          if(strs[j][i] === strs[j+1][i]){
              j++;
              if(j===strs.length-1)
                res +=strs[j][i];
          }else 
          return res
      }
  }
  return res
};

console.log(longestCommonPrefix(["here", "heare", "heryoursaw"]));