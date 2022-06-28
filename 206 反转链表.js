//迭代法
var reverseList = function(head) {
    let curr=head;
    let prev=null;
  //注意，不能用curr.next判断，因为最后一个节点也要操作
    while(curr!==null){
        const next=curr.next;
        curr.next=prev;
        prev=curr;
        curr=next;
    }
    return prev;
};

//递归
var reverseList = function(head) {
    if(head==null||head.next==null)//必须是head==null在前，不然会报错
    return head;
    let last=reverseList(head.next);
    head.next.next=head;
    head.next=null;
    return last;
}