var searchRange = function(nums, target) {
    let i = 0
    let j = nums.length - 1
    let ansStart = 0
    while(i != j){
        if(nums[i] === target){
            ansStart = i
            while(nums[ansStart] === target){
                ansStart ++
            }
            return [i, ansStart - 1]
        } else if (nums[j] === target){
            ansStart = j
            while(nums[ansStart] === target){
                ansStart --
            }
            return [ansStart + 1,j]
        } else {
            i++
            j--
        }
    }
    return [-1,-1]
};

let nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]

console.log(searchRange(nums, target))