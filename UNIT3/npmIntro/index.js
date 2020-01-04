// console.log("hello,");
// setTimeout(() => {
//     console.log("I am");    
// }, 0);
// console.log("Yoda");

// const fs = require('fs');
// fs.readFile('demo.txt', (err, data) => {
//     console.log(data)
// })

// fs.writeFile("test.txt", "Hey there!", function(err) {
//   if (err) {
//     return console.log(err);
//   }
//   console.log("The file was saved!");
// }); 
// const math = require("./math.js");
//Object destructoring
const { sum } = require("./math.js");
const axios = require("axios");
// console.log(math)
// console.log(sum(4, 5))
axios.get("https://ghibliapi.herokuapp.com/films").then( res => {
    console.log(res)
    console.log(res.data)
} )