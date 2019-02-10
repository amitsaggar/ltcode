var intersection = function(nums1, nums2) {
  if(nums1.length == 0 || nums2.length == 0)
      return [];
  
  let n1 = nums1.length;
  let n2 = nums2.length;
  let temp = [];
  if(n2 < n1) {
      temp = nums1;
      nums1 = nums2;
      nums2 = temp;
  }
  let res = [];
  for(i=0; i<n1; i++) {
      if(nums2.indexOf(nums1[i]) != -1 && res.indexOf(nums1[i]) == -1) {
          res.push(nums1[i]);
      }
  }
  return res;
};

console.log(intersection([3,1,2],[1]));