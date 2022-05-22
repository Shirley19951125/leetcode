var mergeTwoLists = function(l1, l2) {
    const dummyHead=new ListNode();
    let temp=dummyHead
    while(l1 && l2){
        if(l1.val > l2.val){
            temp.next=l2
            l2=l2.next
        }else{
            temp.next=l1
            l1=l1.next
        }
        temp=temp.next
    }
    if(l1){
        temp.next=l1
    }
    if(l2){
        temp.next=l2
    }
    return dummyHead.next
};