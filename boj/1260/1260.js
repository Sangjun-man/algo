const fs = require("fs");
const filePath = process.platform == "linux" ? "/dev/stdin" : "./test";
const inputString = fs.readFileSync(filePath).toString().trim();

main(inputString);

function main(inputString) {
  const input = inputString.split("\n");
  const [N, M, V] = input.shift().split(" ").map(Number);
  const graphSource = input.map((edgeStr) =>
    edgeStr.trim().split(" ").map(Number)
  );

  //   console.log("root : ", V);
  const graph = getGraph(graphSource);
  const bfsAnswer = BFS(V, graph);
  const dfsAnswer = DFS(V, graph);
  console.log(`${dfsAnswer.join(" ")}\n${bfsAnswer.join(" ")}`);
}

function getGraph(graphSource) {
  const graph = {};
  //   console.log(graphSource);
  for (let edge of graphSource) {
    const [nodeA, nodeB] = edge;
    if (!graph[nodeA]?.length) graph[nodeA] = [nodeB];
    else graph[nodeA].push(nodeB);

    if (!graph[nodeB]?.length) graph[nodeB] = [nodeA];
    else graph[nodeB].push(nodeA);
  }
  Object.keys(graph).forEach((key) => {
    graph[key].sort((a, b) => a - b);
  });

  return graph;
}

function BFS(root, graph) {
  const visit = {};
  const queue = [root];
  const answer = [];
  while (queue.length > 0) {
    const node = queue.shift();
    visit[node] = true;
    answer.push(node);
    const nodeList = graph[node] || [];
    nodeList.forEach((nextNode) => {
      if (!visit[nextNode]) {
        queue.push(nextNode);
        // console.log(queue);
        visit[nextNode] = true;
      }
    });
  }
  return answer;
}

function DFS(root, graph) {
  const visit = {};
  const answer = [];
  recursive(root);

  function recursive(node) {
    visit[node] = true;
    answer.push(node);
    const nextNodes = graph[node] || [];
    nextNodes.forEach((nextNode) => {
      if (!visit[nextNode]) {
        recursive(nextNode);
      }
    });
  }

  return answer;
}
