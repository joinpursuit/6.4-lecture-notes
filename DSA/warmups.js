// Write a function returns the letter 
// that appears the most amount of times in a string

const countOccurances = (str) => {
    str = str.toLowerCase();
    let counts = {};
    for (let char of str) {
      counts[char] ? counts[char]++ : (counts[char] = 1);
    }
    return counts; 
}

const mostOccurredLetter = (str) => {
    let counts = countOccurances(str);
    let maxChar; 
    let maxCharCount = 0; 
    for(let key in counts) {
        if(counts[key] > maxCharCount) {
            maxChar = key; 
            maxCharCount = counts[key];
        }
    }
    return maxChar;
}

console.log(mostOccurredLetter("heLlo"))