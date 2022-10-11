const fs = require("fs");
const input = fs.readFileSync("./test").toString().trim();

function fibonacci(n) {
  if (n === 0) {
    return 0;
  } else if (n === 1 || n === 2) {
    return 1;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

console.log(fibonacci(input));
