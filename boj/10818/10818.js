const fs = require("fs");
const input = fs.readFileSync("./test").toString().trim().split("\n");

const n = input[0];
const arr = input[1].split(" ").map((a) => parseInt(a));

function minMaxCheck(n, arr) {
  let max = arr[0];
  let min = arr[0];

  for (let i = 1; i < n; i++) {
    const x = arr[i];
    if (max < x) {
      max = x;
    } else if (x < min) {
      min = x;
    }
  }
  console.log(min, max);
}

minMaxCheck(n, arr);
