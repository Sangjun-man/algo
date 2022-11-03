const fs = require("fs");
const filePath = process.platform == "linux" ? "/dev/stdin" : "./test";
const inputString = fs.readFileSync(filePath).toString().trim();

const input = inputString.split("\n");
const N = input.shift();
const edges = input.map((edge) => edge.split(" ").map(Number));
const graph = getGraph(edges);

solution(graph);

function solution(graph) {
  const ROOT = 1;
  const parentOfNodes = {};

  DFS(ROOT, graph, parentOfNodes);

  const parseParent = Object.entries(parentOfNodes).map((node) => node[1]);

  console.log(parseParent.slice(1, parseParent.length).join("\n"));
}

function DFS(root, graph, parentOfNodes) {
  const visit = {};
  parentOfNodes[root] = 1;
  recursive(root);

  function recursive(node) {
    visit[node] = true;
    const childNodes = graph[node] || [];
    childNodes.forEach((child) => {
      if (!visit[child]) {
        parentOfNodes[child] = node;
        recursive(child);
      }
    });
  }
}

function getGraph(edges) {
  const graph = {};
  for (let edge of edges) {
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
