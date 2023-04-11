
const slide = (nums, win) =>{
    let highest = [0 , []]
    for(let i = win - 1; i < nums.length; i++){
        let curr = 0
        let currArr = []
        for(let j = i; j > i - win; j--){
            curr += parseInt(nums[j])
            currArr.push(j)
        }
        if(highest[0] < curr){
            highest[0] = curr
            highest[1] = currArr
        }
    }
    return highest
}
const nums = '31285739827999914987'
const win = 4

console.log(slide(nums, win))