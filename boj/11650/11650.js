const fs = require("fs");
const filePath = process.platform == "linux" ? "/dev/stdin" : "./test";

const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((a) => (a.length == 0 ? a : a.split(" ").map(Number)));

const N = input.shift();

input.sort((a, b) => {
  const [x1, y1] = a;
  const [x2, y2] = b;
  if (x1 === x2) return y1 - y2;
  else return x1 - x2;
});

console.log(input.map((str) => str.join(" ")).join("\n"));
