function getIntersectionNode(headA,headB){
    let tempA=headA,tempB=headB
    while(tempA!==tempB){
        tempA=tempA?tempA.next:headB
        tempB=tempB?tempB.next:headA
    }
    return tempA

}