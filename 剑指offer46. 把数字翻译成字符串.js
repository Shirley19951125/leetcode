
var translateNum = function(num) {
    let p=0,q=1,r=1;
    let str=String(num)
    for(let i=1;i<str.length;i++){
        p=q
        q=r
        let n=Number(str[i-1]+str[i])
        if(n>9 && n<26){
            r+=p
        }
        console.log(r)
    }
    return r
};
console.log(translateNum(12258))