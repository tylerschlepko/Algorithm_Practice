// # Longest substring without repeating character

// ### Given a string s, find the length of the longest substring without repeating characters.

 const slidingWindow = (s) =>{
    let highCount = 0
    let i = 0
    let j = 1
    let letterObj= {}
    let count = 1
    letterObj[s[i]] = 1
    let longestWord = ''
    while (j < s.length){
        if(letterObj[s[j]] === undefined){
            letterObj[s[j]] = 1
            count++
            j++
        } else {
            if (count > highCount){
                highCount = count
                longestWord = s.substring(i, j)
            } else {}
            letterObj = {}
            i = j
            j++
            letterObj[s[i]] = 1
            count = 1
        }
    }
    return ` The longest unique substring is "${longestWord}" with a length of ${highCount}`
 }

// - Example 1:

// let s = "abcabcbb"


// Output: 3`
// - Explanation: The answer is "abc", with the length of 3.
// - Example 2:

// let s = "bbbbb"
// Output: 1`
// - Explanation: The answer is "b", with the length of 1.
// - Example 3:

 let s = "pwwkew"
// Output: 3`
// - Explanation: The answer is "wke", with the length of 3.
// - Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

console.log(slidingWindow(s))

// ### Constraints:

// `0 <= s.length <= 5 * 104
// s consists of English letters, digits, symbols and spaces.`