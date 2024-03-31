import React from 'react';

// 삼총사

const Trio = () => {
  const solution = (number) => {
    // 3개를 더했을 때 0이 됐을 때 카운트할 변수
    let answer = 0;
    // 첫번째 반복문에서 배열 number의 첫번째부터 시작
    for (let a = 0; a < number.length; a++) {
      // 두번째 반복문에서 배열 number의 두번째부터 시작
      for (let b = a + 1; b < number.length; b++) {
        // 세번째 반복문에서 배열 number의 세번째부터 시작
        for (let c = b + 1; c < number.length; c++) {
          // 배열 number의 a 번째 + b 번째 + c 번째를 더했을 경우 0일시 answer++
          if (number[a] + number[b] + number[c] === 0) answer++;
        }
      }
    }
    return answer;
  };

  return <div></div>;
};

export default Trio;
