const fs = require("fs");
const filePath = process.platform == "linux" ? "/dev/stdin" : "./test";
const input = fs.readFileSync(filePath).toString().split(" ").map(Number);

const [M, N] = input;
const prime = new Array(N + 1).fill(true);
let answer = [];
prime[0] = prime[1] = false;

const root = Math.floor(Math.sqrt(N));

for (let i = 2; i <= root; i++) {
  if (prime[i]) {
    for (let j = 2; prime[i * j] <= N; j++) {
      prime[i * j] = false;
    }
  }
}

for (let x = M; x <= N; x++) {
  if (prime[x]) {
    answer.push(x);
  }
}
console.log(answer.join("\n"));
