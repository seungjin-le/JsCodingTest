import React from 'react';

// N개의 최소공배수

const LeastCommonMultipleOfNCrabs = () => {
  const solution = (arr) => {
    let answer = 0;
    let start = Math.max(...arr);
    while (answer !== arr.length) {
      arr.map((v) => {
        if (start % v === 0) {
          answer++;
        }
        return v;
      });
      if (answer === arr.length) {
        return start;
      }
      start++;
      answer = 0;
    }
  };
  return <div></div>;
};

export default LeastCommonMultipleOfNCrabs;
