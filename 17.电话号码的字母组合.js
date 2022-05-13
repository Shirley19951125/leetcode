var letterCombinations = function(digits) {
    if(digits.length===0) return []
    let res=[]
    const map={ '2': 'abc', '3': 'def', '4': 'ghi', '5': 'jkl', '6': 'mno', '7': 'pqrs', '8': 'tuv', '9': 'wxyz' };
    function backtracking(str,deep){
        if(str.length==digits.length){
            res.push(str)
            return
        }
        let curr=map[digits[deep]]
        for(let i=0;i<curr.length;i++){
            backtracking(str+curr[i],deep+1)
        }
    }
    backtracking('',0)
    return res;
};
console.log(letterCombinations('23'))