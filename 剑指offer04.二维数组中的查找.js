var findNumberIn2DArray = function(matrix, target) {
    if(matrix.length==0)
    return false
    let n=matrix.length,m=matrix[0].length
    let i=0,j=m-1
    while(i<n && j>=0){
        if(matrix[i][j]==target){
            return true
        }else if(matrix[i][j]>target){
            j--
        }else{
            i++
        }
    }
    return false
};

console.log(findNumberIn2DArray([
    [1,   4,  7, 11, 15],
    [2,   5,  8, 12, 19],
    [3,   6,  9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30]
  ],5))