const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./test";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const N = input.shift();

class Stack {
  constructor() {
    this._s = [];
    this._i = 0;
    this._arr = [];
  }

  push(n) {
    if (!n) return;
    this._s.push(n);
    this._i += 1;
    this._arr.push("+");
  }
  pop() {
    if (!this._i) return;
    this._i -= 1;
    this._arr.push("-");
    return this._s.pop();
  }
  size() {
    return this._i;
  }
  get top() {
    if (!this._i) return;
    return this._s[this._i - 1];
  }
  get answer() {
    return this._arr;
  }
}
const stack = new Stack();
let i = 1;
let j = 0;
while (i <= N + 1 && j < N) {
  const num = input[j];
  //   console.log(i, j, num, stack.top, stack._s);
  if (!stack.size()) {
    stack.push(i);
    i++;
    continue;
  }

  if (num === stack.top) {
    stack.pop();
    j++;
  } else {
    stack.push(i);
    i++;
  }
}
console.log(stack.size() ? "NO" : stack.answer.join("\n"));
