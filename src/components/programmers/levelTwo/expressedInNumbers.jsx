import React from 'react';

// 숫자로 표현

const ExpressedInNumbers = () => {
  const solution = (n) => {
    let answer = 1;
    for (let a = 1; a <= n / 2; a++) {
      let sum = 0;
      let check = a;
      while (sum < n) {
        sum += check++;
      }
      if (sum === n) {
        answer += 1;
      }
    }
    return answer;
  };
  return <div></div>;
};

export default ExpressedInNumbers;
