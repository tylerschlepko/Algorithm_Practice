const arr = [1,2,3,4,5,6]
const sum = 11 // [5, 6]
const sum2 = 100 // return false

// Basically twoSum with sorted data. If two numbers add up to the given sum - return the two number in a new subarray
// 
function multiplePointer(arr, sum) {
    // use multiple pointer approach to solve this
    let l = 0
    let r = arr.length - 1
    while(l !== r){
        let sumOfArr = arr[l] + arr[r]
        if(sumOfArr > sum){
            r++
        } else if (sumOfArr < sum){
            l++
        } else {
            let ansArr = [arr[l], arr[r]]
            return ansArr
        }
    }
    return false
}

console.log(multiplePointer(arr, sum))
console.log(multiplePointer(arr, sum2))