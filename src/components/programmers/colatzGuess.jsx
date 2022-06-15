import React from 'react';

// 콜라츠 추측

const ColatzGuess = () => {
  const solution = (num) => {
    // num 이 1이 아닐때 실행
    if(num !== 1){
      // 반복 횟수 가 500을 넘는다면 -1 리턴
      for(let a = 1; a <= 500; a++){
        // 현제 num 이 짝수라면 나누기 2 홀수라면 3을 곱하고 + 1
        num =  num % 2 === 0 ? num/2 : num*3+1;
        // 500번을 실행했다면 -1 리턴
        if(a === 500){
          return -1
        }
        // num 이 1이 됬다면 반복 횟수 리턴
        if(num === 1){
          return a
        }
      }
    }else{
      return 0
    }
  }
  return (
    <div>

    </div>
  );
};

export default ColatzGuess;
