class Node {
  constructor(value, adjacent = new Set()) {
    this.value = value;
    this.adjacent = adjacent;
  }
}

class Graph {
  constructor() {
    this.nodes = new Set();
  }

  // this function accepts a Node instance and adds it to the nodes property on the graph
  addVertex(vertex) {
      this.nodes.add(vertex);
  }

  // this function accepts an array of Node instances and adds them to the nodes property on the graph
  addVertices(vertexArray) {
      for (let vertex of vertexArray){
          this.addVertex(vertex);
      }
  }


  // this function accepts two vertices and updates their adjacent values to include the other vertex
  addEdge(v1, v2) {
      v1.adjacent.add(v2);
      v2.adjacent.add(v1);
  }

  // this function accepts two vertices and updates their adjacent values to remove the other vertex
  removeEdge(v1, v2) {
      v1.adjacent.delete(v2);
      v2.adjacent.delete(v1);
  }

  // this function accepts a vertex and removes it from the nodes property, it also updates any adjacency lists that include that vertex
  removeVertex(vertex) {
    //   for (let n of this.nodes){
    //       if (n.adjacent.has(vertex)){
    //         removeEdge(n, vertext)
    //       }
    //   }
    //   this.nodes.delete(vertex);

    for (let node of this.nodes) {
        if (node.adjacent.has(vertex)) {
          node.adjacent.delete(vertex);
        }
      }
      this.nodes.delete(vertex);
  }

  // this function returns an array of Node values using DFS
  depthFirstSearch(start) {
    const visited = new Set();
    let res = [];
    let stack = [start];
    visited.add(start);
    while (stack.length){
        let vertex = stack.pop();
        for (let v of vertex.adjacent){
            if (!visited.has(v)){
                stack.push(v);
                visited.add(v);
            }
        }
        res.push(vertex.value);
    }
    return res;

  }

  // this function returns an array of Node values using BFS
  breadthFirstSearch(start) {
    let res = [];
    let queue = [start];
    const visited = new Set();
    visited.add(start);
    while (queue.length !== 0){
        let v = queue.shift();
            for (let a of v.adjacent){
                if (! visited.has(a)){
                    queue.push(a);
                    visited.add(a);
                }
            }    
        res.push(v.value);
        }
    return res;

  }

}

module.exports = {Graph, Node}