var searchInsert = function(nums, target) {
    if(nums.length == 1) {
        if(nums[0] == target || nums[0] > target) {
            return 0;
        } else {
            return 1;
        }
    }
    
    var half = nums[Math.ceil(nums.length/2)];
    var i, j;
    if(half == target) { 
        return Math.ceil(nums.length/2); 
    } else if(half > target) {
        i = 0;
        j = Math.ceil(nums.length/2);
    } else {
        i = Math.ceil(nums.length/2);
        j = nums.length;
    }
    
    while (i < j) {
        if(nums[i] == target || nums[i] > target) {
            return i;
        }
        i++;
    }
    return i;
};