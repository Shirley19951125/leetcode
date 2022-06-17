var permutation = function(s) {
    let res=[]
     let arr=Array.from(s).sort()
    let vis=[]
    function dfs(str){
        if(str.length===s.length ){
            res.push(str)
            return
        }
        for(let i=0;i<s.length;i++){
            if(vis[i] || (i>0 && !vis[i-1] && arr[i]==arr[i-1])) continue
            vis[i]=true
            dfs(str+arr[i])
            vis[i]=false
            console.log(vis)
        }
    }
    dfs('')
    return res
};
console.log(permutation('abaac'))