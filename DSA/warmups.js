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
  const avoid = new Set(" !?.,%$");
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

// console.log(isPermutationOfPallindrome("a!cerrca"));
// console.log(isPermutationOfPallindrome("aabb"));
// console.log(isPermutationOfPallindrome("aabbbc"));

// Input: acerrca Output: true 
// Input aabb Ouput: true 
//Input aabbbc Ouput: false 



// Given a string which consists of lowercase or uppercase letters, 
// find the length of the longest palindromes that can be built with those letters.

// This is case sensitive, for example "Aa" is not considered a palindrome here.

// Input:
// "abccccdd"

// Output:
// 7

// Explanation:
// One longest palindrome that can be built is "dccaccd", whose length is 7.

// 1. Create a occurance map of each character. 
  //  {
  //   a: 3,    // 2  value  = Math.floor(value / 2) * 2  OR value = value - (value % 2)
  //   b: 1    // 0 
  //   c: 5     // 4 
  //   d: 2    /// 2
   // }
   

// 2.  length variable needed, and hasOdd variable 
// 3. Loop through object 
// 4. add to length  Math.floor(value / 2) * 2
// 5. update hasOdd 
// 6. return length + hasOdd (0 or 1) 

const counterString = (str) => {
  const counts = {};
  for(let char of str) {
    counts[char] ? counts[char]++ : counts[char] = 1;
  }
  return counts; 
}

const longestPalindrome = (str) => {
  const counts = counterString(str);
  let length = 0;
  let hasOdd = 0;
  
  for(let char in counts) {
    length += Math.floor(counts[char] / 2) * 2;
    if(counts[char] % 2 === 1) hasOdd = 1; 
  }
  return length + hasOdd
}

// abccccdd
// length = 6 
// "a, b"

const longestPalindrome2 = (str) => {
  let set = new Set(); 
  let length = 0; 
  for(let char of str) {
    if(set.has(char)) {
      length += 2
      set.delete(char)
    } else {
      set.add(char);
    }
  }

  if(set.size > 0) return length + 1
  
  return length 
}


// Write a function that takes in a string and returns whether or 
// not the string is a palindrome. A palindrome is any word that is spelled 
// the same forwards and backwards.

// Goal: try and solve this problem in multiple ways.

// Ask are we concerned with string casing? 
// Will there be numbers or punctuation to worry about? 
// Get some example inputs and outputs. 
// will there be spaces ? 
// Is an empty string a palindrome? 


//input: racecar  output: true 
// input: abba    output: true 
// amanaplanacanalpanama   true 
// abb // false 
// ""  ? 

// split string, reverse array, join to string , check if it's equal to original string. 

const isPalindrome1 = (str) => str === str.split("").reverse().join(""); // 3n -> N   //space -> N 

const isPalindrome2 = (str) => {  // 2N -> N  //  space N 
  let arr = str.split("");
  for(let char of arr) {
    if(char !== arr.pop()) {
      return false
    }
  }
  return true; 
}

// usually you don't want to mutate the array as you're iterating through it unless its sorting it in some way.


const isPalindrome3 = (str) => {            // (1/2)N -> N    //space -> O(1)
  for(let i = 0; i < Math.floor(str.length / 2); i++) {
    if(str[i] !== str[str.length - 1 - i]) {
      return false; 
    }
  }
  return true; 
}

// abba // 4
// i: 4
// str[i] : a
// str[str.length - 1 - i] : a

const isPalindrome4 = (str) => {  // (1/2)N -> N // space -> constant o(1)
  let i = 0; 
  let j = str.length - 1;

  while(i < j) {
    if(str[i] !== str[j]) return false; 

    i++; 
    j--; 
  }
  return true; 
}

const isPalindrome5 = (str, i = 0) => {   // (1/2)N -> N  // space (program is constant) but recursive stack frame (1/2N -> N)
  if(i >= Math.floor(str.length / 2)) return true; 
  if(str[i] !== str[str.length - 1 - i]) return false; 
  return isPalindrome5(str, i + 1);
}

// const isPalForEach = (str) => {
//   let output = true;
//   str.split("").forEach((el, i) => {
//     if(el !== str[str.length - 1 - i]) {
//       output = false; 
//     }
//   })
//   return output; 
// }


//will there be a callstack error if the string get a lot longer? 
// YES 

// console.log(isPalForEach("racecar"));
// console.log(isPalForEach("abba"));
// console.log(isPalForEach("amanaplanacanalpanama"));
// console.log(isPalForEach("abb"));
// console.log(isPalForEach(""));

// const countdown = (num) => {
//   let j = num
//   while(num > 0 ) {
//     console.log(num);
//     num--
//   }
//   // if(num <= 0) return
//   // countdown(num - 1)
// }
// countdown(110000)

// For a given string s find the character c (or C) with longest consecutive repetition and return:
// https://www.codewars.com/kata/586d6cefbcc21eed7a001155/train/javascript

// clarifying questions: 
  //  Case sensitive? 
  //  English alphabet? 
  //  Puncuation? Spaces ? 

// str: "aabbba"
// maxCount: 0;
// maxLetter: ""
// currChar: s[0]
// currCount

// char: "a"
  // maxCount to keep track of max 
  // maxLetter the letter of the max count 
  // currCount - count that changes with each iteration 
  // currChar - does the char match the currChar 

  // check if str has length 
  // iterate through our string. 
  // if char === currChar 
   //    increment our currCount 
   // else 
  ///      reset currCount : 1 and reset our currChar = char 

  // if currCount > maxCount 
  //    update maxCount to be currCount and update maxLetter to be the currLetter 

  // return [maxLetter, maxCount]

function longestRepetition(str) {
  if(!str) return ["", 0];
  let maxCount = 0;
  let maxLetter = "";
  let currCount = 0;
  let currChar = str[0];

  for(let char of str) {
    if(char === currChar) {
      currCount++; 
    } else {
      currCount = 1; 
      currChar = char;
    }

    if(currCount > maxCount) {
      maxCount = currCount; 
      maxLetter = currChar;
    }
  }

  return [maxLetter, maxCount]
}

// Given a linked list, determine if it has a cycle in it.
// Follow up:
// Can you solve it using O(1) (i.e. constant) memory? 

const hasCycle = (head) => {
  let slow = head; 
  let fast = head; 
  while(fast && fast.next) {
    fast = fast.next.next; 
    slow = slow.next;
    if(fast === slow) return true; 
  }
  return false; 
}

// o(n) linear time 
// o(1) constant space



// A binary tree is univalued if every node in the tree has the same value.
// Return true if and only if the given tree is univalued.

// const isUnivalTree = (root) => {  // BFS   Time: O(n)  Space: O(width) 
//   let compareValue = root.val; 
//   let q = [ root ]
//   while(q.length > 0) {
//     let node = q.shift();
//     if(node.val !== compareValue) return false; 
//     if(node.left) q.push(node.left);
//     if(node.right) q.push(node.right);
//   }
//   return true; 
// };

const isUnivalTree = (root) => { //DFS Time: O(linear) Space: stack frames for each node (not 100% sure)
  let compareValue = root.val; 

  const dfs = (node) => {
    if(!node) return true; 
    return compareValue === node.val && dfs(node.left) && dfs(node.right)
  }

  return dfs(root);
}