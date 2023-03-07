import React from 'react';

// 문자열 나누기

const SplitString = () => {
  const solution = (s) => {
    let answer = 0;
    let obj = { sum: 0 };

    s.split('').map((v) => {
      if (Object.keys(obj).length === 1) return (obj[v] = 1);
      obj.hasOwnProperty(v) ? obj[v]++ : obj.sum++;
      Object.keys(obj).forEach((key) => {
        if (key !== 'sum' && obj[key] === obj.sum) {
          answer++;
          return (obj = { sum: 0 });
        }
      });
    });
    return Object.keys(obj).length > 1 ? answer + 1 : answer;
  };
  return <div></div>;
};

export default SplitString;
