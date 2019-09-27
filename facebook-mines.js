/*
Question 1:
Write a function which accepts size of a grid n * m and no. of mines and places mines on the grid randomly.

Question 2:
A critical network service is being upgraded. The developers have decided to use a new port to reduce confusion. The migration will take a long time so a daily report of the migration's process is needed. Write a script that will take in a list of hosts on STDIN, one per line, and a pair of ports as command-line parameters. Your program should print the progress of the migration and have special output for hosts that are running both versions, and hosts that aren't running any version or are down.

example of execution
cat host.list | myscript oldport newport
*/

var mines = function(m, n, k) {
  if(!m && !n) {
    return [];
  }

  let matrix = new Array(m);
  let count = 0;

  for(let i=0; i<m; i++) {
    matrix[i] = new Array(n).fill(0);
  }

  for(i = 0; i < k; i++){
    let r = getRand(m)   // Gets random height
    let c = getRand(n)   // Gets random width
    if(parseInt(matrix[r][c]) == 0) {
      matrix[r][c] = '*'          // Places mine in grid
    } else {
      i--;
    }
  }

  function getRand(num) {
    return Math.floor(num*Math.random());
  }

  
  return matrix;
}

let m = mines(3,3,3);

m.forEach((ele) => {
  console.log(ele);
});