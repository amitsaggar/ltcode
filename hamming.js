var hammingDistance = function(x, y) {
    
  const binValX = x.toString(2);
  const binValY = y.toString(2);
  const binArrayX = ("00000000000000000000000000000000".substr(binValX.length) + binValX).split('');
  const binArrayY = ("00000000000000000000000000000000".substr(binValY.length) + binValY).split('');
  
  let differences = 0;
  
  for (i = 0; i < binArrayX.length; i++) {
      if (binArrayX[i] !== binArrayY[i]) {
          differences++;
      }
  }
  
  return differences;
};