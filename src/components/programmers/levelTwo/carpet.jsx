import React from 'react';

// 카펫

const Carpet = () => {
  const solution = (brown, yellow) => {
    let answer = [];

    for (let a = 1; a <= yellow; a++) {
      // yellow를 a로 나눴을 때 0일 경우 a + 2는 세로의 길이이고 a는 yellow의 세로줄 개수입니다.
      if (yellow % a === 0) {
        // 순서대로 (yellow / a + 2)에서 yellow를 a로 나눈 다음 + 2를 하면 가로의 길이이고
        // 가로의 길이를 2로 곱하면 윗선과 아래 선의 크기입니다.
        // 여기서 a * 2는 yellow의 세로줄 양 사이드에 있는 brown의 개수입니다.
        // (yellow / a + 2) * 2 + a * 2는 brown의 개수이고
        // 만약 brown과 (yellow / a + 2) * 2 + a * 2가 같을 경우
        if (brown === (yellow / a + 2) * 2 + a * 2) {
          // 배열에 [ 가로줄, 세로줄 ]을 넣어 리턴
          answer.push(yellow / a + 2, a + 2);
          return answer;
        }
      }
    }
    return answer;
  };
  return <div></div>;
};

export default Carpet;
