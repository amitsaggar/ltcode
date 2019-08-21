class SparseMatrix {
  constructor(row, col){
    this.N = row;
    this.M = col;
    this.map = {};
  }

  // assume 0 index
  set(row, col, val) {
      if (row < 0 || row >= this.N || col < 0 || col >= this.M) {
          return -1;
      }
      let rowMap = this.map[row];
      if (rowMap == null) {
          rowMap = {};
          this.map[row] = rowMap;
      }
      this.map[row][col] = val;
  }

  get(row, col) {
    if (row < 0 || row >= this.N || col < 0 || col >= this.M) {
        return -1;
    }
    let rowMap = this.map[row];
    if (rowMap == null) {
      return -1;
    }
    return (rowMap.hasOwnProperty(col)) ? rowMap[col]: -1;
  }

  sum(map2) {
      let sum = 0;
      let mapKeys = Object.keys(map2);
      mapKeys.forEach(r => {
        if (r <= this.N && this.map.hasOwnProperty(r)) {
          let mapKeysInner = map2[r];
          mapKeysInner.forEach(c => {
              if (c <= this.M && this.map.hasOwnProperty(c)) {
                this.map[r][c] += map2[r][c];
              }
          });
        }        
      });
      return "sum";
  }

}


var TD = [
  [1,0,0,0],
  [0,0,0,0],
  [4,0,0,0],
  [0,0,7,0]
];

var obj = new SparseMatrix(4,4);

for(let i = 0; i < TD.length; i++) {
  for(let j = 0; j < TD[0].length; j++) {
    if(TD[i][j] != 0)
      obj.set(i, j, TD[i][j]);
  }   
}

console.log(obj.get(0,0));
// console.log(obj.get(2,0));

obj.sum({0: {0:1}});
console.log(obj.get(0,0));