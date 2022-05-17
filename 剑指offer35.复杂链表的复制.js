var copyRandomList = function(head,map=new Map()) {
    if(head==null) return null
    // 将节点都保存在哈希表中，如果节点已存在在哈希表中就可以直接使用
    if(!map.has(head)){
        map.set(head,{val:head.val})
        Object.assign(map.get(head),{next:copyRandomList(head.next,map),random:copyRandomList(head.random,map)})
    }
    return map.get(head)
};