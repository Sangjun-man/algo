const fs = require("fs");
const inputData = fs.readFileSync("./test").toString().trim().split("\n");

const A = inputData[1].split(" ").map((n) => +n);
const MList = inputData[3].split(" ").map((n) => +n);

A.sort((a, b) => a - b);

let answer = MList.map((n) => {
  let start = 0;
  let end = A.length - 1;
  let res = 0;
  while (start <= end) {
    let center = parseInt((start + end) / 2);
    // console.log(start, end, center);

    if (n === A[center]) res = 1;
    if (n > A[center]) {
      start = center + 1;
    } else {
      end = center - 1;
    }
  }
  return res;
});

console.log(answer.join("\n"));
