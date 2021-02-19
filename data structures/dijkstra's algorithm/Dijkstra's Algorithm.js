class Priority_Queue {
  constructor() {
    this.values = [];
  }
  enqueue(val, priority) {
    this.values.push({ val, priority });
    this.sort();
  }
  dequeue() {
    return this.values.shift();
  }
  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
}

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(v) {
    if (!this.adjacencyList[v]) this.adjacencyList[v] = [];
  }
  addEdge(v1, v2, w) {
    this.adjacencyList[v1].push({ node: v2, w });
    this.adjacencyList[v2].push({ node: v1, w });
  }
  Dijkstra_Algo(start, end) {
    const nodes = new Priority_Queue();
    const distances = {};
    const previous = {};
    let path = [];
    let smallest;

    // building initial state
    for (let v in this.adjacencyList) {
      if (v === start) {
        distances[v] = 0;
        nodes.enqueue(v, 0);
      } else {
        distances[v] = Infinity;
        nodes.enqueue(v, Infinity);
      }
      previous[v] = null;
    }

    // looping till each vertex is visited
    while (nodes.values.length) {
      smallest = nodes.dequeue().val;
      if (smallest === end) {
        // we r done
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }
      if (smallest || distances[smallest] !== Infinity) {
        for (let neighbor in this.adjacencyList[smallest]) {
          //                     find neighboring node
          let nextNode = this.adjacencyList[smallest][neighbor];
          //                     calculate new dist to neighboring node
          let candidate = distances[smallest] + nextNode.w;
          let nextNeighbor = nextNode.node;
          if (candidate < distances[nextNeighbor]) {
            //                         updating new smallet distance to each other
            distances[nextNeighbor] = candidate;
            //                         updating previous - How we got to neighbor
            previous[nextNeighbor] = smallest;
            //                         enqueue in Priority_Queue with new priority
            nodes.enqueue(nextNeighbor, candidate);
          }
        }
      }
    }
    return path.concat(smallest).reverse();
  }
}

var g = new WeightedGraph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B", 4);
g.addEdge("A", "C", 2);
g.addEdge("B", "E", 3);
g.addEdge("C", "D", 2);
g.addEdge("C", "F", 4);
g.addEdge("D", "E", 3);
g.addEdge("D", "F", 1);
g.addEdge("E", "F", 1);

g.Dijkstra_Algo("A", "E");
