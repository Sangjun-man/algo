const fs = require("fs");
const inputData = fs.readFileSync("./test").toString().trim().split("\n");

const [N, A, M, MList] = inputData.map((row) =>
  row.length === 1 ? parseInt(row) : row.split(" ")
);

function createCheckTable(arr) {
  const table = {};
  arr.forEach((a) => (table[a] = true));
  return table;
}

const ATable = createCheckTable(A);

// MList.forEach((num) => (ATable[num] ? console.log(1) : console.log(0)));

const answerList = MList.map((num) => (ATable[num] ? 1 : 0));

console.log(answerList.join("\n").trim());
