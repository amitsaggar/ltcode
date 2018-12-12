/*
Given a linked list, determine if it has a cycle in it.

To represent a cycle in the given linked list, we use an integer pos which represents the position (0-indexed) in the linked list where tail connects to. If pos is -1, then there is no cycle in the linked list.

Example 1:

Input: head = [3,2,0,-4], pos = 1
Output: true
Explanation: There is a cycle in the linked list, where tail connects to the second node.
*/
var hasCycle = function(head) {
  if(head==null) return false;
  let walker = head;
  let runner = head;
  while(runner.next!=null && runner.next.next!=null) {
      walker = walker.next;
      runner = runner.next.next;
      if(walker==runner) return true;
  }
  return false;    
};

/*
Given a linked list, return the node where the cycle begins. If there is no cycle, return null.

To represent a cycle in the given linked list, we use an integer pos which represents the position (0-indexed) in the linked list where tail connects to. If pos is -1, then there is no cycle in the linked list.

Note: Do not modify the linked list.

Example 1:

Input: head = [3,2,0,-4], pos = 1
Output: tail connects to node index 1
Explanation: There is a cycle in the linked list, where tail connects to the second node.
*/

var detectCycle = function(head) {
  if(head == null || head.next == null)
      return null;
  else if(head.next == head)
      return head;
  
  let slow = head;
  let fast = head;
  
  while(fast != null){
      fast = fast.next;
      if(fast != null){
          fast = fast.next;
          slow = slow.next;
      }
      if(fast == slow){
          break;
      }
  }
  
  if(fast == null)
      return null;
  
  fast = head;
  while(fast != slow){
      fast = fast.next;
      slow = slow.next;
  }
  return fast;
}