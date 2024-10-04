// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

//Code to find the nth row of Pascal's Triangle
var ncr = (r, n) => {
    let res = 1;
    for(let i = 0; i < r; i++ ){
        res = res * (n - i);
        res = res / (i + 1);
        
    }
    return res;
}

console.log(ncr(12,3))
//Time complexity of this code is 0(n) and space complexity is 0(1)


//Code to find the nth column of Pascal's Triangle
var findNthCol = (n) => {
    let ans = 1;
    let result = [];
    for (let i = 0; i <= n; i++) {
        if (i === 0) {
            result.push(1);  // nC0 is always 1
        } else {
            ans = ans * (n - i + 1) / i;
            result.push(ans);
        }
    }
    return result;
}

console.log(findNthCol(5));
//Time complexity of this code is 0(n) and space complexity is 0(n)


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