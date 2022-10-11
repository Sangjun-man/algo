const fs = require("fs");
const input = fs.readFileSync("./test").toString().trim().split("\n");

const arr = input.map((a) => parseInt(a));

function maxAndIndex(arr) {
  const maxAndIndex = [0, 0];
  for (let i = 0; i < 9; i++) {
    if (maxAndIndex[0] < arr[i]) {
      maxAndIndex[0] = arr[i];
      maxAndIndex[1] = i + 1;
    }
  }
  console.log(maxAndIndex[0]);
  console.log(maxAndIndex[1]);
}

maxAndIndex(arr);
