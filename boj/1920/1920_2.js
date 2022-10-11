const fs = require("fs");
const inputData = fs.readFileSync("./test").toString().trim().split("\n");

const [N, A, M, MList] = inputData.map((row) =>
  row.length === 1 ? parseInt(row) : row.split(" ")
);

const set = new Set(A);

const result = MList.map((num) => (set.has(num) ? 1 : 0));

console.log(result.join("\n"));
