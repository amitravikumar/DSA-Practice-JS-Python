/*
    Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.

 

Example 1:

Input: ransomNote = "a", magazine = "b"
Output: false
Example 2:

Input: ransomNote = "aa", magazine = "ab"
Output: false
Example 3:

Input: ransomNote = "aa", magazine = "aab"
Output: true
 

Constraints:

1 <= ransomNote.length, magazine.length <= 105
ransomNote and magazine consist of lowercase English letters.
*/

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let ransomNoteMap = new Map();
    let magazineMap = new Map();
    if(ransomNote === "" && magazine !== "") return false;
    for(let items of magazine){
        magazineMap.set(items, (magazineMap.get(items) || 0) + 1)
    }

    for(let items of ransomNote){
        ransomNoteMap.set(items, (ransomNoteMap.get(items) || 0) + 1)
    }

    for(let [key,value] of ransomNoteMap){
        if((magazineMap.get(key) || 0) < value){
            return false;
        }
    }
    return true;
};