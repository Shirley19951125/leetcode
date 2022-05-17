var copyRandomList = function(head,map=new Map()) {
    if(head==null) return null
    // 将节点都保存在哈希表中，如果节点已存在在哈希表中就可以直接使用
    if(!map.has(head)){
        map.set(head,{val:head.val})
        Object.assign(map.get(head),{next:copyRandomList(head.next,map),random:copyRandomList(head.random,map)})
    }
    return map.get(head)
};

//用迭代实现
var copyRandomList = function (head) {
   if(head==null) return null
   //拷贝.next指针
    for(let node=head; node!==null; node=node.next.next){
        const newNode=new Node(node.val,node.next)
        node.next=newNode
    }
    //拷贝.random指针，考虑random为空的情况
    for(let node=head; node!==null; node=node.next.next ){
        node.next.random=node.random?node.random.next:null
    }
    const newHead=head.next
     for(let node=head ; node!==null ; node=node.next){
        const newNode=node.next
        node.next=node.next.next
        newNode.next=newNode.next?newNode.next.next : null
     }
     return newHead
};