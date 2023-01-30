var numTriplets = function(nums1, nums2) {
    let numOfTimes = 0
    const types = (one, two)=>{
        const multiObj = {}
        let i = 0
        let j = 1
        while (i !== one.length - 1){
            let current = one[i] * one[j]
            if(multiObj[current] === undefined){
                multiObj[current] = 1
            } else {
                multiObj[current] += 1
            }
            if(j === one.length - 1){
                i++
                j = i + 1
            } else {
                j++
            }
        }
        for(let multi = 0; multi < two.length; multi++){
                let square = two[multi] * two[multi]
                if(multiObj[square] !== undefined){
                    numOfTimes += multiObj[square]
                }
        }
    }
    types(nums1,nums2)
    types(nums2,nums1)
    return numOfTimes
};

let nums1 = [1,1], nums2 = [1,1,1]
// Output: 1
// Explanation: Type 1: (1, 1, 2), nums1[1]2 = nums2[1] * nums2[2]. (42 = 2 * 8). 

console.log(numTriplets(nums1,nums2))