import React from 'react';

// 모음 사전

const VowelDictionary = () => {
  const solution = (word) => {
    const arr = ['A', 'E', 'I', 'O', 'U'];
    let weighted = [5 ** 4, 5 ** 3, 5 ** 2, 5 ** 1, 5 ** 0];
    return word
      .split('')
      .map((v, i) => {
        return weighted.slice(i).reduce((a, b) => a + b) * arr.indexOf(v) + 1;
      })
      .reduce((a, b) => a + b);
  };
  // [A = 0, E = 1, I = 2, O = 3, U = 4]
  // A = 1

  // (5 ** 4 + 5 ** 3 + 5 ** 2 + 5 ** 1 + 5 ** 0 ) * 2 + 1 =
  // ( 625 + 125 + 25 + 5 + 1 ) * 2 + 1 = 781 * 2 + 1 = 1563

  // AAAAA = 5
  // AAAAE = 6
  // AAAAI = 7
  // AAAAO = 8
  // AAAAU = 9

  // AAAE = 10
  // AAAEA = 11

  // AAAI = 16
  // AAAIA = 17

  // AAAO = 22
  // AAAOA = 23

  // AAAU = 28
  // AAAUA = 29

  // AAE = 34
  // AAEAA = 35

  // B = ?
  // BIO = 1189
  // I = 1563

  return <div></div>;
};

export default VowelDictionary;
