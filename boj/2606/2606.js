const fs = require("fs");
const { resourceLimits } = require("worker_threads");
const filePath = process.platform == "linux" ? "/dev/stdin" : "./test";
const input = fs.readFileSync(filePath).toString().split("\n");

const M = input.shift();
const K = input.shift();

const pairList = input.map((str) => str.split(" ").map(Number));

const connection = {};
let searchList = [];
const check = {};
const infection = {};
let answer = 0;

for (let pair of pairList) {
  connect(pair, connection);
}
Object.keys(connection).forEach((key) => {
  infection[key] = false;
  check[key] = false;
  searchList.push(key);
});

infection["1"] = true;
infect(1);

Object.entries(infection).forEach(([id, infection]) => {
  if (id !== "1" && infection) {
    answer += 1;
  }
});

console.log(answer);

function infect(id) {
  check[id] = true;
  //   console.log("infect: ", id);
  if (infection[id]) {
    connection[id].forEach((nextId) => {
      if (!check[nextId]) {
        infection[nextId] = true;
        infect(nextId);
      }
    });
  }
}

function connect(pair, obj) {
  const [a, b] = pair;

  if (!obj[a]) obj[a] = [b];
  else {
    obj[a].push(b);
  }
  if (!obj[b]) obj[b] = [a];
  else {
    obj[b].push(a);
  }
}
