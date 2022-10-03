import React from 'react';

// 멀리 뛰기

const LongJump = () => {
  const solution = (n) => {
    let answer = 0,
      arr = [0, 1];
    for (let c = 2; c <= n + 1; c++) {
      answer = arr[0] + (arr[1] % 1234567);
      arr[0] = arr[1];
      arr[1] = answer;
    }
    return answer % 1234567;
  };
  return <div></div>;
};

export default LongJump;
