

console.log(lengthOfLongestSubstring('abcabcbb'))

function lengthOfLongestSubstring(s){
    const occ=new Set();
    const n=s.length;
    let rk=0,max=0
    for(let i=0;i<n;i++){
        if(i!==0){
            occ.delete(s.charAt(i-1))
        }
        while(rk<n && !occ.has(s.charAt(rk))){
            occ.add(s.charAt(rk))
            rk++
        }
        max=Math.max(max,rk-i)
    }
    return max
}