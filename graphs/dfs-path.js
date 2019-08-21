let graph = [[0, 1], [0, 2], [0, 3], [2, 0], [2, 1], [1, 3]];

var dfsPath = function(graph, s, d) {
  let visited = new Array(4).fill(false);
  let path = [];
  let path_index = 0;
  let result = [];
  const adjList = graph.reduce((map,ele)=>{
    let key = ele[0];
    let val = ele[1];
    if(map[key] == undefined) {
      map[key] = new Array();
    }
    map[key].push(val);
    return map;
  }, {});

  dfsUtil(adjList, visited, path, result, s, d, path_index);

  return result;

  function dfsUtil(adjList, visited, path, result, s, d, path_index) {
    visited[s] = true;
    path[path_index] = s;
    path_index++;

    if(s == d) {
      result.push(path.slice());
    } else {
      let adj = (adjList[s] != undefined) ? adjList[s]: [];
      for(let i=0; i<adj.length; i++){
        let u = adj[i];
        if(!visited[u]){
          dfsUtil(adjList, visited, path, result, u, d, path_index);
        }
      }
    }
    path.pop();
    visited[s] = false; 
  }
}

let result = dfsPath(graph, 2,3);
result.forEach((val, index)=>{
  console.log(val);
});