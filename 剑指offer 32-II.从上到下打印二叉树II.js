function levelOrder(root){
    if(!root) return []
    let res=[],queue=[root]
    while(queue.length){
        let ret=[]
        let l=queue.length
        for(let i=0;i<l;i++){
            let n=queue.shift()
            ret.push(n.val)
            n.left && queue.push(n.left)
            n.right && queue.push(n.right)
        }
        res.push(ret)
    }
    return res

}