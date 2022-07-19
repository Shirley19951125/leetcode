function mergeSort(nums){
    if(nums.length<2) return nums
    let mid=Math.floor(nums.length/2)
    const left=nums.slice(0,mid)
    const right=nums.slice(mid)
    return merge(mergeSort(left),mergeSort(right))
}
function merge(left,right){
    let l=0,r=0,res=[]
    while(l<left.length && r<right.length){
        if(left[l]<right[r]){
            res.push(left[l])
            l++
        }else{
            res.push(right[r])
            r++
        }
    }
    while(l<left.length){
        res.push(left[l])
        l++
    }
    while(r<right.length){
        res.push(right[r])
        r++
    }
    return res
}
console.log(mergeSort([5,2,4,3,6]))