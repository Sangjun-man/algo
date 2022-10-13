const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./test";
let input = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

const N = input.shift();
let answer = [];

// function countPeople(k, b, sum) {
//   let result = 0;
//   if (k == 0) return 0;
//   if (1 < k) {
//     for (let i = 0; i < k; i++) {
//       result += countPeople(k - 1, i, sum);
//     }
//   } else {
//     let counts = 0;
//     for (let i = 1; i <= b; i++) {
//       counts += i;
//     }
//     result += counts;
//   }
//   return result;
// }

for (let n = 0; n < N; n++) {
  const [k, b] = input;
  input = input.slice(2, input.length);
  const people = countPeople(k, b, 0);
  answer.push(people);
}

console.log(answer.join("\n"));
