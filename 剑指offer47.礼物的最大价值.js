var maxValue = function(grid) {
    let dp=[],m,n
    if(grid.length)
     m=grid.length
    if(grid[0].length)
    n=grid[0].length
    for(let i=0;i<m;i++){
        dp[i]=[]
        for(let j=0;j<n;j++){
            if(i==0 && j==0) dp[i][j]=grid[i][j]
            else if(i==0){
                dp[i][j]=grid[i][j]+dp[i][j-1]
            }else if(j==0){
                dp[i][j]=grid[i][j]+dp[i-1][j]
            }else{
                dp[i][j]=grid[i][j]+Math.max(dp[i-1][j],dp[i][j-1])
            }
        }
    }
    console.log(dp)
    return dp[m-1][n-1]
};
console.log(maxValue([
    [1,3,1],
    [1,5,1],
    [4,2,1]
  ]))