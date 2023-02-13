import React from 'react';

// 둘만의 암호

const ACodeForTwo = () => {
  const solution = (s, skip, index) => {
    const last = 'z'.charCodeAt();
    skip = skip.split('').map((v) => v.charCodeAt());
    return s
      .split('')
      .map((v) => v.charCodeAt())
      .map((v) => {
        let newIndex = index;
        for (let a = 0; a < newIndex; a++) {
          if (v === last) {
            v -= 26;
          }
          v++;
          skip.includes(v) && newIndex++;
        }
        return String.fromCharCode(v);
      })
      .join('');
  };
  return <div></div>;
};

export default ACodeForTwo;
