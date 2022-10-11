const fs = require("fs");
const inputData = fs
  .readFileSync("./test")
  .toString()
  .trim()
  .split("\n")
  .map((arr) => arr.split(" "));

const [count, scoreList] = inputData;

function calcNewAverage(List) {
  const scoreList = List.sort((a, b) => b - a);
  const max = scoreList[0];

  let sum = 0;

  scoreList.forEach((score) => {
    if (max == 0) return;
    const newScore = (score / max) * 100;
    sum += newScore;
    // return newScore;
  });

//   console.log(scoreList, max, sum, count);
  return sum / count;
}

console.log(calcNewAverage(scoreList));
