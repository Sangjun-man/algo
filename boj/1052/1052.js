const fs = require("fs");
const inputData = fs.readFileSync("./test").toString().trim();

const [N, K] = inputData.split(" ").map((n) => parseInt(n));

// 인풋 - 물병 N개, 총 N리터의 물, 한번에 들고갈 수 있는 물병개수 K

//같은양이 들어있는 물병은 합칠수있다
//1+1 2+2 ... 2^n2^n,
//2^n리터 물은 하나로 합쳐서 뺄 수 있다 -> 합친 물병이 K개를 넘으면 안된다

//사야하는 물을 최소화 해야한다 -> K개슬롯을 최대한 채워야한다
//K개까지 2의 n n-1 n-2 제곱을 빼면서나머지가 0인지 확인
//마지막 슬롯에서 남은 물 처리할 수 있는 물병 사기 -> 남은 물 리터보다 큰 2의 n제곱수에서 남은물 빼주면됌
function calcLargestDegree(N) {
  let x = 1;
  let xDegree = 0;
  while (N > x) {
    x *= 2;
    xDegree++;
  }
  return xDegree - 1;
}

function calcBottleQuantity(N, K, degree) {
  //   console.log(N, K, degree);
  let remainWater = N;
  let slot = K;
  let d = degree;
  let needBottle = 0;
  let subtractWater = 0;
  while (slot > 1) {
    subtractWater = Math.pow(2, d);
    // console.log(subtractWater, remainWater, slot);
    if (remainWater % subtractWater === 0) {
      remainWater = 0;
      break;
    }

    if (remainWater < subtractWater) {
      d--;
      continue;
    }
    remainWater -= subtractWater;
    d--;
    slot--;
  }

  if (remainWater === 0) {
    needBottle == 0;
  } else {
    needBottle += Math.pow(2, calcLargestDegree(remainWater) + 1) - remainWater;
  }
  return needBottle;
}

console.log(calcBottleQuantity(N, K, calcLargestDegree(N)));
