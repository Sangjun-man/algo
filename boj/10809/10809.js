const fs = require("fs");
const input = fs.readFileSync("./test").toString();

const alphabet = "abcdefghijklmnopqrstuvwxyz";

let answer = new Array(alphabet.length).fill(-1);

for (let i = 0; i < input.length; i++) {
  const index = alphabet.indexOf(input[i]);
  if (answer[index] === -1) answer[index] = i;
}
console.log(answer.join(" "));
