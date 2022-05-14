var divide = function(dividend, divisor) {
    const max = Math.pow(2, 31) - 1, min = -Math.pow(2, 31);
    let flag=dividend>0 && divisor<0 || dividend<0 && divisor>0
     dividend=Math.abs(dividend),divisor=Math.abs(divisor)

     //div是被除数，n是除数
     function recur(div,n){
        let count=1,temp=n
        if(div<n) return 0
        while(temp+temp<div){
            count+=count
            temp+=temp
        }
        return count+recur(div-temp,n)
    }
    let res=recur(dividend,divisor)
    if(flag) {
        res*=-1
    }

    //判断溢出
    if(res>max) return max
    if(res<min) return min
    return res
};
console.log(divide(-2147483648,2))