// 买卖股票的最佳时机1
var maxProfit = function(prices) {
    let min=prices[0],pro=0
    for(let i=1;i<prices.length;i++){
        if(prices[i]<min){
            min=prices[i]
        }else{
            pro=Math.max(pro,prices[i]-min)
        }
    }
    return pro
};

//买卖股票的最佳时机2
var maxProfit = function(prices) {
    let res=0
    for(let i=0;i<prices.length-1;i++){
        if(prices[i]<prices[i+1]){
            res+=prices[i+1]-prices[i]
        }
    }
    return res
}