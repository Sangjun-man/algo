const fs = require("fs");
const inputData = fs.readFileSync("./test").toString().trim();

const countObj = {};
function countUp(str) {
  if (str === "") return "?";
  const alphaBetList = str.split("");
  alphaBetList.forEach((a) => {
    const x = a.toLowerCase();
    if (!countObj[x]) countObj[x] = 1;
    else {
      countObj[x] += 1;
    }
  });

  let maxCount = 0;
  let mostAlphaBet = "";
  let sameCount = false;

  Object.keys(countObj).forEach((a) => {
    if (countObj[a] > maxCount) {
      sameCount = false;
      mostAlphaBet = a;
      maxCount = countObj[a];
    } else if (countObj[a] == maxCount) {
      sameCount = true;
    } else {
      return;
    }
  });

  if (sameCount) return "?";
  else {
    return mostAlphaBet.toUpperCase();
  }
}

console.log(countUp(inputData));
