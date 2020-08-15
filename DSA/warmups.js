// Write a function returns the letter
// that appears the most amount of times in a string

const countOccurances = (str) => {
  str = str.toLowerCase();
  let counts = {};
  for (let char of str) {
    counts[char] ? counts[char]++ : (counts[char] = 1);
  }
  return counts;
};

const mostOccurredLetter = (str) => {
  let counts = countOccurances(str);
  let maxChar;
  let maxCharCount = 0;
  for (let key in counts) {
    if (counts[key] > maxCharCount) {
      maxChar = key;
      maxCharCount = counts[key];
    }
  }
  return maxChar;
};

// console.log(mostOccurredLetter("heLlo"))

// Write a function that takes in a multi dimensional array and returns a flattened array
//  Exp input [1, [2, 3, [4], 5]] should return [1, 2, 3, 4, 5].

const flatten = (arr) => {
  let result = [];
  arr.forEach((el) => {
    if (Array.isArray(el)) {
      result = [...result, ...flatten(el)]; 
    } else {
      result.push(el);
    }
  });
  return result;
};

const flattenReduce = (arr) => {
  return arr.reduce((result, el) => {
    if (Array.isArray(el)) {
      result = result.concat(flattenReduce(el));
    } else {
      result.push(el);
    }
    return result;
  }, []);
};

// console.log(flattenReduce([1, [2, 3, [4], 5]]));

//  Write a function that takes in an array of socks. Each sock will be represented by a number.
//   The function should return the total number of complete pairs.
//   Exp Input [1, 2, 4, 2, 4, 2, 2], should return 3 because we have a pair of 2's and a pair of 4s

// {"red": 1, "green": 4, "blue": 5}

const counter = (arr) => {
  return arr.reduce((acc, currEl) => {
    acc[currEl] ? acc[currEl]++ : (acc[currEl] = 1);
    return acc;
  }, {});
};

const sockCount = (arr) => {
  const counts = counter(arr);
  let pairs = 0;
  // Object.values(counts).forEach(count => {
  //     pairs += Math.floor(count / 2)
  // })
  for (let sock in counts) {
    pairs += Math.floor(counts[sock] / 2);
  }
  return pairs;
};

const socksWithoutPairs = (arr) => {
  const counts = counter(arr);
  let loose = 0;
  for (let sock in counts) {
    loose += counts[sock] % 2;
  }
  return loose;
};

const sockCount2 = (socks) => {
  const set = new Set();
  let pairs = 0;
  socks.forEach((sock) => {
    if (set.has(sock)) {
      pairs++;
      set.delete(sock);
    } else {
      set.add(sock);
    }
  });
  return pairs;
};

// pair = 3
// { 1, 2}

// console.log(sockCount2([1, 2, 4, 2, 4, 2, 2, 2]));

// Write a function that takes in a “special” array and returns its product sum.
// A “special” array is a non-empty array that contains either integers or other
// “special” arrays. The product sum of a “special” array is the sum of its elements, where “special”
//  arrays inside it are summed themselves and then multiplied by their level of depth.
// Example :
// [5, 2, [7, -1], 3, [6, [-13, 8], 4]]
// 7 + 12  + 3  +      -10
// Expected output: 12
// Example 2:
// [1,2,3,4,5]
// Expected output : 15

// Example 3:      [1 ,2 , [3] ,4, 5]
// 3 + 6 + 9
// Expected output: 18
// Example 4:      [  [1 , 2] , 3 , [4, 5] ]
// 6 +   3     + 18  = 27
// Expected output: 27

const specialArrayProdSum = (arr, depth = 1) => {
  let sum = 0;
  arr.forEach((el) => {
    if (Array.isArray(el)) {
      sum += specialArrayProdSum(el, depth + 1); 
    } else {
      sum += el;
    }
  });
  return sum * depth;s
};

const specialArrayProdSumReduce = (arr, depth = 1) =>
  depth *
  arr.reduce(
    (sum, el) =>
      (sum += Array.isArray(el)
        ? specialArrayProdSumReduce(el, depth + 1)
        : el),
    0
  );

// console.log(specialArrayProdSum([5, 2, [7, -1], 3, [6, [-13, 8], 4]]));


// Write a function that takes in two strings and determines whether those strings are anagrams.
// An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman

