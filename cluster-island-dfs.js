class NumberOfClusters 
{
  constructor(){
    this.offsets = [-1, 0, 1];
  }

  neighborExists(matrix, i, j)
  {
    if ((i >= 0) && (i < matrix.length) && (j >= 0) && (j < matrix[0].length))
    {
        if (matrix[i][j] == 1)
        {
            return true;
        }
    }
      
    return false;
  }
        
  findNumberofClusters(matrix)
  {
    const visited = matrix.reduce((rows, row) => rows.push(row.map((elem) => elem != true)) && rows, []);

    let count = 0;
    for (let i = 0; i < matrix.length; i++)
    {
      for (let j = 0; j < matrix[0].length; j++)
      {
        if ((matrix[i][j] == 1) && (!visited[i][j]))
        {
            // vertex [i][j] marks start of new a cluster. DFS then visits all vertices of this cluster
            count += 1;
            this.doDFS(matrix, i, j, visited);
        }
      }
    }
    return count;
  }

  doDFS(matrix, i, j, visited)
  {
    if (visited[i][j])
    {
        return;
    }
      
    // mark this vertex as visited and visit all its neighbors in depth first manner
    visited[i][j] = true;

    let xOffset, yOffset;
    for (let l = 0; l < this.offsets.length; l++)
    {
        let xOffset = this.offsets[l];
        for (let m = 0; m < this.offsets.length; m++)
        {
            let yOffset = this.offsets[m];
              
            // do not consider vertex[i][j] as its own neighbor
            if (xOffset == 0 && yOffset == 0)
            {
                continue;
            }
              
            // check if there exists a vertex at this offset and check if it is '1'
            if(this.neighborExists(matrix, i + xOffset, j + yOffset))
            {
                this.doDFS(matrix, i + xOffset, j + yOffset, visited);
            }
        }
    }
  }    
}

let matrix = [
  [1, 0, 1, 0, 1],
  [1, 1, 0, 0, 0],
  [0, 1, 0, 1, 1],
];

let solution = new NumberOfClusters();
console.log(solution.findNumberofClusters(matrix));