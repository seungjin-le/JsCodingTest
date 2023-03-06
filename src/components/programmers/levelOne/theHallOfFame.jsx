import React from 'react';

// 명예의 전당(1)

const TheHallOfFame = () => {
  function solution(k, score) {
    let answer = [];

    return score.map((v) => {
      answer.push(v);
      if (answer.length > k) {
        answer = answer.sort((a, b) => b - a);
        answer.pop();
      }
      const min = Math.min(...answer);

      return min;
    });
  }
  return <div></div>;
};

export default TheHallOfFame;
