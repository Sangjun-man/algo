const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./test";
const input = fs.readFileSync(filePath).toString().split("\n");
let a, b;
console.log((a = performance.now()));
const [N, M, B] = input.shift().split(" ").map(Number);
const Block = input.map((row) => row.split(" ").map(Number));

let height = 0;
let time = Infinity;

for (let z = 0; z <= 256; z++) {
  let getBlock = 0;
  let setBlock = 0;

  for (let y = 0; y < N; y++) {
    for (let x = 0; x < M; x++) {
      let d = Block[y][x] - z;
      //1번케이스, 현재높이가 낮음, 블록 제거
      if (d > 0) getBlock += d;
      else if (d == 0);
      else
        // 2번케이스, 현재높이가 높음, 블록 설치
        setBlock -= d;
    }
  }
  //블록 부족하면 넘어가기
  if (getBlock + B >= setBlock) {
    const currentTime = getBlock * 2 + setBlock;
    if (currentTime <= time) {
      time = currentTime;
      height = z;
    }
  }
}

console.log(`${time} ${height}`);

console.log((b = performance.now()));

console.log(b - a);
