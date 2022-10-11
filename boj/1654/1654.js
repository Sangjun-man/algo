const fs = require("fs");
const inputData = fs.readFileSync("./test").toString().trim().split("\n");

const [K, N] = inputData[0].split(" ").map((n) => +n);

let fullLength = 0;
let maxLan = 0;
let start = 0;
let mid = 0;
let count = 0;
let answer = 0;

const lan = inputData.slice(1, inputData.length).map((n) => {
  const num = +n;
  fullLength += num;
  if (maxLan < num) maxLan = num;
  return num;
});

maxLan *= 2;
while (start + 1 < maxLan) {
  mid = parseInt((maxLan + start) / 2);
  lan.forEach((n) => {
    count += parseInt(n / mid);
  });
  if (count >= N) {
    start = mid;
  } else {
    maxLan = mid;
  }
  console.log(mid, count, start, maxLan);
  count = 0;
}
answer = start;

console.log(answer);
