const fs = require("fs");
const input = parseInt(fs.readFileSync("./test").toString().trim());
const starArr = [];
let ans = "";
for (let i = 0; i < input; i++) {
  starArr.push(new Array(input).fill("*", 0, input));
}

function centerHole(n, x, y) {
  const cn = n / 3;
  const [cx, cy] = [x + cn, y + cn];
  for (let i = cx; i < cx + cn; i++) {
    for (let j = cy; j < cy + cn; j++) {
      starArr[i][j] = " ";
    }
  }
}

//재귀돌리기
function recursive(n, x, y) {
  if (n % 3 !== 0) return;
  if (n === 1) {
    return;
  } else {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        const [nextN, nextX, nextY] = [n / 3, x + (n / 3) * i, y + (n / 3) * j];
        recursive(nextN, nextX, nextY);
      }
    }
    centerHole(n, x, y);
  }
}
recursive(input, 0, 0);

//이차원 배열 출력하기
starArr.forEach((a) => {
  a.forEach((t) => (ans += t));
  ans += "\n";
});
console.log(ans);
