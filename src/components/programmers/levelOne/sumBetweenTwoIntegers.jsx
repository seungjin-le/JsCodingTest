import React from 'react';

// 두 정수 사이의 합

const SumBetweenTwoIntegers = () => {
  const solution = (a, b) => {
    let answer = 0;
    if(a <= b){
      for(a; a <= b; a++){
        answer += a;
      }
    }else{
      for(b; b <= a; b++){
        answer += b;
      }
    }
    return answer;
  }
  return (
    <div>

    </div>
  );
};

export default SumBetweenTwoIntegers;
