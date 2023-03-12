import React from 'react';

// 귤 고르기

const PickTangerines = () => {
  const solution = (k, tangerine) => {
    let answer = 0;
    let arr = [];
    const set = [...new Set(tangerine)];
    const obj = {};

    if (k === tangerine.length) return set.length;

    tangerine.map((v) => {
      obj.hasOwnProperty(v) ? obj[v]++ : (obj[v] = 1);
    });

    set.map((v) => arr.push(obj[v]));
    arr = arr.sort((a, b) => b - a);
    for (let a = 0, b = 0; a < arr.length; a++) {
      b += arr[a];
      answer = a + 1;
      if (b >= k) return answer;
    }
    return answer;
  };

  return <div></div>;
};

export default PickTangerines;
