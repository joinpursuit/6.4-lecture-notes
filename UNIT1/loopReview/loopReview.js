// const luckyNumber = 13;

// if(luckyNumber > 10) {
//     console.log("big number")
// } else {
//     console.log("small nummber")
// }

// // condition ? do true stuff : do false stuff

// luckyNumber > 10 ? console.log("big number") : console.log("small nummber");
// console.log(luckyNumber > 10 ? "big number" : "small number")

// const num1 = 69;
// const num2 = 96;

// const biggerNum = num1 > num2 ? num1 : num2 ;

// let isRunning = true;
// let energy = 100;

// while(isRunning) {
//     if(energy % 2 === 1) {
//         energy -= 5
//     } else {
//         energy += 3
//     }
//     if(energy <= 0 ) {
//         isRunning = false;
//     }
//     console.log(energy)
// }

// if(luckyNumber % 2 === 1) {
//     console.log("ODD CHOICE")
// }

// 1. Write a loop that sums all the numbers from 5 to 15. (inclusive - numbers 5
// and 15 should be part of the final sum)
// Do a for loop and a while loop.

// let sum = 0;
// for(let i = 5; i <= 15; i += 1 ) {
//     sum += i
// }
// console.log(sum)

// let sum = 0;
//  let i = 5;  //initialization outside of while loop
//  while(i <= 15){
//      sum += i
//      i += 1
//  }
//  console.log(sum)

// const luckyNumber = 13;

// if(luckyNumber > 10) {
//     console.log("big number")
// } else {
//     console.log("small nummber")
// }

// // condition ? do true stuff : do false stuff

// luckyNumber > 10 ? console.log("big number") : console.log("small nummber");
// console.log(luckyNumber > 10 ? "big number" : "small number")

// const num1 = 69;
// const num2 = 96;

// const biggerNum = num1 > num2 ? num1 : num2 ;

// let isRunning = true;
// let energy = 100;

// while(isRunning) {
//     if(energy % 2 === 1) {
//         energy -= 5
//     } else {
//         energy += 3
//     }
//     if(energy <= 0 ) {
//         isRunning = false;
//     }
//     console.log(energy)
// }

// if(luckyNumber % 2 === 1) {
//     console.log("ODD CHOICE")
// }

// 1. Write a loop that sums all the numbers from 5 to 15. (inclusive - numbers 5
// and 15 should be part of the final sum)
// Do a for loop and a while loop.

// let sum = 0;
// for(let i = 5; i <= 15; i += 1 ) {
//     sum += i
// }
// console.log(sum)

// let sum = 0;
//  let i = 5;  //initialization outside of while loop
//  while(i <= 15){
//      sum += i
//      i += 1
//     }
//     console.log(sum)

// 2. Write a block that multiplies all numbers from 9 to 1. (1 *  2 * 3)
// let product = 1;
// for(let i = 9; i >= 1; i = i - 1) {
//     product = product * i
// }
// console.log(product)

// let prod = 1;
// let i = 9;
// while(i >= 1) {
//     prod = prod * i
//     i = i - 1;
// }
// console.log(prod)

// 3. Write a loop from that prints all the numbers from 1 to 20. Your loop should
// end prematurely when it hits 17.

// for(let i = 1; i <= 20; i += 1) {
//     console.log(i);
//     if(i === 3) break;
// }

// let i = 1;
// while(i <= 20) {
//     console.log(i)
//     if(i === 3) {
//         break;
//     }
//     i += 1;
// }

// 4. Write a loop that iterates from 100 to 0.
// for(let i = 100; i >= 0 ; i--) {
//     console.log(i)
// }
// let i = 100;
// while(i >= 0) {
//     console.log(i);
//     i--;
// }

// 5. Do it again for while.

// 6. Update the previous for loop to print only numbers that are divisible
// by 3 and 5. Numbers that are divisible by 9 should instead print Crazy 9s.

for (let i = 100; i >= 0; i--) {
  if (i % 9 === 0) {
    console.log("Crazy 9s");
  } else if (i % 3 === 0 && i % 5 === 0) {
    console.log(i);
  }
}

// 7. write a loop from 100 to 0 that only
//  prints multiples of 10.
for (let i = 100; i >= 0; i -= 1) {
  if (i % 10 === 0) {
    console.log(i);
  }
}
for (let i = 100; i >= 0; i -= 10) {
  console.log(i);
}
