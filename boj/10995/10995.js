const fs = require("fs");
const inputData = fs.readFileSync("./test").toString().trim();

const N = inputData;

let star = "";
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (i % 2 === 0) {
      star += `* `;
    } else {
      star += ` *`;
    }
  }
  star += "\n";
}
console.log(star);
