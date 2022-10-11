const fs = require("fs");
const input = fs.readFileSync("./test").toString().trim().split("\n");

const N = +input.shift();
const assign = input.map((a) => {
  if (a[0] == 0) return [];
  return a.split(" ").map((n) => +n);
});

console.log(N);
const stack = [];
let pointer = 0;
let time = 0;
let score = 0;

while (time < N) {
  let current;

  //지금 시간에 주어진 과제가 있나? 있으면 현재 처리 과제로 등록
  console.log("assign : ", assign[time]);
  if (assign[time].length) {
    let newAssign = assign[time];
    stack.push(newAssign);
    pointer++;
    current = newAssign;
  }
  //없으면 스택 맨 위의 값을 처리과제로 등록
  else {
    if (0 < pointer) {
      current = stack[pointer - 1];
    } else {
      time++;
      continue;
    }
  }

  console.log(time, current, "stack :", stack, pointer);
  current[2]--;
  console.log(current);

  if (current[2] == 0) {
    let endAssign = stack.pop();
    score += endAssign[1];
    pointer--;
  }
  current = null;
  time++;
}

console.log(score);
