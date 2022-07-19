function bucketSort(nums,bucketSize){

    let maxValue=nums[0],
        minValue=nums[0],
        result=[];
    for(let i=1;i<nums.length;i++){
        if(nums[i]>maxValue)
        maxValue=nums[i];
        if(nums[i]<minValue)
        minValue=nums[i];
    }//分别找到最大值和最小值
    const DEFAULT_BUCKET_SIZE=5; //如果没有传参直接用默认值
    bucketSize=bucketSize||DEFAULT_BUCKET_SIZE;
    let bucketCount=Math.floor((maxValue-minValue)/bucketSize)+1;//桶数量
    const buckets=new Array(bucketCount);
    for(let i=0;i<bucketCount;i++){
        buckets[i]=[];
    }
    for(let i=0;i<nums.length;i++){
        buckets[Math.floor((nums[i]-minValue)/bucketSize)].push(nums[i]);
    }

    for(let i=0;i<bucketCount;i++){
        buckets[i].sort((a,b)=>a-b);
        for(let j=0;j<buckets[i].length;j++)
        result.push(buckets[i][j]);
    }
    return result;

}
console.log(bucketSort([6,3,9,2,4,5],3))
