/*
Given an integer numRows, return the first numRows of Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:


 

Example 1:

Input: numRows = 5
Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
Example 2:

Input: numRows = 1
Output: [[1]]
 

Constraints:

1 <= numRows <= 30
*/

//This code is to generate the rows of the Pascals Triangle for a given number from top till the number
/**
 * @param {number} numRows
 * @return {number[][]}
 */

let generateRow = (n) => {
    let ans = 1;
    let result = [];
    for(let i = 0; i <= n; i++){
        if(i === 0){
            result.push(1)
        } else {
            ans = ans * (n - i + 1) / i
            result.push(ans);
        }
    }
    return result;
}

var generate = function(numRows) {
    let result = [];
    for(let i = 0; i < numRows; i++){
        let getData = generateRow(i);
        result.push(getData);
    }
    return result;
};

console.log(generate(5));