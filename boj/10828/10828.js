const fs = require("fs");
const inputData = fs.readFileSync("./test").toString().trim().split("\n");

const testCase = [...inputData];

testCase.shift();

const stack = [];

for (let i = 0; i < testCase.length; i++) {
  const type = testCase[i];
  console.log(stack);
  switch (type) {
    case "top":
      console.log(stack[stack.length - 1] || -1);
      continue;
    case "size":
      console.log(stack.length);
      continue;
    case "empty":
      console.log(stack.length ? 0 : 1);
      continue;
    case "pop": {
      if (stack.length === 0) {
        console.log(-1);
        continue;
      }
      const a = stack.pop();
      console.log(a);
      continue;
    }
    default: {
      const int = parseInt(type.split(" ")[1]);
      stack.push(int);
      continue;
    }
  }
}
