const fs = require("fs");
const inputData = fs.readFileSync("./test").toString().trim().split("\n");

const A = inputData[1].split(" ");
const MList = inputData[3].split(" ");

A.sort((a, b) => a - b);

console.log(A);
function binarySearch(n, sIndex, eIndex) {
  let index = sIndex + Math.ceil((eIndex - sIndex) / 2);

  if (n == A[index]) return index;
  if ((eIndex = sIndex)) return -1;
  else if (A[index] > n) {
    return binarySearch(n, 0, index - 1);
  } else {
    return binarySearch(n, index + 1, A.length - 1);
  }
}

MList.forEach((a) =>
  console.log(binarySearch(a, 0, A.length - 1) == -1 ? 0 : 1)
);
