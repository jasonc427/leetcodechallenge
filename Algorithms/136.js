/**
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber = function(nums) {
    nums = nums.sort(function(a, b) {
        return a - b;
    });
    
    var seed = nums[0];
    
    for(index = 1; index < nums.length; index++) {
        if(nums[index] == seed) {
            seed = nums[index+1];
            index = index+1;
        }
    }
    return seed;
};