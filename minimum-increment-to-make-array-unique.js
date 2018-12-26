var minIncrementForUnique = function(A) {
  let sortA = A.sort((a,b)=>{ return a-b});
  let obj = {};
  let res = [];
  let c = 0;
  for(i=0;i<=sortA.length-1;i++) {
    if(sortA[i]==sortA[i+1]){
      obj[sortA[i]] = (obj[sortA[i]]==null)? 2: obj[sortA[i]]+1;
      c +=1;
    }
    if( (sortA[i+1]-sortA[i]) > 1) {
      k= 1;
      while(c != 0) {
        ele = sortA[i] + k;
        res.push(ele);
        c -=1;
        k +=1;
      }
    }
  }
  return obj;
}

console.log( minIncrementForUnique([3,2,1,2,1,7,7]));