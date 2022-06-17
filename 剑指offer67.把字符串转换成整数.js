var strToInt = function(str) {
    let reg=/^(\-|\+)?\d+/
    let res = str.trim().match(reg)
    return res ? Math.max(Math.min(Number(res[0]),2**31-1),-(2**31)):0
  };