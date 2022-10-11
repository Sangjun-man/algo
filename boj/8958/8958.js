const fs = require("fs");
const inputData = fs.readFileSync("./test").toString().trim().split("\n");

const count = inputData[0];
const oxMatrix = inputData;
oxMatrix.shift();

let scoreBuffer = 0;
const scoreBoard = new Array(parseInt(count)).fill(0);
// console.log(scoreBoard);
for (let i = 0; i < oxMatrix.length; i++) {
  for (let j = 0; j < oxMatrix[i].length; j++) {
    // console.log("i,j :", i, j, oxMatrix[i][j], scoreBuffer);

    if (oxMatrix[i][j] === "O") {
      scoreBuffer += 1;
      //   scoreBoard[i].push(scoreBuffer);
    } else {
      scoreBuffer = 0;
    }
    // console.log("score :", scoreBuffer);
    scoreBoard[i] += parseInt(scoreBuffer);
  }
  scoreBuffer = 0;
  //   console.log(scoreBoard);
}

for (let i = 0; i < scoreBoard.length; i++) {
  console.log(scoreBoard[i]);
}
