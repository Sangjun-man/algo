const fs = require("fs");
const inputData = fs.readFileSync("./test").toString().trim().split("\n");

const N = parseInt(inputData.shift());
const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
// console.log(inputData);
function filterWords(arr) {
  const filteredList = {};
  arr.forEach((word) => (filteredList[`${word}`] = true));
  return Object.keys(filteredList);
}

const uniqueArr = filterWords(inputData);

uniqueArr.sort((a, b) => {
  if (a.length !== b.length) {
    result = a.length - b.length;
  }
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      return alphabet.indexOf(a[i]) - alphabet.indexOf(b[i]);
    }
  }
});

uniqueArr.forEach((a) => console.log(a));
