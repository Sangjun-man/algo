const fs = require("fs");
const inputData = fs.readFileSync("./test").toString().trim();

let sum = 0;

const validateNumList = inputData.split(" ").map((a) => {
  const n = parseInt(a);
  if (n == 0) return 0;
  const squared = Math.pow(n, 2);
  //   console.log(n);
  sum += squared;
  return squared;
});

// console.log(validateNumList, sum);

console.log(sum % 10);
