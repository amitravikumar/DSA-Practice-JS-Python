/**
 * @param {number[]} nums
 * @return {boolean}
 */

//The Solution is done using Hashmaps and have a Big O Nation of O(n)
var containsDuplicate = function(nums) {
    let hashMap = new Map();
    for(let i = 0; i < nums.length; i++ ){
        if(hashMap.has(nums[i])){
            return true;
        }
        hashMap.set(nums[i], i)
    }
    return false;
};