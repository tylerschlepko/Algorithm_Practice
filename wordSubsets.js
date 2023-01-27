var wordSubsets = function(words1, words2) {
    words2 = words2.join('').split('')
    let wordFilter = words1.filter(element=> element.includes(words2[0]))
    for(let i = 1; i < words2.length; i++){
        wordFilter = wordFilter.filter(element=> element.includes(words2[i]))
    }
    return wordFilter
};
let words1 = ["amazon","apple","facebook","google","leetcode"]
let words2 = ["e","o"]
//Output: ["facebook","google","leetcode"]

console.log(wordSubsets(words1, words2))