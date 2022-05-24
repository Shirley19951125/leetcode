var movingCount = function(m, n, k) {
    let res=0
    const visited=new Array(m)
    for(let i=0;i<m;i++){
        visited[i]=new Array(n).fill(false)
    }
    function dfs(i,j){
        if(i<0 || i>=m || j<0 ||j>=n){
            return
        }
        let sum=(i%10+i/10|0)+j%10+(j/10|0)
       // visited避免重复访问
        if(!visited[i][j]){
            visited[i][j]=true
        if(sum<=k){
            res++
          // console.log('res'+res)
          dfs(i+1,j)
          dfs(i,j+1)
        }

    }
}
// 从（0，0）开始深度优先遍历
    dfs(0,0)
    return res
};
console.log(movingCount(16,8,4))