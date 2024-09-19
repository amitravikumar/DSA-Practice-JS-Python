/*
Given two strings s and t, return true if t is an 
anagram of s, and false otherwise.


Example 1:

Input: s = "anagram", t = "nagaram"

Output: true

Example 2:

Input: s = "rat", t = "car"

Output: false

Constraints:

1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

//We are using Hash Table with Strings to maintain a counter for each of the words, initially we are counting and in the second string we are decrementing the characters in order to check the counts, if the count is 0, its an Anagram, else it is not. 
// The time complexity for this function is 0(n)
var isAnagram = function(s, t) {
    if(s.length != t.length) return false;

    const hashMap = new Map();
    for(let character of s){
        hashMap.set(character, (hashMap.get(character) || 0) + 1)
    }

    for(let character of t){
        if(!hashMap.has(character)){
            return false;
        }

        hashMap.set(character, hashMap.get(character) - 1)
        if(hashMap.get(character) < 0){
            return false;
        }
    }
    return true;
};