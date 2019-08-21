var trap = function(A) {
    let left = 0;
    let right = A.length - 1;
    let result = 0;
    let maxLeft = 0;
    let maxRight = 0;

    while(left < right) {
        if(A[left] <= A[right]) {
            if(A[left] > maxLeft)
                maxLeft = A[left];
            else 
                result += maxLeft - A[left];
            left++;
        } else {
            if(A[right] > maxRight)
                maxRight = A[right];
            else 
                result += maxRight - A[right];
            right--;
        }
    }
    return result;    
}

/*

var trap = function(A) {
  let left=0; let right=A.length-1;
  let res=0;
  let maxleft=0, maxright=0;
  while(left<=right){
      if(A[left]<=A[right]){
          if(A[left]>=maxleft) maxleft=A[left];
          else res+=maxleft-A[left];
          left++;
      }
      else{
          if(A[right]>=maxright) maxright= A[right];
          else res+=maxright-A[right];
          right--;
      }
  }
  return res;
};
*/
console.log( trap([0,1,0,2,1,0,1,3,2,1,2,1]) );