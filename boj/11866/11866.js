const fs = require("fs");
const filePath = process.platform == "linux" ? "/dev/stdin" : "./test";

const input = fs.readFileSync(filePath).toString().split(" ").map(Number);

const [N, K] = input;

const arr = [];
const answer = [];
let size = N;

for (let i = 1; i <= N; i++) {
  arr.push(i);
}

while (0 < size) {
  let count = K - 1;
  let front;
  while (0 < count) {
    const front = arr.shift();
    arr.push(front);
    count--;
  }
  front = arr.shift();
  answer.push(front);
  size--;
}

console.log(`<${answer.join(", ")}>`);
