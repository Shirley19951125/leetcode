function divide(dividend,divisor){
    const flag=dividend>0 && divisor<0 || dividend<0 && divisor>0
    const max=Math.pow(2,31)-1,min=Math.pow(-2,31)
    dividend=Math.abs(dividend),divisor=Math.abs(divisor)
    function recur(div,n){
        if(div<n) return 0
        let count=1,temp=n
        while(temp+temp<div){
            count+=count
            temp+=temp
        }
        return count+recur(div-temp,n)
    }
    let res=recur(dividend,divisor)
    if(flag){
        res*=-1
    }
    if(res>max) return max
    if(res<min) return min
    return res
}