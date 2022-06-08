var constructArr = function(a) {
    const b=[],L=[a[0]],R=new Array(a.length)
    // 数组L代表i及其左边所有元素的乘积
    for(let i=1;i<a.length;i++){
        L[i]=L[i-1]*a[i]
    }
    R[a.length-1]=a[a.length-1]
     // 数组L代表i及其右边所有元素的乘积
    for(let i=a.length-2;i>=0;i--){
        R[i]=R[i+1]*a[i]
    }
    for(let i=0;i<a.length;i++){
        if(i==0) {
            b[i]=R[i+1]
        }else if(i==a.length-1){
            b[i]=L[i-1]
        }else
        b[i]=L[i-1]*R[i+1]
    }
    return b
};

var constructArr=function(a){
    if(!a.length) return []
    const b=new Array(a.length)
    b[0]=1
    // b[i]表示a[i]左侧所有元素的乘积
    for(let i=1;i<a.length;i++){
        b[i]=b[i-1]*a[i-1]
    }
    let R=1
    for(let i=a.length-1;i>=0;i--){
        // 这里b[i]乘上右侧的元素，表示最后的结果
        b[i]=b[i]*R
        R*=a[i]
    }
    return b
}
console.log(constructArr([1,2,3,4,5]))
