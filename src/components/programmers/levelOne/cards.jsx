import React from 'react';

// 카드 뭉치

const Cards = () => {
  const solution = (cards1, cards2, goal) => {
    // cards1, cards2를 사용해 goal을 만들 수 있으면 true 아니라면 false 리턴할 변수
    let answer = true;

    // 배열 goal을 순회
    goal.map((v) => {
      // cards1의 첫 번째 값이 v와 같으면 cards1의 첫 번째 요소 삭제
      cards1[0] === v
        ? cards1.shift()
        : // cards1의 첫 번째 값이 v와 다르면 cards2의 첫 번째 요소 와 같은지 비교
        cards2[0] === v
        ? // cards2의 첫 번째 값이 v와 같으면 cards2의 첫 번째 요소 삭제
          cards2.shift()
        : // cards1과 cards2의 첫 번째 요소가 v랑 다르다면 answer = false
          (answer = false);
    });
    // answer이 true라면 "yes" false라면 "No" 리턴
    return answer ? 'Yes' : 'No';
  };

  return <div></div>;
};

export default Cards;
