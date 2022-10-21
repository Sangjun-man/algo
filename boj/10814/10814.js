const fs = require("fs");
const filePath = process.platform == "linux" ? "/dev/stdin" : "./test";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((n) => n.split(" "));

const N = input.shift();

input.sort((a, b) => {
  const aAge = Number(a[0]);
  const bAge = Number(b[0]);
  return aAge - bAge;
});
console.log(input.map((people) => people.join(" ")).join("\n"));
