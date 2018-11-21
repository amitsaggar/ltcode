/*
Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

Example:

Input: 1->2->4, 1->3->4
Output: 1->1->2->3->4->4
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  let dummyNode = new ListNode(0);
  let cur=dummyNode;
  while(l1!=null&& l2!=null){
      if(l2.val<l1.val){
          cur.next=l2;
           cur=l2;
           l2=l2.next;
      }   
      else{
          cur.next=l1;
           cur=l1;
          l1=l1.next;
      }
   }
  while(l1!=null){
      cur.next=l1;
      cur=cur.next;
      l1=l1.next;
  }
  while(l2!=null){
      cur.next=l2;
      cur=cur.next;
      l2=l2.next;
  }
 
  return dummyNode.next;
};