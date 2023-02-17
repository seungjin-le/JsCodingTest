import React from 'react';

// 크기가 작은 부분문자열

const SmallSubstring = () => {
  const solution = (t, p) => {
    var answer = 0;
    for (let a = 0; a < t.length - p.length + 1; a++) {
      +p >= +t.substr(a, p.length) && answer++;
    }

    return answer;
  };
  return <div></div>;
};

export default SmallSubstring;
