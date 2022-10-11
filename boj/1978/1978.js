const fs = require("fs");
const inputData = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const NList = inputData[1].split(" ").map((n) => parseInt(n));

let answer = 0;
console.log(NList);
// NList.forEach((n) => {
//   if (n === 1) return;
//   let index = 2;
//   while (index <= 100) {
//     console.log(index, n % index);
//     if (n === index) return answer++;
//     if (n % index === 0) break;
//     index++;
//   }
// });
// console.log(answer);
