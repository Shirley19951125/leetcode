function radixSort(nums){
    let maxValue=nums[0],mod=10,dev=1,maxDigit=0

    for(let i=0;i<nums.length;i++){
        if(nums[i]>maxValue){
            maxValue=nums[i]
        }
    }
    while(maxValue){
        maxDigit++
        maxValue=Math.floor(maxValue/10)
    }
    for(let j=0;j<maxDigit;j++,mod*=10,dev/=10){
        const counts=[]
        for(let i=0;i<nums.length;i++){
            let index=Math.floor(nums[i]%mod/dev)
            if(!counts[index]){
                counts[index]=[]
            }
            counts[index].push(nums[i])
        }
        let sort=0
        for(let i=0;i<counts.length;i++){
            while(counts[i]){
                nums[sort++]=counts[i].shift()
            }
        }
    }
    return nums
}
console.log(radixSort([35,17,18,22,4]))