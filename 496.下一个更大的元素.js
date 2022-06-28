var nextGreaterElement = function(nums1, nums2) {
    let stk=[]
    const map=new Map()
    for(let i=nums2.length-1;i>=0;i--){
        while(stk.length && nums2[i]>stk[stk.length-1]){
            stk.pop()
        }
        map.set(nums2[i],stk.length?stk[stk.length-1]:-1)
        stk.push(nums2[i])
    }
    const arr=new Array(nums1.length).fill(0).map((v,i)=>map.get(nums1[i]))
    return arr
}