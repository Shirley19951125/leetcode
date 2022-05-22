var removeNthFromEnd = function(head, n) {
    let p=head,len=0;
    while(p){
        p=p.next;
        len++;
    }
    let k=len-n;
    let temp=head,dummyHead=new ListNode();
        dummyHead.next=head;
    let pre=dummyHead;
    while(k!==0){
        pre=temp;
        temp=temp.next;
        k--;
    }
    pre.next=temp.next
    return dummyHead.next;
};

function removeNthFromEnd(head,n){
    let slow=fast=dummyHead=new ListNode();
    slow.next=head;
    while(n--){
        fast=fast.next;
    }
    while(fast.next){
        fast=fast.next;
        slow=slow.next;
    }
    slow.next=slow.next.next;
    return dummyHead;
}