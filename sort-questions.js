// Merge Interval 
var A = [[2,6],[1,3],[8,10],[15,18]];
A = A.sort((a,b)=> { return (a[0] != b[0]) ? a[0]-b[0] : a[1]-b[1] } );
let result = [];

for(let i=0; i < A.length-1; i++) {
  let current = A[i];
  let next = A[i+1];
  if(next[0] < current[1]) {
    result.push([current[0],next[1]]);
  } else {
    result.push(next);
  }
}

// result.forEach((ele) => {
//   console.log(ele)
//   }
// );

/* Sort a linked list in O(n log n) time using constant space complexity.
Example 1:
Input: 4->2->1->3
Output: 1->2->3->4 

n(log n) - Sort algo - merge sort is simplest of all.

*/

function ListNode(val) {
  this.val = val;
  this.next = null;
}

var sortList = function(head) {
  function mergeTwo(one, two) {
    let dummy = new ListNode(-1);
    let head = dummy;
    while(one && two) {
      if(one.val < two.val) {
        head.next = one;
        one = one.next;
      } else {
        head.next = two;
        two = two.next;
      }
      head = head.next;
    }
    if (one) head.next = one;
    if (two) head.next = two;
    return dummy.next;    
  }

  if (!head || !head.next) return head;
  let slow = head;
  let fast = head;
  let second = null;
  // Only way to learn.
  while(fast.next && fast.next.next) {
    fast = fast.next;
    slow = slow.next;
  }
  second = slow.next;
  slow.next = null;
  head = sortList(head);
  second = sortList(second);
  return mergeTwo(head, second);
};

// console.log(sortList(4->2->1->3))

// Write a function that returns a map of the totaled occurrences of elements within an array.
// [1,3,5,3,1,6,8]

const obj1 = [1,3,5,3,1,6,8].reduce((r, ele) => {
  unused1.keys()
  return r;
}, {});

console.log(obj1)


