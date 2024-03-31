import React from 'react';

// 콜라 문제

const CokeProblem = () => {
  // 콜라를 받기 위해 마트에 주어야 하는 병 수 a
  // 빈 병 a개를 가져다 주면 마트가 주는 콜라 병 수 b
  // 상빈이가 가지고 있는 빈 병의 개수 n
  const solution = (a, b, n) => {
    // 마트에서 받은 콜라 개수를 카운트라 할 변수
    let answer = 0;
    // 상빈이가 가지고 있는 콜라의 개수( n )가 마트에서 콜라로 바꿔주는
    // 개수(a)보다 적을 시 반복문 종료
    while (n >= a) {
      // 처음에 상빈이가 가지고 있는 콜라(n)를 마트에서 받는 빈병( a )으로 나눈후
      // 마트에서 빈병을 주고 받은 콜라( b )를 곱해줍니다.
      answer += Math.floor(n / a) * b;
      // n은 answer과 같은 수식에 마트에 주고 남은 콜라(n % a)를 더해줍니다.
      n = Math.floor(n / a) * b + (n % a);
    }
    return answer;
  };
  return <div></div>;
};

export default CokeProblem;
