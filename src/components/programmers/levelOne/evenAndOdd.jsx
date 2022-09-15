import React from 'react';

// 짝수와 홀수

const EvenAndOdd = () => {
  const solution = (num) =>{
    // 매개변수 num을 2로 나눌수 있으면 'Odd' 못나누면 'Even'를 리턴
    return num %2 ? 'Odd' : 'Even';
  }
  return (
    <div>

    </div>
  );
};

export default EvenAndOdd;
