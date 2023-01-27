let arr = [2,3,1,4,6,22,33,7,9,11]
//62
window = 3
function slidingWindow(arr, windowSize){
    let mostNum = 0
    for(i = windowSize - 1; i < arr.length; i++){
        let currentWin = 0
        for(j = i - windowSize + 1; j < i; j++){
            currentWin += arr[j]
        }
        currentWin += arr[i]
        if(currentWin > mostNum){
            mostNum = currentWin
        } else {

        }
    }
    return mostNum
}

console.log(slidingWindow(arr, window))