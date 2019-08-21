class TripleT {

  constructor() {
    this.State = {Blank, X, O};
    this.n = 3;
    this.board = new State[3][3];
    this.moveCount = null;
  }
  
  Move(x, y, s){
    if(board[x][y] == State.Blank){
        board[x][y] = s;
    }
    moveCount++;

    //check end conditions

    //check col
    for(int i = 0; i < n; i++){
        if(board[x][i] != s)
            break;
        if(i == n-1){
            //report win for s
        }
    }

    //check row
    for(int i = 0; i < n; i++){
        if(board[i][y] != s)
            break;
        if(i == n-1){
            //report win for s
        }
    }

    //check diag
    if(x == y){
        //we're on a diagonal
        for(int i = 0; i < n; i++){
            if(board[i][i] != s)
                break;
            if(i == n-1){
                //report win for s
            }
        }
    }

    //check anti diag (thanks rampion)
    if(x + y == n - 1){
        for(int i = 0; i < n; i++){
            if(board[i][(n-1)-i] != s)
                break;
            if(i == n-1){
                //report win for s
            }
        }
    }

    //check draw
    if(moveCount == (Math.pow(n, 2) - 1)){
        //report draw
    }
}

}