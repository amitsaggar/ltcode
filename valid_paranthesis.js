var isValid = function(s) {
    let l = s.length;
    if(l%2 !== 0){
        return false;
    }
    let lookup = {
      "{": "}",
      "(": ")",
      "[": "]" 
    };
    let result = [];
    for(i=0,j=1; j<=l; i++,j++){
        key = s.substring(i,j);
        len = result.length;
        
        if(lookup[key] !== undefined) {
            result.push(key);
        } else if(lookup[key] == undefined && lookup[result[len-1]] == key ) {
            result.pop();
        }
    }
      return result.length == 0;
  };

var s = "{}";
console.log(isValid(s));