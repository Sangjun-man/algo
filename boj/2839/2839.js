const fs = require("fs");
const inputData = fs.readFileSync("./test").toString().trim();

//정확하게 배달
const originSugar = parseInt(inputData);
const sugarBag = [5, 3];

let bagCount = 0;

let remainSugar = parseInt(inputData) % 5;
bagCount += originSugar / 5;

//5키로 봉지보다 3키로 봉지를 활용할때 더 적은 봉지가 나올수있나?
// 5kg 봉지 말고 3kg 봉지를 활용해서 담을수있는게있다,
//
// 담을수있는거 없는거 구분하기
// 1 2 3 4 /5/ 6 7 8 9 /10/ 11 12 13 14 /15/ 16 17 18 19 20
// 21 22 23 24 25
// 6 9 12 -> 5보다 큰데 3의배수, 5로 나눴을때 나머지가 3이아님

//5로 다 나누고, +5 해가면서, 다 담을수 있는지
//못담으면 -10

// console.log(originSugar, bagCount, remainSugar);

while (remainSugar <= 15) {
  if (remainSugar % sugarBag[1] === 0) {
    bagCount += remainSugar / sugarBag[1];
    break;
  }
  remainSugar += 5;
}

if (sugarBuffer == originSugar) return console.log(bagCount);
else console.log(-1);
