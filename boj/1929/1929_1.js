const fs = require("fs");
const filePath = process.platform == "linux" ? "/dev/stdin" : "./test";
const input = fs.readFileSync(filePath).toString().split(" ").map(Number);

const [M, N] = input;

let answer = [];
function getPrimeNumber(num) {
  //   console.log(num);
  let index = 2;
  if (num % index === 0) return false;

  index += 1;
  while (index < num) {
    if (num % index === 0) {
      //   console.log(index);
      return false;
    }
    index += 2;
  }
  return num;
}

for (let i = M; i <= N; i++) {
  //   console.log(i);
  const isPrime = getPrimeNumber(i);
  if (isPrime) answer.push(isPrime);
}
answer.sort((a, b) => a - b);
console.log(answer.join("\n"));
