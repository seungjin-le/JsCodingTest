import React from 'react';

// 점프와 순간 이동

const JumpAndTeleport = () => {
  const solution = (n) => {
    // 점프 횟수 카운트할 변수
    let answer = 0;
    // n이 0이 될때까지 반복문 실행
    while (n !== 0) {
      // Number.isInteger(n / 2) => n을 2로 나눳을때 소수가 아니라면
      // (n = n / 2) => n 을 2로 나누고 반대로 소수라면
      // ((n = n - 1), answer++) => n에서 1을 빼고, 점프 횟수인 answer에 1을 더합니다,
      Number.isInteger(n / 2) ? (n = n / 2) : (n--, answer++);
    }
    return answer;
  };
  return <div></div>;
};

export default JumpAndTeleport;
