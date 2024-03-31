import React from 'react';

// 과일 장수

const FruitSeller = () => {
  const solution = (k, m, score) => {
    let answer = 0;
    // score 배열의 m번째 값만 확이하면 되기때문에
    // score의 길이를 m으로 나눈 후 내림 한만큼 반복
    let len = Math.floor(score.length / m);
    // 문제 설명에 m이 score의 길이보다 클수 있습니다.
    if (m > score.length) return 0;
    // 큰순으로 정렬
    score.sort((a, b) => b - a);
    for (let a = 0, b = m - 1; a < len; a++) {
      // score의 m - 1 번째 값 * m을 answer에 더해줍니다.
      answer += score[b] * m;
      // b에 m을 더해줍니다.
      b += m;
    }
    return answer;
  };
  return <div></div>;
};

export default FruitSeller;
