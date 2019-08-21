var findDuplicate = function(nums){
  let hare;
  let tortoise;
  hare = nums[0];
  tortoise = nums[0];

  do {
    tortoise = nums[tortoise];
    hare = nums[nums[hare]];
  } while(hare != tortoise)

  let ptr1, ptr2;
  ptr1 = nums[0];
  ptr2 = tortoise;

  while(ptr1 != ptr2) {
    ptr1 = nums[ptr1];
    ptr2 = nums[ptr2]; 
  }

  return ptr1;
}

console.log(findDuplicate([1,3,4,2,2]));