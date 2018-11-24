/* 
Bucket Sort + 

Bucket sort is a distribution sort. It works by arranging elements into ‘buckets’ which are then sorted using another sort. This typically utilizes insertion sort then merged into a sorted list.

Bucket sort is at its best when it can distribute elements evenly throughout the buckets. If values are sparsely allocated, a larger bucket size is more optimal because the values can be separated more evenly. The opposite is also true where a densely allocated array would perform better with a smaller bucket size.

Bucket sort performs at its worst, quadratic — O(n²), when all elements are distributed to the same bucket. The average case, which is likely the case if you have an idea of input size and distribution, is O(n + k).

Bucket sort could be made to work with large bucket sizes by using insertion sort on small buckets, and merge or quicksort on large buckets.

Import some type of insertion sort to use in bucket sort function
Create bucketSort function (array, bucket size)
  Create vars for i, min, max, and bucket size
  Find min and max value
  Create number of buckets
  Push values to correct buckets 
  Sort buckets


Bubble Sort	Best:Ω(n)	Worst: O(n^2)
Insertion Sort	Best: Ω(n)	Worst: O(n^2)
*/

function insertionSort(array) {
  var length = array.length;
  
  for(i=1; i<length; i++) {
    temp = array[i];
    for(j=i-1; j > -1, array[j] > temp; j--) {
      array[j+1] = array[j];
    }
    array[j+1] = temp;
  }
  return array;
}

// Implement bucket sort
function bucketSort(array, bucketSize) {
  if (array.length === 0) {
    return array;
  }

  // Declaring vars
  var i,
      minValue = array[0],
      maxValue = array[0],
      bucketSize = bucketSize || 5;
  
  // Setting min and max values
  array.forEach(function (currentVal) {
  	if (currentVal < minValue) {
  		minValue = currentVal;
  	} else if (currentVal > maxValue) {
  		maxValue = currentVal;
  	}
  })

  // Initializing buckets
  var bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
  var allBuckets = new Array(bucketCount);
  
  for (i = 0; i < allBuckets.length; i++) {
    allBuckets[i] = [];
  }
  
  // Pushing values to buckets
  array.forEach(function (currentVal) {
  	allBuckets[Math.floor((currentVal - minValue) / bucketSize)].push(currentVal);
  });

  // Sorting buckets
  array.length = 0;
  
  allBuckets.forEach(function(bucket) {
  	insertionSort(bucket);
  	bucket.forEach(function (element) {
  		array.push(element)
  	});
  });

  return array;
}

console.log( bucketSort([7, 2, 3, 8, 6, 3]) );