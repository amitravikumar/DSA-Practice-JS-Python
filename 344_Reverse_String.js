/*
Write a function that reverses a string. The input string is given as an array of characters s.

You must do this by modifying the input array in-place with O(1) extra memory.

 

Example 1:

Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]
Example 2:

Input: s = ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]
 

Constraints:

1 <= s.length <= 105
s[i] is a printable ascii character.
*/

//Alternate Solution without single space and reverse method.
let reverseStringAlt = (s) => {
    let left = 0;
    let right = 1;
    let result = [];
    if(s.length === 0) return [];
    while (right <= s.length){
        if(right > left){
            result.push(s[s.length - right])
        } else {
            left = right;
            right++;
        }
        right++;
    }
    return result;
}
console.log(reverseString(["h","e","l","l","o"]))


//Alternate Solution using Swap or reverse method and Two Pointer Approach
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let left = 0;
    let right = s.length - 1;
    if(s.length === 0) return [];
    while(left < right){
        let temp = s[left];
        s[left] = s[right];
        s[right] = temp;

        left++;
        right--;
    }
    return s;
};