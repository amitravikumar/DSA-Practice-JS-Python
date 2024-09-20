/*
Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 

Example 1:

Input: nums = [3,2,3]
Output: 3
Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2
 

Constraints:

n == nums.length
1 <= n <= 5 * 104
-109 <= nums[i] <= 109

*/

/**
 * @param {number[]} nums   
 * @return {number}
 */

//Code is done using Hashmaps to remember the key and maintain count. The time complexity for this code is o(n) and space complexity is o(n)
var majorityElement = function(nums) {
    let hashMap = new Map();
    for(let item of nums){
        hashMap.set(item, (hashMap.get(item) || 0) + 1)
    }

    let maxCount = 0;
    let majorityElementValue = null;
    for(let [key, value] of hashMap){
        if(value > maxCount){
            maxCount = value;
            majorityElementValue = key;
        }
    }
    return majorityElementValue;
};