var intersection = function(nums1, nums2) {
    const map={};
    const arr=[];
    for(let i=0;i<nums1.length;i++){
        if(!map[nums1[i]])
        map[nums1[i]]=1;
    }
    for(let i=0;i<nums2.length;i++){
        if(map[nums2[i]])
        arr.push(nums2[i]);
        map[nums2[i]]=0;//也可以将nums2利用Set去重，这样就不需要将键值设置为0 const s=new Set(nums2); const arrs=[...s];
    }
    return arr;
 };