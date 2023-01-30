var tribonacci = function(n) {
    let one = 0
    let two = 1
    let three = 1
    let tribCurrent = 0
    if (n === 0){
        return 0
    } else if (n < 3){
        return 1
    } else {
        for(let i = 3; i <= n; i++){
            tribCurrent = one + two + three
            one = two
            two = three
            three = tribCurrent
        }
    }   
    return tribCurrent
};

console.log(tribonacci(4))