import React from 'react';

// 추억 점수

const MemoryScore = () => {
  const solution = (name, yearning, photo) => {
    // 이차원 배열인 사진 배열을 순회
    return photo.map((v) => {
      // 사진에 있는 인물 배열 v를 순회
      return (
        v
          // v의 요소인 v2가 추억하는 인물 배열인 name안에 있다면 v2가 name의 몇번째 인덱스인지 찾은후
          // 점수 배열인 yearning의 해당 인덱스를 찾아서 리턴
          // v2가 name안에 없다면 0을 리턴
          // ex [ 0, 4, 5, 0, 3 ]
          .map((v2) => (name.includes(v2) ? yearning[name.indexOf(v2)] : 0))
          // 위에서 리턴한 점수 배열을 전부 합산
          .reduce((a, b) => a + b)
      );
    });
  };
  return <div></div>;
};

export default MemoryScore;
