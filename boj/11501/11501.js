const fs = require("fs");
const inputData = fs.readFileSync("./test").toString().trim().split("\n");
const testCase = inputData
  .map((data) => data.length > 1 && data.split(" ").map((n) => parseInt(n)))
  .filter((n) => n);

// console.log();

const buy = (current, arr) => {
  console.log("buy", current, arr);
  let addSurplus = 0;
  for (let i = 0; i < arr.length; i++) {
    if (addSurplus < arr[i] - current) addSurplus = arr[i] - current;
  }
  return addSurplus;
};
const sell = (boughtList, arr) => {
  console.log(boughtList, arr);
  let sellIndexList = [];
  let allSurplus = 0;
  for (let i = 0; i < boughtList.length; i++) {
    let addSurplus = 0;
    for (let j = 0; j < arr.length; j++) {
      let surplus = arr[j] - boughtList[i];
      if (addSurplus < surplus) addSurplus = surplus;
    }
    if (addSurplus) {
      sellIndexList.push(i);
      allSurplus += addSurplus;
    }
  }
  return [sellIndexList, allSurplus];
};

function calcSurplus(stockPriceList) {
  console.log("stockPriceList:", stockPriceList);
  const s = stockPriceList;

  let boughtList = [];
  let index = 0;
  let surplus = 0;

  while (index < s.length) {
    console.log(index);
    const current = s[index];
    if (boughtList.length === 0) {
      console.log("case1");
      for (let i = index + 1; i < s.length; i++) {
        if (current < s[i]) {
          boughtList.push(current);
          console.log(boughtList);
          index++;
          break;
        }
      }
    } else {
      console.log("case2");
      const remainArr = s.slice(index - 1, s.length);
      const buyPrice = buy(current, remainArr);
      const [sellIndexList, sellPrice] = sell(boughtList, remainArr);

      console.log(buyPrice, remainArr, sellPrice);
      if (buyPrice < sellPrice) {
        console.log("case2-1");

        sellIndexList.forEach((sellIndex) => boughtList.splice(sellIndex, 1));
        surplus += sellPrice;
      } else {
        console.log("case2-2");
        boughtList.push(current);
      }
    }
    index++;
  }
  return surplus;
}

console.log(testCase.map((a) => console.log("result:", calcSurplus(a))));
/*

이득
주식 사둔 배열

전체 배열 반복

    주식 사둔 배열이 업스면
        주식 사기
            배열 조회 => 현재 주가로 나중 주가랑 비교해서 나중주가가 지금보다 높으면 무조건 삼

    주식 사둔 배열이 있으면 
        cosnt buy = 주식 사기
            최대이득 계산
        const sell = 주식 팔기
            최대이득 계산
        살지말지 선택
       -> 이득추가 addsurPlus
    이득이 없으면, 마이너스면
        넘어가기
*/
