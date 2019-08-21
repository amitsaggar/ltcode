var findAnagrams = function(s, p) {
  if(s.length == 0 || p.length == 0)
    return;
  
  let lookup = {}, result = [];
  let len = Number.MAX_VALUE;

  for(let i=0; i < p.length; i++) {
    if(lookup.hasOwnProperty(p.charAt(i))) {
      lookup[p.charAt(i)] =  lookup[p.charAt(i)]+1;
    } else {
      lookup[p.charAt(i)] =  1;
    }
  }

  let counter = Object.keys(lookup).length;
  let begin = 0, end = 0,  head = 0;

  while(end < s.length){
    let c = s.charAt(end);
    if( lookup.hasOwnProperty(c) ) {
        lookup[c] -= 1;
        if(lookup[c] == 0) counter--;
    }
    end++;
    while(counter == 0){
      let beginc = s.charAt(begin);
      if( lookup.hasOwnProperty(beginc) ) {
          lookup[beginc] += 1;
          if(lookup[beginc] > 0) 
            counter++;
      }
      if(end - begin == p.length) {
        result.push(begin);
      }
      begin++;
    }

  }

  return result;
};

console.log(findAnagrams("abab", "ab"));