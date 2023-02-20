import React from 'react';

// 기사단원의 무기

const KnightSWeapon = () => {
  const solution = (number, limit, power) => {
    let answer = 0;
    const fun = (a) => {
      let arr = [];
      if (a === 1) return a;
      for (let b = 1; b <= Math.sqrt(a); b++) {
        if (a % b === 0) {
          arr.push(a / b);
          arr.push(b);
        }
      }
      arr = arr.filter((v, i) => arr.indexOf(v) === i);
      return arr.length > limit ? power : arr.length;
    };

    for (let a = 1; a <= number; a++) {
      answer += fun(a);
    }

    return answer;
  };

  return <div></div>;
};

export default KnightSWeapon;
