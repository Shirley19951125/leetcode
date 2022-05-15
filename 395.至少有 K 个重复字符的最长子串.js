var longestSubstring = function(s, k) {
    if(s.length<k) return 0
    const map={}
    for(let ch of s){
        map[ch]=map[ch]? map[ch]+1 : 1
    }
    const arr=Object.keys(map)
    for(let n of arr){
        let res=0
        // 如果一个字符n出现的次数小于k，我们可以用n来分割字符s来得到很多小的字符串
        if(map[n]<k){
            let arr1=s.split(n)
            for(let c of arr1){
                res=Math.max(longestSubstring(c,k),res)
            }
            return res
        }
    }
    return s.length
};
console.log(longestSubstring('ababbc',2))