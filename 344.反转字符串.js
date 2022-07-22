function reverseString(s){
    let h=0,t=s.length-1;
    while(h<t){
        [s[h],s[t]]=[s[t],s[h]]; //解构赋值
        h++;
        t--;
    }
}