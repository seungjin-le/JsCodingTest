import React from 'react';

// 하샤드 수

const NumberOfHashes = () => {
  const solution = (x) => {
    let answer = true
    let arr = String(x).split('')
    let p = 0;
    arr.map((v) => p += parseInt(v))
    answer = x % p === 0;
    return answer;
  }
  return (
    <div>

    </div>
  );
};

export default NumberOfHashes;
