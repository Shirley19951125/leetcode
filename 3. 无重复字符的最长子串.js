function lengthOfLongestSubstring(s){
    const occ=new Set()
    let rk=0,ans=0,n=s.length
    for(let i=0;i<n;i++){
        if(i>0){
            occ.delete(s[i-1])
        }
        while(rk<n && !occ.has(s[rk])){
          occ.add(s[rk])
          rk++

        }
        ans=Math.max(ans,rk-i)
    }
    return ans
}