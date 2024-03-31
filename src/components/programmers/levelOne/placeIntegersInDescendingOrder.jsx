import React from 'react';

// 정수 내림차순으로 배치하기

const PlaceIntegersInDescendingOrder = () => {
  const solution = (n) => {
    // String(n) : 숫자열 n을 문자열로 타입 변경
    // .split('') : 문자열 n을 하자리씩 잘라 문자 배열로 만들기
    // .sort((a,b) => b-a) : 문자 배열을 내림차순으로 정렬
    // .join('') : 문자 배열을 문자열로 변경
    // Number(String(n) : 문자열을 숫자열로 타입 변경
    return  (
      Number(String(n)
        .split('')
        .sort((a,b) => b-a)
        .join(''))
    );
  }
  return (
    <div>

    </div>
  );
};

export default PlaceIntegersInDescendingOrder;
