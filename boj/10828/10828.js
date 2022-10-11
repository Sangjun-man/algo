const fs = require("fs");
const inputData = fs.readFileSync("./test").toString().trim().split("\n");

class Stack {
  _stack = [];
  length = 0;

  push(a) {
    this.length += 1;
    this._stack.push(a);
  }
  pop() {
    if (!this.length) return -1;
    this.length -= 1;
    return this._stack.pop();
  }
  size() {
    return this.length;
  }
  top() {
    return this.length ? this._stack[this.length - 1] : -1;
  }
  empty() {
    return this.length ? 0 : 1;
  }
}

const stack = new Stack();
let answer = [];

for (let i = 1; i < inputData.length; i++) {
  const [type, value] = inputData[i].split(" ");

  switch (type) {
    case "top":
      answer.push(stack.top());
      continue;
    case "size":
      answer.push(stack.size());
      continue;
    case "empty":
      answer.push(stack.empty());
      continue;
    case "pop": {
      answer.push(stack.pop());
      continue;
    }
    case "push": {
      stack.push(value);
    }
  }
}

//시간초과가 떠서 answer에 담고 한번에 console.log
console.log(answer.join("\n"));
