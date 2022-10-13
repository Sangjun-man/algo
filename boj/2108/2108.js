const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./test";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const N = input.shift();

const mode = {};
let modeCheck = { max: 0, list: [] };

const obj = {
  average: 0,
  center: 0,
  mode: 0,
  range: 0,
};
input.sort((a, b) => {
  return a - b;
});

input.forEach((a) => {
  obj.average += a;
  if (!mode[a]) {
    mode[a] = 1;
  } else mode[a]++;
});

for (let key in mode) {
  if (mode[key] > modeCheck.max) {
    modeCheck.max = mode[key];
    modeCheck.list = [key];
    continue;
  }
  if (mode[key] === modeCheck.max) {
    modeCheck.list.push(key);
  }
}

modeCheck.list.sort((a, b) => a - b);

obj.range = Math.abs(input[0] - input[input.length - 1]);
obj.center = input[parseInt(input.length / 2)];
obj.average = Math.round(obj.average / N);
obj.mode = modeCheck.list.length > 1 ? modeCheck.list[1] : modeCheck.list[0];
console.log(Object.values(obj).join("\n"));
