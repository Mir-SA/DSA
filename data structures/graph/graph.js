class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }

  rmEdge(v1, v2) {
    this.adjacencyList[v1] = this.adjacencyList[v1].filter((v) => v !== v2);
    this.adjacencyList[v2] = this.adjacencyList[v2].filter((v) => v !== v1);
  }

  rmVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.rmEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }

  DFS_Recursive(start) {
    const result = [];
    const visited = {};
    const adjacencyList = this.adjacencyList;

    (function DFS(v) {
      if (!v) return null;
      visited[v] = true;
      result.push(v);
      adjacencyList[v].forEach((neighbor) => {
        if (!visited[neighbor]) {
          return DFS(neighbor);
        }
      });
    })(start);

    return result;
  }

  DFS_Iterative(start) {
    const stack = [];
    const result = [];
    const visited = {};
    let currentVertex;

    visited[start] = true;
    while (stack.length) {
      console.log(stack);
      currentVertex = stack.pop();
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      });
    }

    return result;
  }

  BFS_Graph(start) {
    const queue = [start];
    const result = [];
    const visited = {};
    let currentVertex;

    visited[start] = true;
    while (queue.length) {
      currentVertex = queue.shift();
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }
    return result;
  }
}

let g = new Graph();
// g.addVertex('Dombivli');
// g.addVertex('Kalyan');
// g.addVertex('Thane');
// g.addVertex('BSL');

// g.addEdge('BSL','Thane');
// g.addEdge('Dombivli','Kalyan');
// g.addEdge('BSL','Dombivli');
// g.addEdge('Kalyan','BSL');

g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");
