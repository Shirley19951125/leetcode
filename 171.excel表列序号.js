var titleToNumber = function(columnTitle) {
    let ans=0;
    for(let i=columnTitle.length-1;i>=0;i--){
        ans+=Math.pow(26,(columnTitle.length-1-i))*(columnTitle.charCodeAt(i)-'A'.charCodeAt()+1);
        //也可以用26**(columnTitle.length-1-i)，columnTitle.charCodeAt(i)也可以替换成columnTitle[i].charCodeAt()
    }
return ans;
};