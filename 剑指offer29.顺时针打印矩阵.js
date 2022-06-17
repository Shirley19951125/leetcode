// var spiralOrder = function(matrix) {
//     if(!matrix.length || !matrix[0].length) return []
//     let m=matrix.length,n=matrix[0].length
//     const visited=new Array(m).fill(0).map(()=>new Array(n).fill(false)) //如果使用map方法，一定要fill(0)
//     const res=[],directions=[[0,1],[1,0],[0,-1],[-1,0]]
//     let row=0,column=0,index=0
//     while(res.length<m*n){
//         res.push(matrix[row][column])
//         visited[row][column]=true
//         const newRow=row+directions[index][0],newCol=column+directions[index][1]
//         if(!(newRow>=0 && newRow<m && newCol>=0 && newCol<n && !visited[newRow][newCol])){
//             index=(index+1)%4
//         }
//         row+=directions[index][0]
//         column+=directions[index][1]
//     }
//     return res
// };
console.log(spiralOrder([[1,2,3],[4,5,6],[7,8,9]]))
function spiralOrder(matrix){
    if(!matrix.length || !matrix[0].length) return []
    let m=matrix.length,n=matrix[0].length
    let top=0,bottom=m-1,left=0,right=n-1
    const res=[]
    while(top<bottom && left<right){
        for(let i=left;i<right;i++) res.push(matrix[top][i])
        for(let i=top;i<bottom;i++) res.push(matrix[i][right])
        for(let i=right;i>left;i--) res.push(matrix[bottom][i])
        for(let i=bottom;i>top;i--) res.push(matrix[i][left])
        left++
        right--
        top++
        bottom--
    }
    if(top==bottom){
        for(let i=left;i<=right;i++){
            res.push(matrix[top][i])
        }
    }
    else if(left==right){
        for(let i=top;i<=bottom;i++){
            res.push(matrix[i][left])
        }
    }
    return res
}
