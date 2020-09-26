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

// Write a function that takes in a special” array and retur"ns its product s"m.;
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

// Write a program that outputs the string representation of numbers from 1 to n.

// But for multiples of three it should output “Fizz” instead of the number and for the multiples of five output “Buzz”. 
// For numbers which are multiples of both three and five output “FizzBuzz”.

// Example:

// n = 15,

// Return:
// [
//     "1",
//     "2",
//     "Fizz",
//     "4",
//     "Buzz",
//     "Fizz",
//     "7",
//     "8",
//     "Fizz",
//     "Buzz",
//     "11",
//     "Fizz",
//     "13",
//     "14",
//     "FizzBuzz"
// ]

//Clarifying questions: 
// Asking about inputs and outputs. Make sure we really understand. 
// if a negative number? 

// iterate from 1 - n  and check for even divisibilty. 
// first check 5 & 3 
// then check 5 , then 3, then string number. 



// const fizzBuzz = (n) => {
//   const output = [];
//   for(let i = 1; i <= n; i++) {
//     if(i % 5 === 0 && i % 3 === 0) {
//       output.push("FizzBuzz");
//     } else if(i % 3 === 0) {
//       output.push("Fizz")
//     } else if(i % 5 === 0) {
//       output.push("Buzz")
//     } else {
//       output.push(i.toString());  // "" + i /// `${i}` // String(i) // 
//     }
//   }
//   return output; 
// }
// output: ["1", "2", "Fizz", "4", "Buzz"]
// n: 10
// f: 2
// b: 0
// i: 6

const fizzBuzz = (n) => {
  const output = [];
  let fizz = 0;
  let buzz = 0; 
  let i = 1; 
  while(i <= n) { 
    fizz++;
    buzz++;
    if(fizz === 3 && buzz === 5) {
      output.push("FizzBuzz");
      fizz = 0; 
      buzz = 0;
    } else if(fizz === 3) {
      output.push("Fizz");
      fizz = 0;
    } else if(buzz === 5) {
      output.push("Buzz")
      buzz = 0;
    } else {
      output.push(String(i))
    }
    i++
  }
  return output; 
}


// Todays problem is inspired by 
// https://codingjs.wmcicompsci.ca/exercise.html?name=roundSum&title=Logic-2 
// Part1: Write a function that rounds a value to the next multiple of 10 
// if its rightmost digit is 5 or more, so 15 rounds up to 20. 
// Alternately, round down to the previous multiple of 10 if its rightmost 
// digit is less than 5, so 12 rounds down to 10.

// Part2: Write a function that takes in 3 arguments, 
// rounds all of them, and then returns the sum of all rounded arguments.

// Part 3: Update your second function to work with any number of arguments
//  (this function cannot and should not take in an array, only multiple arguments).

const round = (num) => {
  const rightDigit = num % 10;
  if(rightDigit >= 5) return num + (10 - rightDigit)
  return num - rightDigit;
}

const roundSum = (...args) => args.reduce((sum, el) => sum + round(el), 0);

// function roundSum () {
//   let sum = 0;
//   for(let i = 0; i < arguments.length; i++) {
//     sum += round(arguments[i])
//   }
//   return sum; 
// }

// console.log(roundSum(27, 17, 32, 9));

// num: 26
// rightDigit: 6
// should be 30

// what do we need to add: 4

// 26 + (10 - 6) = 30


// You are given an array of people objects.
//  Each object has the properties and name and age. 
//  Your task is to write a function that returns the second oldest person.
// will we have duplicate ages ? If so which should I return? 

// sort the array NLog(n)

// const secondOldest = (people) => {
//   people.sort((a, b) => {
//      return b.age - a.age
//   })
//   return people[1]
// }

