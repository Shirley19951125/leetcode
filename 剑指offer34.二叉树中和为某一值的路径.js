var pathSum=function(root,target){
    let res=[]
    function dfs(node,temp){
        let sum=eval(temp.join('+'))
        if(sum===target && temp){
            res.push(temp)
            return
        }
            dfs(node.left,[...temp,node.val])
            dfs(node.right,[...temp,node.val])
    }

    dfs(root,[],0)
    return res
}