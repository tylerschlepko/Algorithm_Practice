let nums = '213456549992345'
let window = 3

const slidingWindow = (nums, window) =>{
    let max = 0
    for(let i = 0; i + window - 1 < nums.length; i++){
        let addedNums = parseInt(nums[i]) 
        for(let j = i + 1; j < window + i; j++){
            addedNums += parseInt(nums[j])
        }
        (addedNums > max ? max = addedNums : max)
    }
    return max
}

console.log(slidingWindow(nums, window));