/*
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example:

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.

******
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
******
*/

function ListNode(val) {
  this.val = val;
  this.next = null;
};

var addTwoNumbers = function(l1, l2) {
  var List = new ListNode(0);
  var head = List;
  var sum = 0;
  var carry = 0; 

  while(l1 !== null || l2 !== null || sum > 0 ) {
    if(l1 !== null) {
      sum += l1.val;
      l1 = l1.next;
    }
    if(l2 !== null) {
      sum += l2.val;
      l2 = l2.next;
    }
    if( sum >= 10) {
      carry = 1;
      sum = sum - 10;
    }
    head.next = new ListNode(sum);
    head = head.next;

    sum = carry;
    carry = 0;
  }
  return List.next;
};

/************/

var addToNumbers = function(nums, target) {
  {
    var lookup = {};
    for(i=0; i<=nums.length-1; i++) {
      let element = target - nums[i];
      // console.log( lookup );
      if (lookup.hasOwnProperty(element)) {
        return [lookup[element], i];
      } else {
        lookup[nums[i]] = i;
      }    
    }
  }
}
console.log( addToNumbers([1,2,3,5,9,10], 3));