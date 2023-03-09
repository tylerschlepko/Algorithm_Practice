let nums = '213456549992345'
let window = 3

// const slidingWindow = (nums, window) =>{
//     let max = [0, []]
//     for(let i = 0; i + window - 1 < nums.length; i++){
//         let addedNums = parseInt(nums[i])
//         let index = [i] 
//         for(let j = i + 1; j < window + i; j++){
//             addedNums += parseInt(nums[j])
//             index.push(j)
//         }
//         (addedNums > max[0] ? max = [addedNums,index] : max)
//     }
//     return max[1]
// }

// console.log(slidingWindow(nums, window));

const highestSubString = (str, size) => {
    let highSum = [0,[]];

    for (let i = 0, last = size - 1; last < str.length; i++, last++){
       let subIndex = i;
       let currentSum = [0, []];
       while (subIndex <= last){
          currentSum[0] += parseInt(str[subIndex]);
          currentSum[1].push(subIndex)
          subIndex++;
       };
 
       if (highSum[0] < currentSum[0]){
          highSum = currentSum;
       };
    }
    return highSum[1];
 };

 console.log(highestSubString(nums,window));