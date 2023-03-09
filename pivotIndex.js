nums = [-1,-1,-1,-1,-1,0]
//Output: 3
var pivotIndex = function(nums) {
    let leftSum = 0
    let rightSum = 0
    let left = 0
    let right = nums.length - 1
    while(left < right){
        if(leftSum === rightSum){
            if(nums[left] < nums[right]){
                leftSum += nums[left]
                left++

            } else {
                rightSum += nums[right]
                right--
            }
        } else if (leftSum > rightSum){
            rightSum += nums[right]
            right--
        } else {
            leftSum += nums[left]
            left++
        }
    }
    console.log(leftSum);
    if(leftSum === rightSum){
        return right
    } else {
        return -1
    }
};

console.log(pivotIndex(nums));