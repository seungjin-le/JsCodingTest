import React from 'react';

// 옹알이 (2)

const Babbling = () => {
  const solution = (babbling) => {
    let answer = 0;
    let regexArr = [/aya/g, /ye/g, /woo/g, /ma/g];
    babbling.map((v, i) => {
      regexArr.map((value, index) => {
        v = v.replace(value, index + 1);
      });
      if (isNaN(+v)) return false;
      if (v.match(/([0-4])\1{1,}/)) return false;
      answer++;
    });
    return answer;
  };
  return <div></div>;
};

export default Babbling;
