//递归
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
 }
var removeElements = function(head, val) {
if (head === null) {
      return head;
  }
  head.next = removeElements(head.next, val);
  return head.val === val ? head.next : head;
};

// 迭代
var removeElements = function(head, val){
    const dummyHead=new ListNode(0);
    dummyHead.next=head;
    let temp=dummyHead;
    while(temp.next!==null){
        if(temp.next.val==val){
            temp.next=temp.next.next;
        }
        else
        temp=temp.next;
    }
    return dummyHead.next;
};