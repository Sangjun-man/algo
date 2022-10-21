const fs = require("fs");
const filePath = process.platform == "linux" ? "/dev/stdin" : "./test";

const input = fs.readFileSync(filePath).toString().split("\n");

const N = input.shift();

let answer = [];
for (let i = 0; i < N; i++) {
  const str = input[i];
  let stack = 0;

  let result = "YES";
  let broke = false;
  for (let j = 0; j < str.length; j++) {
    const check = str[j];
    if (check === "(") {
      //   console.log("push", stack);
      stack++;
    } else {
      //   console.log("pop", stack);

      if (stack == 0) {
        // console.log("break");
        broke = true;
        break;
      }
      stack--;
    }
  }
  result = stack == 0 && !broke ? "YES" : "NO";
  answer.push(result);
}

console.log(answer.join("\n"));
