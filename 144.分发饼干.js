var findContentChildren = function(g, s) {
    g.sort((a,b)=>a-b);
    s.sort((a,b)=>a-b);
    let count=0;
    for(let i=0,j=0;i<g.length&&j<s.length;i++,j++){
        while(j<s.length && g[i]>s[j]){
            j++;
        }
        if(j<s.length){ //判断上面的循环跳出是否是因为j溢出，如果不是因为溢出，那么就是找到了饼干大小比胃口大的最小的j
            count++;
        }
    }
return count;
}