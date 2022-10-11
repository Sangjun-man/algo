const fs = require("fs");
const input = fs.readFileSync("./test").toString().trim().split("\n");

const N = input[0];
const Arr = input[1].split(" ");

const T = Arr.map((n) => BigInt(n)).sort((a, b) => (a < b ? -1 : 1));

// 두기구 근손실 값을 더했을 때 근손실 M이 최소
// 홀수 -> 제일 높은 운동기구 하나를 기준으로 두고

let M = BigInt(0);
let [startI, endI] = [0, T.length - 1];

if (T.length % 2 === 1) {
  M += T[endI];
  endI--;
} else {
  M += T[endI] + T[startI];
  endI--;
  startI++;
}

function CheckNext() {
  let newM = T[endI] + T[startI];
  endI--;
  startI++;

  if (M < newM) {
    M = newM;
  }
}

while (startI < endI) {
  CheckNext();
}

console.log(String(M));
