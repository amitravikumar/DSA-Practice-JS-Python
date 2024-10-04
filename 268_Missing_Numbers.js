/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    nums = nums.sort((a,b) => {
        return a-b;
    });
    let highestValue = nums[nums.length-1];
    for(let i = 0; i < highestValue; i++){
        if(nums[i] !== i ){
            return i;
        }
    }
    if(nums.length + 1 != highestValue){
        return highestValue + 1;
    }
};