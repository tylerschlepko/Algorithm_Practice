var modifyString = function(s) {
    let qReplacement = ['b', 'm', 'g']
    let strArr = s.split('')
    for (let i = 0; i < strArr.length; i++){
        if(strArr[i] === '?'){
            let notAllowed = {
                [strArr[i - 1]] : 1,
                [strArr[i + 1]] : 1
            }
            if(notAllowed[qReplacement[0]] !== undefined){
                if(notAllowed[qReplacement[1]] !== undefined){
                    strArr[i] = qReplacement[2]
                } else {
                    strArr[i] = qReplacement[1]
                }
            } else {
                strArr[i] = qReplacement[0]
            }
        }
    }
    return strArr.join('')
};
let s = "ubv?w"
//Output: "ubvaw"

console.log(modifyString(s))