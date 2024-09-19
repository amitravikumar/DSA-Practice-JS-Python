/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */

//The Solution is done using Hashmaps and have a Big O Nation of O(n)
var containsNearbyDuplicate = function(nums, k) {
    let hashMap = new Map();
    for(let i = 0; i < nums.length; i++){
        let prevIndiceValue = hashMap.get(nums[i])
        if(prevIndiceValue != undefined && i - prevIndiceValue <= k){
            return true;
        }
        hashMap.set(nums[i], i)
    }
    return false;
};