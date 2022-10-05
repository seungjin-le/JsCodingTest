import React from 'react';

// k진수에서 소수 개수 구하기

const FindTheNumberOfDecimalsInK = () => {
  const solution = (n, k) => {
    n = n
      .toString(k)
      .split('0')
      .filter((v) => v !== '1' && v && primeNumberCheck(parseInt(v))).length;
    return n;
  };

  function primeNumberCheck(n) {
    const sqrt = Math.sqrt(n);
    for (let a = 3; a <= sqrt; a += 2) {
      if (n % a === 0) return false;
    }
    return true;
  }
  return <div></div>;
};

export default FindTheNumberOfDecimalsInK;
