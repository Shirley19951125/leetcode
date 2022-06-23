var isValidSudoku = function(board) {
    for(let i=0;i<9;i++){
        if(!validHV(board[i])){

            return false

        }
        if(!validHV(getColumn(i))){
            console.log(2)
            return false
        }
    }
    for(let i=0;i<9;i+=3){
        for(j=0;j<9;j+=3){
            if(!validHV(get3x3(i,j))){
                console.log(3)

            return false
            }
        }
    }
    return true
    function validHV(nums){
        const map={}
        for(let i=0;i<nums.length;i++){
            if(map[nums[i]] && nums[i]!=='.') return false
            else  map[nums[i]]=nums[i]
        }
        return true
    }
    function getColumn(n){
        const ret=[]
        for(let i=0;i<9;i++){
            ret.push(board[i][n])
        }
        return ret
    }
    function get3x3(row,col){
        let ret=[]
        for(let i=row;i<3+row;i++){
            for(let j=col;j<3+col;j++){
                ret.push(board[i][j])
            }
        }
        return ret
    }
};
console.log(isValidSudoku([["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
))