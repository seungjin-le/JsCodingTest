import React from 'react';

// x만큼 간격이 있는 n개의 숫자

const NNumbersSpacedByX = () => {
  const solution = (x, n) => {
    // Array(n) : 길이가 n인 배열 생성
    // Array(n).fill(x) : 배열의 시작부터 마지막 인덱스 까지 x를 할당
    // .map((v, i) => (i + 1) * v) : 배열안에 값을들 각 인덱스+1 * v 힐딩
    return Array(n).fill(x).map((v, i) => (i + 1) * v);
  }
  return (
    <div>
      
    </div>
  );
};

export default NNumbersSpacedByX;
