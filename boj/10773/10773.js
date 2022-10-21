const fs = require("fs");
const filePath = process.platform == "linux" ? "/dev/stdin" : "./test";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const K = input.shift();

class Stack {
  constructor() {
    this.s = 0;
    this.arr = [];
  }
  push(v) {
    this.arr.push(v);
    this.s += 1;
  }
  pop() {
    if (this.s === 0) return;
    this.s -= 1;
    return this.arr.pop();
  }
  answer() {
    let answer = 0;
    this.arr.forEach((n) => {
      answer += n;
    });
    return answer;
  }
}
const stack = new Stack();

for (let i = 0; i < input.length; i++) {
  const n = input[i];
  switch (n) {
    case 0:
      stack.pop();
      break;
    default:
      stack.push(n);
  }
}
console.log(stack.answer());
