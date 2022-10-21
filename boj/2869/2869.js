const fs = require("fs");
const filePath = process.platform == "linux" ? "/dev/stdin" : "./test";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const [A, B, V] = input;

const day = A - B;
const lastDay = Math.ceil((V - A) / day);
console.log(lastDay + 1);
