const fs = require("fs");
const n = fs.readFileSync("./test").toString().trim();

let i = 1;
let reg = /666/;
let answer = 666;

//브루트포스, 정규식으로 666체크,
while (i < n) {
  answer += 1;
  const check = reg.test(String(answer));
  if (!check) {
    continue;
  }
  i++;
}

console.log(answer);
