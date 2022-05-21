var lengthOfLongestSubstring = function(s) {
    let res=0,ch=''
    for(let i=0;i<s.length;i++){
        let index=ch.indexOf(s[i])
        if(index===-1) {
            ch+=s[i]
            res=Math.max(ch.length,res)
        }else{
            ch+=s[i]
            ch=ch.substring(index+1)

        }
    }
    return res
};
console.log(lengthOfLongestSubstring('ssb'))