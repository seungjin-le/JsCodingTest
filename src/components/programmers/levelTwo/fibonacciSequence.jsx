import React from 'react';

// 피보나치 수열

const FibonacciSequence = () => {
  const solution = (n) => {
    let arr = [0, 1, 1];
    if (n === 0) return arr[0];
    if (n === 1 && n === 2) return arr[1];
    for (let a = 3; a < n; a++) {
      arr[0] = arr[1];
      arr[1] = arr[2];
      arr[2] = (arr[0] + arr[1]) % 1234567;
    }
    return (arr[1] + arr[2]) % 1234567;
  };
  return <div></div>;
};

export default FibonacciSequence;
