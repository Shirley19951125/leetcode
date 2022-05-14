var generateParenthesis = function(n) {
    let res=[]
    function backtracking(left,right,str){
        if(str.length===n*2){
            res.push(str)
            return
        }
        if(left<n) {
            backtracking(left+1,right,str+'(')

        }
        //左括号比右括号多，才选右括号
        if(left>right && right<n){
            backtracking(left,right+1,str+')')
        }
    }
    backtracking(0,0,'')
    return res;
};
console.log(generateParenthesis(3))