var secondLargestNum = function(nums) {
    let largest = 0;
    let second = 0;
    let temp = null;
    
    for(i=0;i<nums.length;i++) {
        if (nums[i] > largest)  {
            temp = largest;
            largest = nums[i];
            second = temp;
        } else if(nums[i] > second) {
                temp = second;
                second = nums[i];               
        }
    }
    return second;
};

console.log( secondLargestNum([1,2,3,9,8]) );