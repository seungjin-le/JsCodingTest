import React from 'react';

// [1차] 캐시

const Cash = () => {
  const solution = (cacheSize, cities) => {
    if (cacheSize === 0) return 5 * cities.length;
    let answer = 0;
    let arr = new Array(cacheSize).fill('');
    cities.map((v) => {
      const lowCase = v.toLowerCase();
      if (arr.includes(lowCase)) {
        arr.splice(arr.indexOf(lowCase), 1);
        arr.unshift(lowCase);
        answer++;
      } else {
        arr.pop();
        arr.unshift(lowCase);
        answer += 5;
      }
    });

    return answer;
  };
  return <div></div>;
};

export default Cash;
