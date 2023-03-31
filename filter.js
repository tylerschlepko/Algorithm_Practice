//takes in an arr and a condition fn
//make a new arr
//for each elem in the arr it sees if it matches the condition
// if it doesnt it continues
// if it does itll push it into the new Arr
const filter = (arr, condition)=>{
    const newArr = []
    for(let i = 0; i < arr.length; i++){
        if(condition(arr[i])){
            newArr.push(arr[i])
        } else {

        }
    }
    return newArr
}
const arr = [1,2,3,4,5,6,7]
const cond = (num) =>{
    return num % 2 === 0
} 
console.log(filter(arr, cond)); 