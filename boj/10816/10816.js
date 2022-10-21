const fs = require("fs");
const filePath = process.platform == "linux" ? "/dev/stdin" : "./test";

const input = fs.readFileSync(filePath).toString().split("\n");

let answer = [];
const N = Number(input[0]);
const cardArr = input[1].split(" ").map(Number);
const M = Number(input[2]);
const checkArr = input[3].split(" ").map(Number);

const set = {};

cardArr.forEach((num) => {
  if (!set[num]) set[num] = 1;
  else set[num] += 1;
});
checkArr.forEach((check) => {
  if (!set[check]) {
    answer.push(0);
    return;
  }
  answer.push(set[check]);
});

console.log(answer.join(" "));
