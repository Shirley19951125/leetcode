function fizzBuzz(n){
    const answer=[];
    for(let i=1;i<=n;i++){
        const is3Times=i%3===0;
        const is5Times=i%5===0;
        const is15Times=i%15===0
        if(is15Times){
         answer.push('FizzBuzz');
         continue;
        }
        if(is5Times){
            answer.push('Buzz');
            continue;
        }
        if(is3Times){
            answer.push('Fizz');
            continue;
        }
        answer.push(`${i}`);
    }
    return answer;
 }