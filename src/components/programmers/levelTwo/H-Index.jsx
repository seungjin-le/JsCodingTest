import React from 'react';

// H-Index

const HIndex = () => {
  const solution = (citations) => {
    return (citations = citations
      // 배열을 내림차순으로 정렬
      .sort((a, b) => b - a)
      // H-Index의 개산 법을 적용해서 배열을 순회하면서 인용 횟수가 index(출판 횟수) 값보다
      // 작은 걸 제거해 주고 남는 배열의 길이가 H-Index입니다.
      .filter((v, i) => v > i && v).length);
  };
  return <div></div>;
};

export default HIndex;
