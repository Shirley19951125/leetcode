// var exist = function(board, word) {
//    let m=board.length||0,n=board[0].length||0
//    let visited=new Array(m)
//    // visited用来记录数组中的值是否被遍历到
//    for(let i=0;i<m;i++){
//        visited[i]=new Array(n).fill(false)
//    }
//    // check函数表示以board[i][j]为起点，后面是否有word[k..]
//    function check(i,j,s,k){
//     if(i<0 || i>=m || j<0 || j>=n || board[i][j]!==s[k]) return false
//     else if(k===s.length-1) return true
//     const directions=[[1,0],[-1,0],[0,1],[0,-1]]
//     visited[i][j]=true
//     let result=false
//     for(let [dx,dy] of directions){
//         let newi=i+dx,newj=j+dy
//         if(newi>=0 && newi<m && newj>=0 && newj<n){
//         if(!visited[newi][newj]){
//         let flag=check(newi,newj,s,k+1)
//         if(flag){
//              result=true
//              break
//         }
//     }
//     }
// }
//     visited[i][j]=false
//     return result
//    }

//     for(let i=0;i<m;i++){
//         for(let j=0;j<n;j++){
//             if(check(i,j,word,0)){
//                 return true
//             }

//         }
//     }
//     return false
// };


var exist = function(board, word) {
    let m=board.length||0,n=board[0].length||0
    function dfs(i,j,k){
        let result=false
        if(i<0 || i>=m || j<0 || j>=n ) return false
        if(board[i][j]===word[k]){
            if(k===word.length-1) return true
            result=dfs(i-1,j,k+1)||dfs(i+1,j,k+1)||dfs(i,j-1,k+1) ||dfs(i,j+1,k+1)
        }
        return result
    }
    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
            if(dfs(i,j,0)){
                return true
            }
        }
    }
    return false
}
console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]],"ABCCED"))