/* Quick Sort */

var quickSort = function(list) {
  if(list.length === 0){
    return [];
  }
  var length = list.length;
  var min = list[0];
  var max = list[0];

  list.forEach((currentVal) => {
  	if (currentVal < min) {
  		min = currentVal;
  	} else if (currentVal > max) {
  		max = currentVal;
    }
  });
  
  var pivot = list[0]; //Math.round((max - min) / 2);

  // console.log( 'pivot ' + pivot + ' min: ' + min + ' max: ' + max);
  var leftArr = [], rightArr = [];
  for(var i = 1; i < list.length; i++){
    if(list[i] < pivot){
      leftArr.push(list[i]);
    }else { rightArr.push(list[i]) } 
  }

  return quickSort(leftArr).concat(pivot, quickSort(rightArr));
};

console.log(quickSort([15,3,9,8,5,2,7,1,6]));