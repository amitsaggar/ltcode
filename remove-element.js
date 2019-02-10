var removeElement = function(nums, val) {
    let i = 0;
    let n = nums.length;
    while (i < n) {
        if (nums[i] == val) {
            nums[i] = nums[n - 1];
            // reduce array size by one
            n--;
            console.log( nums );
        } else {
            i++;
        }
    }
    return n;
}

console.log( removeElement([3,2,2,3], 3) );