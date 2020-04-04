// const adder = (x) => {
//     return (y) => {
//         return x + y;
//     }
// }

const adder = x => y => x + y; 

const add5 = adder(5);
const add10 = adder(10);

// console.log(add5(6));
console.log(adder(9)(10));

