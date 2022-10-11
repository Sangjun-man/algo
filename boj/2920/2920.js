const fs = require("fs");
const input = fs
  .readFileSync("./test")
  .toString()
  .trim()
  .split(" ")
  .map((n) => +n);

const [ASC, DES, MIX] = ["ascending", "descending", "mixed"];

const first = input[0];

let buffer = 0;

console.log(input, first);
switch (first) {
  case 1: {
    console.log(first);
    buffer = first;
    for (let i = 1; i < input.length; i++) {
      if (buffer + 1 === input[i]) {
        buffer = input[i];
        continue;
      } else {
        return console.log(MIX);
      }
    }
    return console.log(ASC);
  }
  case 8: {
    buffer = first;
    for (let i = 1; i < input.length; i++) {
      if (buffer - 1 === input[i]) {
        buffer = input[i];
        continue;
      } else {
        return console.log(MIX);
      }
    }
    return console.log(DES);
  }
  default:
    return console.log(MIX);
}
