// const fs = require("fs");
// const inputData = fs.readFileSync("./test").toString().trim().split("\n");

// const arr = inputData.slice(1, inputData.length).map((n) => +n);

// function sort(s, e, arr) {
//   // console.log(arr, s, e);
//   let mid = parseInt((s + e) / 2);
//   let left = s;
//   let right = e;

//   while (left <= right) {
//     while (arr[left] < arr[mid]) left++;
//     while (arr[right] > arr[mid]) right--;
//     if (left <= right) {
//       let temp = arr[left];
//       arr[left] = arr[right];
//       arr[right] = temp;
//       left++;
//       right--;
//     }
//   }
//   if (left < e) sort(left, e, arr);
//   if (s < right) sort(s, right, arr);
//   return arr;
// }

// console.log(sort(0, arr.length - 1, arr).join("\n"));
// // console.log(arr.sort((a, b) => a - b).join("\n"));
