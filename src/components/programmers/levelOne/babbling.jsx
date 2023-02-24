import React from 'react';

// 옹알이 (2)

const Babbling = () => {
  const solution = (babbling) => {
    // 조카가 발음할 수 있는 단어를 카운트할 변수
    let answer = 0;
    // 조카가 발음할 수 있는 단어 정규식 배열
    let regexArr = [/aya/g, /ye/g, /woo/g, /ma/g];
    // 배열 단어장 순회
    babbling.map((v) => {
      // 정규식 배열을 순회하면서 단어장 요소를 검사
      regexArr.map((value, index) => {
        // 단어장 요소를 정규식 배열을 순회하면서 해당 단어가 있을 경우
        // 해당 단어는 index + 1로 치환
        // ex) yee => 2e
        v = v.replace(value, index + 1);
      });
      // 치환한 문자열을 숫자로 변경했을때 NaN값 이거나
      // 1~4의 숫자가 연속되면 멈춤
      if (isNaN(+v) || v.match(/([0-4])\1{1,}/)) return false;
      // 조건문에 걸리지 않으면 answer 카운트
      answer++;
    });
    return answer;
  };
  return <div></div>;
};

export default Babbling;
