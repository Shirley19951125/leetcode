function longestSub(s){
    let dp=[],l=0
    for(let i=0;i<s.length;i++){
        dp[i]=[]
        for(let j=0;j<=i;j++){
            if(i==j){
                dp[i][j]=true
            }else if(i-j===1 && s[i]===s[j]){
                dp[i][j]=true
            }else if(dp[i-1][j+1] && s[i]===s[j]){
                dp[i][j]=true
            }
            if(dp[i][j]){
                l=Math.max(l,i-j+1)
            }
        }
    }
    return l
}
console.log(longestSub(''))