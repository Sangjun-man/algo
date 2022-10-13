const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./test";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const treeArr = input[0].split(" ").map(Number);

let startH = 0;
let endH = 2000000001;
// console.log(N, M);
while (startH + 1 < endH) {
  //   console.log(startH, endH);
  let midH = parseInt((startH + endH) / 2);
  let getTreeLength = 0;

  for (let i = 0; i < treeArr.length; i++) {
    const cutTree = treeArr[i] - midH;
    // console.log("더하기:", midH, cutTree, treeArr[i]);
    if (cutTree > 0) {
      getTreeLength += cutTree;
    }
  }
  //   console.log("비교 : ", M, getTreeLength);
  //나무 부족, 더 낮은 h로 계산
  if (getTreeLength >= M) {
    startH = midH;
    continue;
  }
  //나무 넘침, 더 높은 h로 계산
  if (getTreeLength < M) {
    endH = midH;
    continue;
  }
}
//mid = start + End 중간 버림, -> 중간의 왼쪽 숫자 참조, [0,1] 범위에서 왼쪽값이 Mid, -> startH를 답으로 해야함
console.log(startH);
