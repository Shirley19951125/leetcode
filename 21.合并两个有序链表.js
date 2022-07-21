var mergeTwoLists = function(list1, list2) {
    const dummyHead=temp=new ListNode()
    while(list1 && list2){
        if(list1.val>list2.val){
            temp.next=list2
            list2=list2.next
        }else{
            temp.next=list1
            list1=list1.next
        }
          temp=temp.next
    }
    temp.next=list1||list2
    return dummyHead.next
}