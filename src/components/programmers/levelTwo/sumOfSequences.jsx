import React from 'react';

// 연속된 부분 수열의 합

const SumOfSequences = () => {
  const solution = (sequence, k) => {
    let answer = [];
    let arr = [0];
    let size = sequence.length;
    let pos = [0, 0];
    sequence.map((v, i) => arr.push(v + arr[i]));

    // ex) sequence = [1, 2, 3, 4, 5] , arr = [0, 1, 3, 6, 10, 15]
    while (pos[0] <= pos[1]) {
      let sum = arr[pos[1]] - arr[pos[0]];
      if (sum === k) {
        let newSize = pos[1] - 1 - pos[0];
        if (size > newSize) {
          answer = [pos[0], pos[1] - 1];
          size = newSize;
        }
      }
      sum < k ? pos[1]++ : pos[0]++;
    }

    return answer;
  };
  return <div></div>;
};

export default SumOfSequences;