// this example is allowing for duplicates but not caring which answer you give in case of ties . 
const secondOldest = (people) => {  // N time, and O(1) constant space 
  if(people.length < 2) throw Error("No second oldest");

  let oldest = {age: 0}       // the reason we didn't care about finding the greater of the first 2 is 
  let secondOldest = {age: 0} // because the youngest a person can be is 0. So this is our -Infinity. 

  for(let i = 0; i < people.length; i++) {
    let person = people[i];
    if(person.age >= oldest.age) {
      secondOldest = oldest;
      oldest = person; 
    } else if(person.age >= secondOldest.age) {
      secondOldest = person; 
    }
  }

  return secondOldest; 

}

// let people = [
//   {name: "Corey", age: 100},
//   {name: "Jhenya", age: 25},
//   {name: "Caroline", age: 27},
//   {name: "Jon", age: 18},
// ]

// let people = [
//   {name: "Corey", age: 0},
//   {name: "Jhenya", age: 0},
// ]

// console.log(secondOldest(people))

// let obj = {name: "corey", age: 100};

// const {name, age } = {name: "corey", age: 100}

// console.log(name)

// let [a, ...b] = ["a", "b", "c", "d"]
// console.log(b)

// let arr = [1, 2, 3, 4, 5];
// [arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr[0]];
// console.log(arr)

// Write a function that takes a sentences as the argument.
//  Your function should return a new sentence. Any word in the sentence that has 
//  more than 4 letters should have no vowels.
// Exp: Input “Hello world”  output: “Hll wrld”
// Input: “My name is Corey” output “My name is Cry”

// split sentence into words .split(" ");
// iterate over the array and check the length of each word. 
// if the word is length 4 or less - don't care - add it directly output. 
// else disemvowel word and then add it to our output. 
// join our output " "

const disemvowelWord = (word) => {
  let output = "";
  const vowels = new Set("aeiou")
  
  for(let char of word) {
    if(!vowels.has(char.toLowerCase())) {
      output += char
    }
  }

  return output; 
}

// console.log(disemvowelWord("Apple"))

// const disemvowelBigWords = (sentence) => {
//   let words = sentence.split(" ");
//   let output = [];

//   words.forEach(word => {
//     if(word.length <= 4) {
//       output.push(word)
//     } else {
//       let newWord = disemvowelWord(word)
//       output.push(newWord)
//     }
//   })

//   return output.join(" ")
// }

const disemvowelBigWords = (sentence) => 
   sentence
    .split(" ")
    .map((word) => (word.length <= 4 ? word : disemvowelWord(word)))
    .join(" ");


// console.log(disemvowelBigWords("My name is Corey"));

//PROBLEM: 
// Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

// You may assume that the array is non-empty and the majority element always exist in the array.

// Example 1:

// Input: [3,2,3]
// Output: 3
// Example 2:

// Input: [2,2,1,1,1,2,2]    
// Output: 2

// iterate through the array and keep a count of appearance. If count is great than our mid point, we can return the element. 

// const majorityElement = (arr) => { // n time and n space 
//   const counts = {};
//   for(let el of arr) {
//     counts[el] ? counts[el]++ : counts[el] = 1; 
//     if(counts[el] > arr.length / 2) {
//       return el; 
//     }
//   }
// }

// when we see array problems, always ask would it beneficial if it was sorted. 
// const majorityElement = (arr) => {   // nlogn time and constant space 
//   arr.sort((a, b) => a - b);
//   return arr[Math.floor(arr.length / 2)]
// }

// can we do it in n time and constant space 
// we'll have a candidate variable 
// we can keep a count variable starting at 0 

// iterate array 
// if our count variable is 0, update candiate to be current element 
// if current element === our candidate, increment our count 
// otherwise we can decrement our count 

// Input: [2,2,1,1,1,2,2]    
// Output: 2

const majorityElement = (arr) => {
  let count = 0; 
  let candidate; 
  arr.forEach(el => {
    if(count === 0) {
      candidate = el; 
    }

    if(candidate === el) {
      count++
    } else {
      count--
    }
  })
  
  count = 0;
  arr.forEach(el => {
    if(el === candidate) count++
  })

  if(count > Math.floor(arr.length / 2)) {
    return candidate
  } else {
    throw Error("No majority Element! ")
  }
}

// [3, 3, 2, 4, 2, 2]
// count = 2;
// cand = 2

console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));