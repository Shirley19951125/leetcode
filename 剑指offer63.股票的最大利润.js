var maxProfit = function(prices) {
    let min=prices[0],prof=0
    for(let i=0;i<prices.length;i++){
        if(prices[i]<min) min=prices[i]
        else prof=Math.max(prof,prices[i]-min)
    }
    return prof
};