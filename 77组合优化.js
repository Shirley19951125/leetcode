function combine(n,k){
    let res=[],node=[];
    function backtracking(start,n,k){
        if(node.length===k){
            res.push([...node]);
            return;
        }
        for(let i=start;i<=n-(k-node.length)+1;i++){
            node.push(i)
            backtracking(i+1,n,k);
            node.pop()
        }
    }
    backtracking(1,n,k);
    return res;
}