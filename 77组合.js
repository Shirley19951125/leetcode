function combine(n,k){
    let res=[];
    backtracking(1,n,k,res,[])
    return res
}
function backtracking(start,end,maxLen,res,node){
    if(node.length===maxLen){
        console.log(node)
        res.push(node);
        return;
    }
    for(let i=start;i<=end;i++){
        node.push(i);
        backtracking(i+1,end,maxLen,res,node);
        node.pop()
    }
}
console.log(combine(4,2))