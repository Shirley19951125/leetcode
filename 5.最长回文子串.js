function longestSubstring(s){
    let dp=[],res=''
     for(let i=0;i<s.length;i++){
         dp[i]=[]
         for(let j=0;j<=i;j++){
             if(i===j){
                 dp[i][j]=1
             }
             else if(i-j===1 && s[i]===s[j]){
                 dp[i][j]=1
             }
             else if(dp[i-1][j+1]===1 && s[i]===s[j]){
                 dp[i][j]=1
             }
             if(dp[i][j]===1 && i-j+1>res.length){
                 res=s.slice(j,i+1)
             }
         }

     }
     return res
 }
 console.log(longestSubstring('abcbaddd'))