import React from 'react';

// 과일 장수

const FruitSeller = () => {
  const solution = (k, m, score) => {
    let answer = 0;
    let len = Math.floor(score.length / m);
    if (m > score.length) return 0;
    score.sort((a, b) => b - a);
    for (let a = 0, b = m - 1; a < len; a++) {
      answer += score[b] * m;
      b += m;
    }
    return answer;
  };
  return <div></div>;
};

export default FruitSeller;
