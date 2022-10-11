const fs = require("fs");
const input = fs.readFileSync("./test").toString().trim();

const numRegExp = /^[0-9]+$/;

function splitStrToArr(str) {
  let buffer = ``;
  const arr = [];

  for (let i = 0; i < String(str).length; i++) {
    if (numRegExp.test(str[i])) {
      buffer = `${buffer}${str[i]}`;
    } else {
      arr.push(buffer);
      arr.push(str[i]);
      buffer = "";
    }

    if (i == String(str.length - 1)) {
      arr.push(buffer);
    }
  }
  arr.forEach((elem, i) => {
    arr[i] = parseInt(elem) || elem;
  });

  return arr;
}

function minimum(arr) {
  let left = 0,
    right = 0,
    isBracketOpen = false,
    beforeOperator = null;

  for (let i = 0; i < arr.length; i++) {
    if (i === 0) {
      left = arr[i];
      continue;
    }
    // - 부호를 지날때, 괄호를 열거나 닫음
    if (!parseInt(arr[i])) {
      //typeof arr === 'string'
      if (arr[i] === "-") {
        isBracketOpen = !isBracketOpen;
      }
      beforeOperator = arr[i];
      continue;
    }

    if (isBracketOpen) {
      if (beforeOperator === "+") {
        right += arr[i];
      } else {
        //이전 괄호 계산값 left에 적용, 새로운 괄호계산 시작을 위해 숫자 초기화
        left -= right;
        right = arr[i];
      }
    } else {
      if (beforeOperator === "+") {
        left += arr[i];
      } else {
        isBracketOpen = true;
        right += arr[i];
      }
    }
  }
  // 마지막 숫자 지난 후 처리, 괄호 닫혀있으면 +계산 이후라 따로 뭘 할 필요 없음
  if (isBracketOpen) {
    left -= right;
  }
  return left;
}

const parseArray = splitStrToArr(input);
console.log(minimum(parseArray));
