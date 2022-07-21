var romanToInt = function(s) {
    const map = {
        I: 1,
        V: 5,
        IV: 4,
        IX: 9,
        X: 10,
        XL: 40,
        XC: 90,
        L: 50,
        C: 100,
        CD: 400,
        CM: 900,
        D: 500,
        M: 1000,
    };
    let i=0,res=0
    while(i<s.length){
        if(i+1<s.length && map[s.slice(i,i+2)]){
            res+=map[s.slice(i,i+2)]
            i+=2
        }
        else if(i<s.length && map[s[i]]){
            res+=map[s.slice(i,i+1)]
            i+=1
        }
    }
    return res
}
console.log(romanToInt('IVCDCM'))