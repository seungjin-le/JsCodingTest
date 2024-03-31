import React from 'react';

// 가장 가까운 같은 글자

const TheNearestSameLetter = () => {
  const solution = (s) => {
    let arr = s.split('').reverse();
    return arr
      .map((v, i) => {
        let index = -1;
        let count = 0;
        for (let a = i + 1; a < s.length || index !== -1; a++) {
          count++;
          if (v === arr[a]) {
            index = count;
            return index;
          }
        }
        return index;
      })
      .reverse();
  };
  return <div></div>;
};

export default TheNearestSameLetter;
