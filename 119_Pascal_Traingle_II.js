/*
Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

Example 1:

Input: rowIndex = 3
Output: [1,3,3,1]
Example 2:

Input: rowIndex = 0
Output: [1]
Example 3:

Input: rowIndex = 1
Output: [1,1]
 

Constraints:

0 <= rowIndex <= 33

*/

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let ans = 1;
    let result = [];
    for(let i = 0; i <= rowIndex; i++){
        if(i === 0){
            result.push(1)
        } else {
            ans = ans * (rowIndex - i + 1) / i;
            result.push(ans);
        }
    }
    return result;
};

// The time complexity for this solution is O(n);
//The space complexity for this applications is O(1);