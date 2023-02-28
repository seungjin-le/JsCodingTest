import React from 'react';

// 문자열 나누기

const SplitString = () => {
  function solution(s) {
    let answer = 0;
    let obj = {};
    s.split('').map((v, i) => {
      !obj[v] ? (obj[v] = 1) : obj[v]++;

      Object.entries(obj).map(([key, value]) => {
        if (key !== v && value !== 0 && obj[v] === value) {
          answer++;
          console.log(obj);
          return (obj = {});
        }
      });
    });
    Object.keys(obj).length !== 0 ? answer++ : answer;
    return answer;
  }
  return <div></div>;
};

export default SplitString;
