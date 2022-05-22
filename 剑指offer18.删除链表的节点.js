// 递归
var deleteNode = function(head, val) {
    if(head==null) return null
    head.next=deleteNode(head.next,val)
    return head.val==val?head.next:head
};

//迭代
var deleteNode=function(head,val){
    const dummyHead=new ListNode()
    dummyHead.next=head
    let temp=new ListNode()
    temp=dummyHead
    while(temp.next){
        if(temp.next.val===val){
            temp.next=temp.next.next
        }else{
            temp=temp.next
        }
    }
    return dummyHead.next
}