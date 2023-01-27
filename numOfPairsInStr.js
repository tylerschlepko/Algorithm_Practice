let nums = ["777","7","77","77"], target = "7777"
function howMany(nums, target){
    let count = 0
    for(let i = 0; i < nums.length; i++){
        for(j = 0; j < nums.length; j++){
            if(i === j){
            } else {
                let match = nums[i] + nums[j]
                console.log(match)
                if(match === target){
                    count++
                }
            }
        }
    }
    return count
}

console.log(howMany(nums,target))