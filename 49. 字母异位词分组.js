var groupAnagrams = function(strs) {
    let map={},res=[]
    for(let str of strs){
        let strSort=str.split('').sort().join('')
        if(!map[strSort]){
            map[strSort]=[]
        }
        map[strSort].push(str);
    }
    for(let i in map){
        res.push(map[i])
    }
    return res
};