// RULES
// Length must be the same on each string 
// Must only have same letters 
// Letters must have equal count in each string. 

// coming with multiple high level approaches. 
// return str1.split("").sort().join("") === str2.split("").sort().join("") // nlogn 

const counterOfStr = (str) => {
  const counts = {};
  for(let char of str.toLowerCase()) {
        if (char === " ") continue; 
    counts[char] ? counts[char]++ : counts[char] = 1;
  }
  return counts;
}

const isAnagram = (str1, str2) => {
  // if(str1.length !== str2.length ) return false; 
  let str1Counts = counterOfStr(str1);
  
  for(let char of str2.toLowerCase()) {
    if(char === " ") continue; 
    if(str1Counts[char]) {
      str1Counts[char]--;
    } else {
      return false; 
    }
  }
  
  // return true; 

  return Object.values(str1Counts).every(el => el === 0)
}

// console.log(isAnagram("el vis", "Live  s"))
// console.log(isAnagram("cinema", "iceman"))
// console.log(isAnagram("elvis", "loves"))
// console.log(isAnagram("ellvis", "lives"))
// console.log(isAnagram("elvis", "llives"))

// Write a deep dup function that 
// returns a copy of an array and all nested arrays inside it. 


const deepDup = (arr) => {
  let output = [];
  arr.forEach(el => {
    if(Array.isArray(el)) {
      output.push(deepDup(el));
    } else {
      output.push(el);
    }
  })
  return output; 
}

const deepDup2 = (arr) => (
   arr.map(el => Array.isArray(el) ? deepDup2(el) : el)
)

// let arr = [1, 2, [3, [4, [], 5, 6], 7], 8, 9];


// let dup = deepDup2(arr);
// // let dup = [...arr]  ///arr.slice(0); 
// // console.log(dup)
// dup[2][0] = "cat"; 
// console.log(dup)
// console.log(arr); // [1, 2, [3, [4, [], 5, 6], 7], 8, 9]

// let names = ["maria", "corey", "bill"]
// let namesDup = names.slice(0);
// console.log(names)
// console.log(namesDup)

// namesDup[2] = "bob";
// console.log(names)
// console.log(namesDup)




// A palindrome is any string that can be read forwards or backwards like racecar, and abba. 
// Your job, is to write a function that determines whether a given string is a permutation
//  of a palindrome (it should return true or false). In other words, could this string of 
//  characters be shuffled in a way that would make them a palindrome.



// is the str a single world a sentence ? 
// Are there spaces in the str and how should those be handled? 
// Should this be case senstive? should aba be the same as Aba . 
// What should an empty string return? 
// Should I worry about punctuation? 
// Should I be concerened about other languages. 
// How defensive should I make this? Will it really always be given a string. 

// "abcba"   d 

// Rules: 
// 1. Per occurance of letter, there can only be one odd occurence. ( We can use the remainder % to identify odd counts )
// 

// Steps 
// Make a counter object, Key will be: char/letter , value: occurance  // helper function 
// Iterate through the object. If more than one odd occurance return false
// If we make it through the whole object, it must be true; 

//time complexity : O(n)
// space complexity: O(n) for each character we would create a new key value pair 
                      // O(1) constant is because there's only 26 letters in the alphabet.

const counterHelper = (str) => {
  let avoid = new Set(" !?.,%$");
  const counts = {};
  for(let char of str) {
    if(avoid.has(char)) continue
    counts[char] ? counts[char] += 1 : counts[char] = 1
  }
  return counts; 
}

const isPermutationOfPallindrome = (str) => {
  if(typeof(str) !== "string") {
    throw Error("Input must be string")
  }
  const counts = counterHelper(str.toLowerCase());
  let hasOdd = false; 
  for(let char in counts) {
    if(counts[char] % 2 === 1) {
      if(hasOdd) {
        return false; 
      } else {
        hasOdd = true; 
      }
    }
  }
  return true; 
}

console.log(isPermutationOfPallindrome("a!cerrca"));
console.log(isPermutationOfPallindrome("aabb"));
console.log(isPermutationOfPallindrome("aabbbc"));

// Input: acerrca Output: true 
// Input aabb Ouput: true 
//Input aabbbc Ouput: false 