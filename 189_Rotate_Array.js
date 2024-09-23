/**
 Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

 

Example 1:

Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]
Example 2:

Input: nums = [-1,-100,3,99], k = 2
Output: [3,99,-1,-100]
Explanation: 
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]


Constraints:

1 <= nums.length <= 105
-231 <= nums[i] <= 231 - 1
0 <= k <= 105

*/

/**
 * @param {number[]} arr
 * @param {number} d
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(arr, d) {
    const n = arr.length;
    if (n === 0) return false;
    
    // Adjust d to be within array bounds
    d = d % n;

    // Helper function to reverse parts of the array
    const reverse = (arr, start, end) => {
        while (start < end) {
            [arr[start], arr[end]] = [arr[end], arr[start]]; // Swap elements
            start++;
            end--;
        }
    }

    // Reverse the entire array
    reverse(arr, 0, n - 1);
    
    // Reverse the first 'd' elements
    reverse(arr, 0, d - 1);
    
    // Reverse the remaining 'n - d' elements
    reverse(arr, d, n - 1);
    
    return arr;
};

//Alternate Solution without maintaining the original array
var rotate = function (arr, d) {
    const n = arr.length;
    if (n === 0) return false;
    d = d % n;
    let temp = [];
    let temp2 = [];
    for (let i = 0; i < d; i++) {
        temp[i] = arr[n - d + i]
    }
    for (let i = 0; i < (n - d); i++) {
        temp2[i] = arr[i]
    }
    for (let i = 0; i < (n - d); i++) {
        temp[d + i] = temp2[i]
    }
    return temp;
};