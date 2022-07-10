function isAnagram(s,t){
    if(s.length!==t.length)
    return false;
    valueTimes={};
    for(let i=0;i<s.length;i++){
        valueTimes[s[i]]?valueTimes[s[i]]++:valueTimes[s[i]]=1;
        valueTimes[t[i]]?valueTimes[t[i]]--:valueTimes[t[i]]=-1;//如果t中的字符先出现，s中的字符后出现，-1+1=0
    }
   return Object.values(valueTimes).every(value=>value===0);

}