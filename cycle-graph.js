var validTree = function(n, edges) {
    if (n < 2) return true;
    var adj = {};

    // Initalize adjacency list
    for (var i=0; i<n; i++) {
        adj[i] = [];
    }
    let visited = [n].fill(false);
    let parents = [n].fill(-1);
    parents[0] = 0;

    // Populate adjacency list
    for (var edge of edges) {
        adj[edge[0]].push(edge[1]);
        adj[edge[1]].push(edge[0]);
        parents[edge[1]] = edge[0];
    }

    // console.log( JSON.stringify(adj) );
    console.log( parents );

    for(let i = 0; i<n; i++) {
        if(!visited[i]) {
            if( isCycle(i) ) {
                return false;
            }
        }
    }

    return true;


    function isCycle(root) {
    visited[root] = true;

        for (var neighbor of adj[root]) {
            if (!visited[neighbor]){
                if(isCycle(neighbor)) {
                    return true;
                }
            } else if(parents[neighbor] != root && parents[neighbor] != 0) {
                console.log(neighbor, root, parents[neighbor]);
                // return true;
            }
        }
        return false;
    } 
};

// console.log(validTree(4,[[0,1],[1,2],[2,3]]));

    function cycleDFS() {
        let V = [[1,2],[2,3],[3,1]];
        // Mark all the vertices as not visited and not part of 
        // recursion stack 
        let visited = [3].fill(false);
        let vertices = [1, 2, 3];
        var adj = {};

        // Initalize adjacency list
        for (var i=0; i<vertices.length; i++) {
            adj[vertices[i]] = [];
        }

        // Populate adjacency list
        for (var edge of V) {
            adj[edge[0]].push(edge[1]);
            adj[edge[1]].push(edge[0]);
        }
        // console.log(JSON.stringify(adj));

        for (let u = 0; u < vertices.length; u++) 
            if (!visited[u]) {
                if (isCyclicUtil(u, visited, -1, adj)) 
                    return true; 
            }

        return false; 
    }

    function isCyclicUtil(v, visited, parent, adj) {
        visited[v] = true;
        let it = adj[v] || [];
        for(let i=0; i < it.length; i++)
        { 
            // console.log(v, it);            
            vert = it[i];
            if (!visited[vert]) 
            { 
                if (isCyclicUtil(vert, visited, v, adj)) 
                    return true; 
            } 
  
            // If an adjacent is visited and not parent of current 
            // vertex, then there is a cycle. 
            else if (vert != parent) 
                return true; 
        } 
        return false;         
    }

    console.log(cycleDFS());