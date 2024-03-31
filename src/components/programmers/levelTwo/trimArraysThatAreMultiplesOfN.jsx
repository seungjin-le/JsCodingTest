import React from 'react';

// n^2 배열 자르기

const TrimArraysThatAreMultiplesOfN = () => {
  const solution = (n, left, right) => {
    let answer = [];
    for (let a = left; a <= right; a++) {
      answer.push(Math.max(Number.parseInt(a / n), a % n) + 1);
    }
    return answer;
  };

  return <div></div>;
};

export default TrimArraysThatAreMultiplesOfN;
