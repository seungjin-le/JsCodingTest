import React from 'react';

// 3진법 뒤집기

const TernaryFlip = () => {
  const solution = (n) => {
    let answer = n.toString(3).split('').reverse().join('')
    return parseInt(answer, 3);
  }
  return (
    <div>

    </div>
  );
};

export default TernaryFlip;
