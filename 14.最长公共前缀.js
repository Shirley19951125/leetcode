var longestCommonPrefix = function(strs) {

    let pre=strs.reduce((pre,cur)=>{
        return getSame(pre,cur)
    })
    function getSame(s1,s2){
        let l=Math.min(s1.length,s2.length)
        let res=''
        for(let i=0;i<l;i++){
            if(s1[i]===s2[i]){
                res+=s1[i]
            }else break
        }
        return res
    }
    return pre
};

console.log(longestCommonPrefix(['abc','abe','abaa']))