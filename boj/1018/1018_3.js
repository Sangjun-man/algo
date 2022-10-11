let fs = require("fs");
let input = fs.readFileSync("./test").toString().trim().split("\n");

const [N, M] = input
  .shift()
  .split(" ")
  .map((n) => parseInt(n));
console.log(input[2][4]);
