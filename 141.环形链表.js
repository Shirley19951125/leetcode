function hasCycle(head){
    let traversingNode=head;
    while(traversingNode){
        if(traversingNode.visited) return true;
        traversingNode.visited=true;
        traversingNode=traversingNode.next;
    }
    return false;
}