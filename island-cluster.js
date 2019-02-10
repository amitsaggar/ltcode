/*
Given a 2d lake map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.
Input:
11110
11010
11000
00000
Output: 1

[
  [1, 1, 1, 1, 0],
  [1, 1, 0, 1, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0]
]
*/
/*
reduce to have type what you are reducing it too. 
lake.reduce((rows, row) => 
  rows.push(
    row.map((elem) => 
      elem != true)
  ) && rows, []);
*/
const numIslands = (lake) => {
    let islandCount = 0;
    const visited = lake.reduce((rows, row) => rows.push(row.map((elem) => elem != true)) && rows, []);
    // console.log(visited[0]);
    const traverseIsland = traverseIslandClosure(lake, visited);
    visited.forEach((row, i) => {
    //   console.log(row + ' - ' + i );
      row.forEach((isVisited, j) => {
        // console.log(isVisited + ' - ' + j );
        if (!isVisited) {
          traverseIsland(i, j);
          islandCount++;
        } 
      });
    });
    return islandCount;
  };
  
  const traverseIslandClosure = (lake, visited) => {
    const traverseIsland = (i, j) => {
      if (!lake[i][j] || visited[i][j]) return;
      visited[i][j] = true;
      if (j+1 < lake[0].length) traverseIsland(i, j+1);
      if (i+1 < lake.length) traverseIsland(i+1, j);
      if (j-1 > -1) traverseIsland(i, j-1);
      if (i-1 > -1) traverseIsland(i-1, j);
    };
    return traverseIsland;
  }

  const arr = [
    [1, 1, 1, 1, 0],
    [1, 1, 0, 1, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0]
  ];
  
  console.log(numIslands(arr));