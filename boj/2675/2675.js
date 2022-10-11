const fs = require("fs");
const input = fs.readFileSync("./test").toString().trim().split("\n");

const N = input[0];
const A = input.slice(1, input.length);

let answer = "";

A.forEach((a) => {
  const [R, S] = a.split(" ");
  for (let i = 0; i < S.length; i++) {
    for (let j = 0; j < R; j++) {
      answer += S[i];
    }
  }
  answer += "\n";
});

console.log(answer);
