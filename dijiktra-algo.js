let V = 9;

var Dijiktra = function( graph, src ) {
  let n = graph.length;
  let dist = new Array(n);
  let sptSet = new Array(n);
  
  for(let i = 0; i < n; i++) {
    dist[i] = Number.MAX_VALUE;
    sptSet[i] = false;
  }
  
  dist[src] = 0;
  
  function minDist(dist, sptSet) {
    let minV = Number.MAX_VALUE;
    let min_index = -1;
    for(let i=0; i<V; i++)
    {
      if(dist[i] < minV && !sptSet[i]) {
        min_index = i; 
      }
    }
    return min_index;
  }

  for (let count = 0; count < V-1; count++) 
  {
    let u = minDist(dist, sptSet);
    sptSet[u] = true;
    console.log(u);
    // u to v
    for (let v = 0; v < V-1; v++) {
      // check if sptSet[v] = F && dist[v] is MAX_VAL
      // graph[u][v] is not 0.
      // total weight of path - dist[u] + graph[u][v] < dist[v];
      // console.log(u + ' -- ' + v);
      if( u >= 0) {
        if( !sptSet[v] && graph[u][v] != 0 
            && dist[u] == Number.MAX_VALUE 
            && (dist[u] + graph[u][v]) < dist[v] ) {
          dist[v] = dist[u] + graph[u][v];
        } else {
          dist[v] = graph[u][v];          
        }
      }
    }
  }
  for (let i = 0; i < V; i++) {
    console.log(i + " tt " +dist[i]);
  }
};


let graph = [
  [0, 4, 0, 0, 0, 0, 0, 8, 0],
  [4, 0, 8, 0, 0, 0, 0, 11, 0],
  [0, 8, 0, 7, 0, 4, 0, 0, 2],
  [0, 0, 7, 0, 9, 14, 0, 0, 0],
  [0, 0, 0, 9, 0, 10, 0, 0, 0],
  [0, 0, 4, 14, 10, 0, 2, 0, 0],
  [0, 0, 0, 0, 0, 2, 0, 1, 6],
  [8, 11, 0, 0, 0, 0, 1, 0, 7],
  [0, 0, 2, 0, 0, 0, 6, 7, 0]
];

Dijiktra(graph, 0); 