function numWays(n,k){
    const dp=[k,k*k]
    for(let i=2;i<n;i++){
        dp[i]=dp[i-1]*(k-1)+dp[i-2]*(k-1)
    }
    return dp[n-1]
}
console.log(numWays(3,2))