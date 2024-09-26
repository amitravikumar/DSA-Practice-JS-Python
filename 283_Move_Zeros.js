/*
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

 

Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
Example 2:

Input: nums = [0]
Output: [0]
 

Constraints:

1 <= nums.length <= 104
-231 <= nums[i] <= 231 - 1
*/

/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(arr) {
    if(arr.length === 0) return false;
    let counter = 0;
    let zeroCounter = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] != 0){
            arr[counter] = arr[i]
            counter++;
        } else {
            zeroCounter++;
        }
    }
    console.log(arr, zeroCounter)
    for(let i = 1; i <= zeroCounter; i++){
        arr[arr.length - i] = 0
    }
    return arr;
};

// Time Complexity is O(n)
// Space Complexity is O(1)

//Alternate Solution:
var moveZeroes = function(arr) {
    let swap = (arr, a,b) => {
        [arr[a], arr[b]] = [arr[b], arr[a]];
        return a,b
    }
    if(arr.length === 0) return arr;
    let j = -1;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === 0){
            j = i;
            break;
        }
    }
    if(j == -1) return arr;
    for(i = j + 1; i < arr.length; i++){
        if(arr[i] != 0){
            swap(arr, i, j);
            j++;
        }
    }
    return arr;
};

//Time Complexity for the code is O(n)
//Space Complexity for the code is O(1)
