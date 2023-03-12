import React from 'react';

// 점프와 순간 이동

const JumpAndTeleport = () => {
  const solution = (n) => {
    let answer = 0;
    while (n !== 0) {
      Number.isInteger(n / 2) ? (n = n / 2) : ((n = n - 1), answer++);
    }
    return answer;
  };
  return <div></div>;
};

export default JumpAndTeleport;
