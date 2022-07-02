var levelOrder = function(root) {
    if(!root) return []
    let res=[]
    let queue=[root]
    while(queue.length){
       let n = queue.shift();
       res.push(n.val)
       n.left && queue.push(n.left)
       n.right && queue.push(n.right)
    }
    return res
};

