/* 
The idea is to perform BFS from one of given input vertex(u). At the time of BFS maintain an array of distance[n] and initialize it to zero for all vertices. Now, suppose during BFS, vertex x is popped from queue and we are pushing all adjacent non-visited vertices(i) back into queue at the same time we should update distance[i] = distance[x] + 1;.
Finally distance[v] gives the minimum number of edges between u and v.
*/

// u to v and total n vertices.
// Main thing to notice is distance array and lookup of main vertex that comes out of queue.
var minEdgeBFS = function(u, v, n)
{
    // visited[n] for keeping track of visited
    // node in BFS
    bool visited[n] = {0};

    // Initialize distances as 0
    int distance[n] = {0};
 
    // queue to do BFS.
    queue  Q;
    distance[u] = 0;
    
    Q.push(u);
    visited[u] = true;
    while (!Q.empty())
    {
        int x = Q.front();
        Q.pop();
 
        for (int i=0; i<edges[x].size(); i++)
        {
            if (visited[edges[x][i]])
                continue;

            // update distance for i
            distance[edges[x][i]] = distance[x] + 1;
            Q.push(edges[x][i]);
            visited[edges[x][i]] = 1;
        }
    }
    return distance[v];
}