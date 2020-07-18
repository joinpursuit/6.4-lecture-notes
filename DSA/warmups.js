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

console.log(specialArrayProdSum([5, 2, [7, -1], 3, [6, [-13, 8], 4]]));
