import React from 'react';

// 약수의 합

const SumOfFactors = () => {
  const solution = (n) => {
    let answer = 0;
    for(let a = 1; a <= n; a++){
      if(n % a === 0){
        answer += a
      }
    }
    return answer;
  }
  return (
    <div>

    </div>
  );
};

export default SumOfFactors;
