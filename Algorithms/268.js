/**
 * @param {number[]} nums
 * @return {number}
 */
 var missingNumber = function(nums) {
    nums = nums.sort(function(a, b) {
        return a - b;
    });
    
    if(nums[0] != 0) {
        return 0;
    } else {
        for(index = 0; index < nums.length; index++) {
            if(nums[index] != index) {
                return index;
            }
        }
        
        return nums.length;
    }
};