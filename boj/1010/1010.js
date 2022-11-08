const fs = require("fs");
const filePath = process.platform == "linux" ? "/dev/stdin" : "./test";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = input.shift();
const arr = input.map((str) => str.split(" ").map(Number));

const dp = Array.from({ length: 31 }, () =>
  Array.from({ length: 31 }, () => 0)
);

for (let n = 1; n <= 30; n++) {
  for (let m = 1; m <= 30; m++) {
    if (n === 1) {
      dp[n][m] = m;
    } else if (n > m) continue;
    else if (n === m) dp[n][m] = 1;
    else {
      dp[n][m] = dp[n - 1][m - 1] + dp[n][m - 1];
    }
  }
}

arr.forEach(([n, m]) => {
  console.log(dp[n][m]);
});
