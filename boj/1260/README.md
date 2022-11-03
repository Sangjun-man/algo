# DFS BFS
## 간선그래프, 방문목록작성, 순회하기
DFS BFS 돌 때 필요한것들이다!  
### 간선그래프 
```javascript
function getGraph(graphSource) {
  const graph = {};
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
```
graph[node]?.length  
    옵셔널 체이닝 + length로 안전하게 객체에 간선 정보 추가
### 방문목록작성
현재 코드에서는 bfs와 dfs 코드 내에 방문목록 객체를 만들어서 체크했지만, 하나의 루트만 도는게 아니라 여러 루트를 돌게되면 방문목록 스코프를 하나 더 위로 올려서 체크해야 할것같다.

### 순회하기
bfs같은 경우, 큐를 사용해서 큐 안에 내용이 없을때까지 계속 순회
dfs는 하나의 노드에 연결된 간선들을 모두 재귀함수로 처리해주면서 순회한다.

## 방문 체크를 언제 해줄 것이냐
매번 순회를 할 떄 체크를 해주어야 한다.
bfs는 enqueuefunction getGraph(graphSource) {
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
}할 때,
dfs는 매 재귀함수가 실행 될 때 방문체크를 해주었다


## 런타임 에러
자꾸 런타임 에러가 나서 도대체 왜 그런건가 했는데
> 그래프를 객체로 만듬 + 순회시 배열의 메서드 사용 => 객체 프로퍼티 조회 시 배열이 아닌 경우 타입에러
그래프 객체의 프로퍼티가 배열이 아닌 경우를 체크해 주었어야 했다.   
참고 : [https://www.acmicpc.net/board/view/74566]

### 코드 수정 내용
```javascript

function DFS(root, graph) {
  const visit = {};
  const answer = [];
  const nodeList = Object.keys(graph).filter((node) => node !== root);
  recursive(root);
  for (let nextNode of nodeList) {
    if (!visit[nextNode]) {
      recursive(nextNode);
    }
  }
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

```

```javascript
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

```
1. 문제 조건상 루트노드 이외에 순회할 필요가 없었는데 나머지 노드들도 dfs로 순회했다..
2. 노드에 연결된 간선이 없을 시에 graph[node]로 간선을 조회하면 undefined가 뜬다. 단축평가 || []를 써서 undefined 를 배열로바꿔주었다.
다음 문제풀이 시 주의하자...