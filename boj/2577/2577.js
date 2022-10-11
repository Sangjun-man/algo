const fs = require("fs");
const input = fs.readFileSync("./test").toString().trim().split("\n");
const arr = input.map((a) => parseInt(a));

function multiply(arr) {
  let result = 1;
  for (let i = 0; i < arr.length; i++) {
    result *= arr[i];
  }
  return result;
}

function checkNumberAmount(number) {
  const numDivide = number.toString().split("");
  const numAmountArr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  for (let i = 0; i < numDivide.length; i++) {
    const x = numDivide[i];
    numAmountArr[parseInt(x)] += 1;
  }
  for (let i = 0; i < numAmountArr.length; i++) {
    console.log(numAmountArr[i]);
  }
}

checkNumberAmount(multiply(arr));
