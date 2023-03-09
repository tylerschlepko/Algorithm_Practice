var isValid = function(s) {
    const compObj = {
        '[': 0,
        ']': 0,
        '{': 0,
        '}': 0,
        '(': 0,
        ')': 0
    }
    for(let i = 0; i < s.length; i++){
        if(s[i] === ']' && compObj['['] < compObj[s[i]] || s[i] === '}' && compObj['{'] < compObj[s[i]] || s[i] === ')' && compObj['('] < compObj[s[i]]){
            return false
        }
        compObj[s[i]] += 1
    }
    if(compObj['{'] === compObj['}'] && compObj['['] === compObj[']'] && compObj['('] === compObj[')']){
        return true
    } else {
        return false
    }
};