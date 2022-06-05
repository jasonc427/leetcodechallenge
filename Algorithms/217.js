/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {
    let unique = [...new Set(nums)];
    if (unique.length != nums.length) {return true;} else {return false;}
};