const fs = require("fs");
const input = fs.readFileSync("./test").toString().trim();

function factorial(n, ans) {
  console.log(n, ans);
  if (n == 0) {
    return 1;
  } else if (n == 1) {
    return ans;
  } else {
    ans *= n;
    return factorial(n - 1, ans);
  }
}

console.log(factorial(input, 1));

// function factorial(n, ans) {
//   console.log(n, ans);
//   if (n == 0) {
//     return 1;
//   } else if (n == 1) {
//     return ans;
//   } else {
//     return factorial(n - 1) * n;
//   }
// }

// console.log(factorial(input, 1));
