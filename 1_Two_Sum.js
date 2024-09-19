/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

//Brute Force Method For Two Sum
//Big O Notation - n^2 - Since we are iterating towards each and every single element, its becoming n * n
var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i ++){
        for(let j = i + 1; j < nums.length; j++){
            if(nums[i] + nums[j] == target){
                return [i,j]
            }
        }
    }
};


//Hashmaps
// Here the time complexity is O(N) since we store the indexes and are not iterating again and again over the same indices
var twoSum = function(nums, target) {
    const hashMap = new Map();
    for(let i = 0; i < nums.length; i++){
        let balanceValue = target - nums[i];
        if(hashMap.has(balanceValue)){
            return[i, hashMap.get(balanceValue)]
        }
        hashMap.set(nums[i], i)
    }
    return null;
}