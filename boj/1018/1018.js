// const fs = require("fs");
// const inputData = fs.readFileSync("./test").toString().trim().split("\n");

// const [Y, X] = inputData[0].split(" ").map((n) => parseInt(n));

// inputData.shift();

// const board = [...inputData].map((row) => {
//   return row.split("").map((cell) => cell);
// });

// function setPoint({ newX, newY, firstCell, count }) {
//   return {
//     x: newX,
//     y: newY,
//     endX: newX + 7,
//     endY: newY + 7,
//     firstCell,
//     count,
//   };
// }

// //시작x, 시작y, 끝x,끝y, 첫번째원소 정하고 카운터 리셋

// //시작x, 시작y  + 8번째가 전체크기보다 크면 리턴

// //세다가 최근 카운트보다 넘어가면 다음 체스판 체크

// //지금위치 - 처음위치 좌표가 홀수면 다른원소 짝수면 같은원소
// // console.log(board);
// function countPaintCells(arr) {
//   let index = { x: 0, y: 0, count: 0 };
//   //   console.log(X, Y, index.x, index.y);

//   //
//   while (index.y <= Y - 8 && index.x <= X - 8) {
//     // console.log("와일문들어왔다 : ", index);
//     const { x, y } = index;
//     let p;
//     for (let b = 0; b < 2; b++) {
//       let firstCell = b === 0 ? "B" : "W";
//       p = setPoint({ newX: x, newY: y, count: 0, firstCell });
//       //   console.log("statrP :", p, index);
//       outfor: for (let i = p.y; i <= p.endY; i++) {
//         for (let j = p.x; j <= p.endX; j++) {
//           //0,0일때 제외 count가 원래 index.count보다 크면 탈출
//           if (!(p.x == 0 && p.y == 0 && b == 0) && p.count > index.count) {
//             p.count -= 1;
//             break outfor;
//           }
//           const currentCell = arr[i][j];
//           //좌표차가 짝수면 같은셀, 홀수면 다른셀이어야함,
//           const isCorrectCell =
//             (i - x + j - y) % 2 == 0
//               ? currentCell === firstCell
//               : currentCell !== firstCell;

//           p.count += parseInt(isCorrectCell ? 0 : 1);
//           //   console.log(p, i, j, isCorrectCell);
//         }
//       }
//       index.count = p.count;
//     }
//     // console.log("포문돌았다 :", p);
//     if (X - p.x > 8) {
//       index.x += 1;
//     } else {
//       index.x = 0;
//       index.y += 1;
//     }
//   }
//   return index.count;
// }
// console.log(countPaintCells(board));

const fs = require("fs");
const inputData = fs.readFileSync("./test").toString().trim().split("\n");

const [Y, X] = inputData[0].split(" ").map((n) => parseInt(n));

inputData.shift();

const board = [...inputData].map((row) => {
  return row.split("").map((cell) => cell);
});

function setPoint({ newX, newY, firstCell, count }) {
  return {
    x: newX,
    y: newY,
    endX: newX + 7,
    endY: newY + 7,
    firstCell,
    count,
  };
}

//시작x, 시작y, 끝x,끝y, 첫번째원소 정하고 카운터 리셋
//시작x, 시작y  + 8번째가 전체크기보다 크면 리턴
//세다가 최근 카운트보다 넘어가면 다음 체스판 체크
//지금위치 - 처음위치 좌표가 홀수면 다른원소 짝수면 같은원소

function countPaintCells(arr) {
  let buffer = { x: 0, y: 0, count: 0 };

  while (buffer.y <= Y - 8 && buffer.x <= X - 8) {
    const { x, y } = buffer;
    let p;
    for (let b = 0; b < 2; b++) {
      let firstCell = b === 0 ? "B" : "W";
      p = setPoint({ newX: x, newY: y, count: 0, firstCell });
      outfor: for (let i = p.y; i <= p.endY; i++) {
        for (let j = p.x; j <= p.endX; j++) {
          //0,0일때, b==0일때(첫번째체크) 제외 count가 원래 buffer.count보다 크면 탈출
          if (!(p.x == 0 && p.y == 0 && b == 0) && p.count > buffer.count) {
            p.count -= 1;
            break outfor;
          }
          const currentCell = arr[i][j];
          const isCorrectCell =
            (i - x + j - y) % 2 == 0
              ? currentCell === firstCell
              : currentCell !== firstCell;

          p.count += parseInt(isCorrectCell ? 0 : 1);
        }
      }
      buffer.count = p.count;
      //   console.log(p, X, buffer);
    }
    if (p.x == X - 8) {
      buffer.x = 0;
      buffer.y += 1;
    } else {
      buffer.x += 1;
    }
  }
  return buffer.count;
}
console.log(countPaintCells(board));
