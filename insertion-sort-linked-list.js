

function ListNode(val) {
  this.val = val;
  this.next = null;
}

var insertionSortList = function (head) {
  if( head == null ){
    return head;
  }

  let helper = new Listnode(0); //new starter of the sorted list
  cur = head; //the node will be inserted
  pre = helper; //insert node between pre and pre.next
  next = null; //the next node will be inserted
  //not the end of input list
  while( cur != null ){
    next = cur.next;
    //find the right place to insert
    while( pre.next != null && pre.next.val < cur.val ){
      pre = pre.next;
    }
    //insert between pre and pre.next
    cur.next = pre.next;
    pre.next = cur;
    pre = helper;
    cur = next;
  }
  
  return helper.next;
}