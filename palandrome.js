var isPalindrome = function(s) {
    //Regex to make sure that the string only contains letters
    let cleanedStr = s.replace(/[^a-zA-Z]/g, '');

    //convert the string to all lowercase
    cleanedStr = cleanedStr.toLowerCase()
    
    // convert to an array and flip it and compare the fliped string to the non flipped
    let flipped = cleanedStr.split('')
    flipped = flipped.reverse()
    flipped = flipped.join('')
    
    if(flipped === cleanedStr){
        //return true if they all match and the while loop ends
        return true

    } else {
        return false
    }
};

s = "0P"
console.log(isPalindrome(s));