import React from 'react';

// 연속된 부분 수열의 합

const SumOfSequences = () => {
  function solution(sequence, k) {
    let arr = [];
    let pos = [];
    sequence
      .filter((v) => v <= k)
      .map((v, i) => {
        arr.push(v);
        let total = arr.reduce((a, b) => a + b);
        //    total > k ? total === k ?
      });
    //sequence
    for (let a = 0; a < sequence.length; a++) {
      let count = 0;
      for (let b = a; count < k; b++) {
        count += sequence[b];
        if (count === k) arr.push([a, b]);
      }
    }
    return arr.sort((a, b) => a[1] - a[0] - (b[1] - b[0]))[0];
  }

  return <div></div>;
};

export default SumOfSequences;
