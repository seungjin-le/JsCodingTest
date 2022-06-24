import React from 'react';

// 제곱근 판별

const SquareRootTest = () => {
  const solution = (n) => {
    // Math.sqrt(n) : n이 어떤 수(x)의 제곱근인지 구해주는 함수
    // Number.isInteger(Math.sqrt(n)) : 윗줄에서 구한 x가 정수인지 판별
    // Math.pow(Math.sqrt(n)+1,2) : 제곱근 구하는 함수
    if(Number.isInteger(Math.sqrt(n))){
      return Math.pow(Math.sqrt(n)+1,2)
    }
    return -1;
  }
  return (
    <div>

    </div>
  );
};

export default SquareRootTest;
