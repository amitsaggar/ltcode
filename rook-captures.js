/*
On an 8 x 8 chessboard, there is one white rook.  There also may be empty squares, white bishops, and black pawns.  These are given as characters 'R', '.', 'B', and 'p' respectively. Uppercase characters represent white pieces, and lowercase characters represent black pieces.

The rook moves as in the rules of Chess: it chooses one of four cardinal directions (north, east, west, and south), then moves in that direction until it chooses to stop, reaches the edge of the board, or captures an opposite colored pawn by moving to the same square it occupies.  Also, rooks cannot move into the same square as other friendly bishops.

Return the number of pawns the rook can capture in one move.
const board = [
  [".",".",".",".",".",".",".","."],
  [".",".",".","p",".",".",".","."],
  [".",".",".","R",".",".",".","p"],
  [".",".",".",".",".",".",".","."],
  [".",".",".",".",".",".",".","."],
  [".",".",".","p",".",".",".","."],
  [".",".",".",".",".",".",".","."],
  [".",".",".",".",".",".",".","."]
]
*/

var numRookCaptures = function() {
  const board = [
    [".",".",".",".",".",".",".","."],
    [".","p","p","p","p","p",".","."],
    [".","p","p","B","p","p",".","."],
    [".","p","B","R","B","p",".","."],
    [".","p","p","B","p","p",".","."],
    [".","p","p","p","p","p",".","."],
    [".",".",".",".",".",".",".","."],
    [".",".",".",".",".",".",".","."]
  ];
  let numCap = 0;
  let boardCol = []

  for (let col = 0; col < board[0].length; col++) {
    boardCol[col] = [];
    for (let row = 0; row < board.length; row++) {
        boardCol[col][row] = board[row][col];
    }
  }

  // first find rook - note row, col.
  // Traverse row - left and right
  // Traverse col - up and down
  for( let row=0; row<board.length; row++ ) {
    for( let col=0; col<board[0].length; col++ ) {
      if (board[row][col] == 'R') {
        numCap += calcPawn(board[row], row, numCap);
        numCap += calcPawn(boardCol[col], col, numCap);
      }
    }
  }

  function calcPawn(arr, index, numCap) {
    for( let i=index; i>=0; i-- ) {
      if(arr[i] != '.' && arr[i] != 'p') {
        break;      
      } else if(arr[i] == 'p') {
        numCap++;
      }
    }
    for( let j=index+1; j<=arr.length; j++ ) {
      if(arr[j] != '.' && arr[j] != 'p') {
        break;
      } else if(arr[j] == 'p') {
        numCap++;
      }      
    }
    return numCap;    
  }

  return numCap;
};

console.log(numRookCaptures());

const canCapture = (board, i, j) => {
  let captures = 0, dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];
  
  for (let dir of dirs) {
      let r = i + dir[0], c = j + dir[1];

      while (r >= 0 && r < 8 && c >= 0 && c < 8) {
          if (board[r][c] === 'p') { captures++; }
          if (board[r][c] !== '.') { break; }
          
          r += dir[0];
          c += dir[1];
      }
  }
  
  return captures;
}

const numRookCaptures = (board) => {
  for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[0].length; j++) {
          if (board[i][j] === 'R') {
              return canCapture(board, i, j);
          }
      }
  }
};
