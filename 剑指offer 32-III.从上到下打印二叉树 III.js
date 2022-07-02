var levelOrder = function(root) {

    if(!root) return []
    let res=[],queue=[root],isLeftOrder=true
    while(queue.length){
        let ret=[]
        let l=queue.length
        for(let i=0;i<l;i++){
            let n=queue.shift()
            if(isLeftOrder) ret.push(n.val)
            else ret.unshift(n.val)
            n.left && queue.push(n.left)
            n.right && queue.push(n.right)
        }
        isLeftOrder=!isLeftOrder
        res.push(ret)
    }
    return res

}
