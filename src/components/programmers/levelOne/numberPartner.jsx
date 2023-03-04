import React from 'react';

// 숫자 짝꿍

const NumberPartner = () => {
  function solution(X, Y) {
    let answer = '';
    const arr = [...new Set(X.length < Y.length ? X.split('') : Y.split(''))].sort((a, b) => b - a);

    let lens = [X.length, Y.length];

    arr.map((v) => {
      const reg = new RegExp(v, 'g');
      let aLen = lens[0] - X.replace(reg, '').length;
      let bLen = lens[1] - Y.replace(reg, '').length;
      if (lens[0] !== 0 && lens[1] !== 0) answer += v.repeat(aLen > bLen ? bLen : aLen);
    });
    if (answer[0] === '0') return '0';
    return !answer ? '-1' : answer;
  }
  return <div></div>;
};

export default NumberPartner;
