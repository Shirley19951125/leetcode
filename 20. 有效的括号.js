var isValid = function(s) {
    let n=s.length;
    if(n%2===1)
    {
        return false;
    }
    const pair=new Map([
        [')','('],
        [']','['],
        ['}','{']
    ]);
    let stk=[];
    for(let ch of s){
        if(pair.has(ch)){
            if(!stk.length||stk[stk.length-1]!==pair.get(ch))
            return false;
            stk.pop();
        }
        else
        stk.push(ch);
    }
    return !stk.length;
};