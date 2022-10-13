const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./test";
let input = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

const N = input.shift();

for (let n = 0; n < N; n++) {
  const [k, b] = input;
  input = input.slice(2, input.length);

  const count = new Array(k + 1).fill(new Array(b + 1).fill(0));

  for (let i = 1; i <= b; i++) {
    count[0][i] = i;
  }

  for (let i = 1; i <= k; i++) {
    for (let j = 1; j <= b; j++) {
      count[i][j] = count[i - 1][j] + count[i][j - 1];
    }
  }
  console.log(count[k][b]);
}
