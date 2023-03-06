import React from 'react';

// 명예의 전당(1)

const TheHallOfFame = () => {
  const solution = (k, score) => {
    // k의 크기만큼 변수를 담을 배열
    let answer = [];
    // 점수 배열인 score 순회
    return score.map((v) => {
      // answer에 v를 추가
      answer.push(v);
      // answer에 변수를 추가한 후에 k보다 크다면
      if (answer.length > k) {
        // answer을 내림차순으로 정렬 후
        answer = answer.sort((a, b) => b - a);
        // 마지마 요소 삭제
        answer.pop();
      }
      // answer 안에 있는 요소들 중 가장 작은 요소를 리턴
      // 위 조건문을 통해 answer의 길이는 k와 같은 길이를
      // 유지하면서 새로 들어온 값이 기존에 있던 값보다 작으면
      // sort(), pop()을 통해서 알아서 삭제가 되고
      // 삭제 후에 배열 안에 요소들 중 가장 작은 값을 리턴하면 됩니다.
      return Math.min(...answer);
    });
  };
  return <div></div>;
};

export default TheHallOfFame;
