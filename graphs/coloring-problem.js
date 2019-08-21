/*
graph[V][V];
Verices = V
starting node = 0
colors = m;
Backtracking coloring.
Given an undirected graph and a number m, determine if the graph can be colored with at most m colors such that no two adjacent vertices of the graph are colored with same color. Here coloring of a graph means assignment of colors to all vertices.
  Return true/false
*/
var colorGraph = function(graph, m) {
  let v = graph.length;
  let color = new Array(v).fill(0);

  colorUtil(graph, m, color, 0);

  function isSafe(v, c) {
    for (let i = 0; i < graph.length; i++) 
        if (graph[v][i] && c == color[i]) 
            return false; 
    return true;
  }

  function colorUtil(graph, m, color, v) {
    if(v == graph.length) {
      return true;
    } else {
      for(let c=1; c<=m; c++) {
        if(isSafe(v, c)) {
          color[v] = c;
          if(colorUtil(graph, m, color, v+1)) {
            return true;
          }
          color[v] = 0;
        }
      }
    }
    return false;
  }
}