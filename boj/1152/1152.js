const fs = require("fs");
const inputData = fs.readFileSync("./test").toString();

function split(str) {
  if (str == " ") return 0;
  const trim = str.trim();
  const split = trim.split(" ");
  return split.length;
}
console.log(split(inputData));
