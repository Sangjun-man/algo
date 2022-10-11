const fs = require("fs");
const inputData = fs.readFileSync("./test").toString().trim().split("\n");

const [N, K] = inputData[0].split(" ").map((n) => parseInt(n));
const coin = [...inputData].map((n) => parseInt(n));
coin.shift();
coin.sort((a, b) => b - a);

function numberOfCoins(K, coin) {
  let remain = K;
  let count = 0;
  let i = 0;
  while (remain > 0) {
    let subTract = coin[i];
    if (remain >= subTract) {
      remain -= subTract;
      count++;
    } else {
      i++;
    }
  }
  return count;
}

console.log(numberOfCoins(K, coin));
