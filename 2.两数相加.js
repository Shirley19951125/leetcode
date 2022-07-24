var addTwoNumbers = function(l1, l2) {
    let carry=0,add;
    const dummyHead=new ListNode()
    let sum=dummyHead;
    while(l1 && l2){
     add=l1.val+l2.val+carry;
    //  console.log(add);
     carry=(add/10)|0;
     sum.val=add%10;
    // console.log(l1.val);
     l1=l1.next;
     l2=l2.next;
     if(l1||l2){
    sum.next=new ListNode(0);
     sum=sum.next;
     }
//    count++;
//   console.log(count)

    }
    while(l1){
        add=carry+l1.val;
        carry=(add/10)|0;
        sum.val=add%10;
         l1=l1.next;
         if(l1){
        sum.next=new ListNode();
        sum=sum.next;
         }

    }
    while(l2){
        add=carry+l2.val;
        carry=(add/10)|0;
        sum.val=add%10;
         l2=l2.next;
         if(l2){
        sum.next=new ListNode();
        sum=sum.next};

    }

    if(carry==1){
        sum.next=new ListNode(1);
    }
    return dummyHead;
};