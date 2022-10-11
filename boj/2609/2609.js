const fs = require("fs");
const inputData = fs
  .readFileSync("./test")
  .toString()
  .trim()
  .split(" ")
  .map((n) => parseInt(n));

const sorted = inputData.sort((a, b) => a - b);
const [a, b] = sorted;

console.log(a, b);
let min = 0;
let max = 0;

for (let i = 1; i <= a; i++) {
  if (a % i === 0 && b % i === 0) {
    min = i;
  }
}
for (let j = b * a; j >= b; j--) {
  if (j % a === 0 && j % b === 0) {
    max = j;
  }
}
console.log(min);
console.log(max);
//최대공약수
//작은수를 max로 둘다 나눴을 때 나머지 0인거, 최대값
//최대공배수
//둘다 곱하고 최대수까지 -1 해가면서 둘다 나머지가 0인경우
