const fs = require("fs");
const inputData = fs.readFileSync("./test").toString().trim().split("\n");
inputData.pop();
const result = [];

function checkF(str) {
  for (let i = 0; i < Math.ceil(str.length / 2); i++) {
    const check = str[i] == str[str.length - 1 - i];
    if (!check) {
      return "no";
    }
  }
  return "yes";
}

inputData.forEach((numStr) => result.push(checkF(numStr)));
result.forEach((elem) => console.log(elem));
