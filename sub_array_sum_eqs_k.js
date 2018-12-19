var subArraySum = function(Arr, K) {
  let count = 0, Sum = 0, cumSum = {};
  for(i=0; i<Arr.length; i++) {
    Num = Arr[i];
    Sum += Num;

    if( Sum == K ) {
      count += 1;
    }

    if( cumSum[Sum - K] != null ) {
      count += cumSum[Sum - K];
    }

    if (cumSum[Sum] != null) {
      cumSum[Sum] +=1;
    } else {
      cumSum[Sum] = 1;
    }
    // console.log(Sum, K, cumSum);
  }
  
  return count;
}

console.log(subArraySum([1,2,3], 3));