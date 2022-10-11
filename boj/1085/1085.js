const fs = require("fs");
const inputData = fs
  .readFileSync("./test")
  .toString()
  .trim()
  .split(" ")
  .map((n) => +n);

const [x, y, w, h] = inputData;

const a = w - x < x ? w - x : x;
const b = h - y < y ? h - y : y;

let answer = a < b ? a : b;

console.log(answer);
