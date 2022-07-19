function heapSort(nums){
    function maxHeap(){
        for(let i=  Math.floor(len/2)-1;i>=0;i--){
            heapify(i)
        }
    }
    function heapify(i){
        let large=i,l=2*i+1, r=2*i+2
        if(l<len && nums[large]<nums[l]){
            large=l
        }
        if(r <len && nums[large]<nums[r]){
            large=r
        }
        if(large!==i){
            swap(large,i)
            heapify(large)
        }

    }
    function swap(a,b){
        let t=nums[a]
        nums[a]=nums[b]
        nums[b]=t
    }

    var len=nums.length
    maxHeap()

    for(let i=nums.length-1;i>0;i--){
        swap(i,0)
        len--
        heapify(0)

    }
    return nums
}



function buildMaxHeap(arr) {   // 建立大顶堆
    len = arr.length;
    for (var i = Math.floor(len/2)-1; i >= 0; i--)//从第一个非叶子节点开始堆调整
     {
        heapify(arr, i);
    }
}

function heapify(arr, i) {     // 只调整每个非叶子节点和他的左右节点中变化了的节点子树
   i=typeof i=='undefined'?0:i;
  var left = 2 * i + 1,
        right = 2 * i + 2,
        largest = i;

    if (left < len && arr[left] > arr[largest]) {
        largest = left;
    }

    if (right < len && arr[right] > arr[largest]) {
        largest = right;
    }

    if (largest != i) {
        swap(arr, i, largest);
        heapify(arr, largest);
    }
}

function swap(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function heapSort(arr) {
    buildMaxHeap(arr); //首先建立大顶堆

    for (var i = arr.length-1; i > 0; i--) {
        swap(arr, 0, i); //交换堆顶和最后一个元素
        len--;
        heapify(arr, 0);//重新调整堆
    }
    return arr;
}

console.log(heapSort([5,4,2,3,56,1]))