/*
Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

 

Example 1:

Input: s = "leetcode"

Output: 0

Explanation:

The character 'l' at index 0 is the first character that does not occur at any other index.

Example 2:

Input: s = "loveleetcode"

Output: 2

Example 3:

Input: s = "aabb"

Output: -1

 

Constraints:

1 <= s.length <= 105
s consists of only lowercase English letters.
*/

/**
 * @param {string} s
 * @return {number}
 */

//The Solution is done using Hashmaps and have a Big O Nation of O(n)
var firstUniqChar = function(s) {
    let hashMap = new Map();
    for(let char of s){
        hashMap.set(char, (hashMap.get(char) || 0) + 1 )
    }
    for(let i = 0; i < s.length; i++){
        if(hashMap.get(s[i]) === 1){
            return i;
        }
    }
    return -1;
};