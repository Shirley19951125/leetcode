var reverseWords = function(s) {

    let arr=s.split(' ')
    arr=arr.filter(value=>value!=='')
    arr.reverse()
    return arr.join(' ')
};
console.log(reverseWords(" a good   example"))