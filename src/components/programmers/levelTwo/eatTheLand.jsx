import React from 'react';

// 땅따먹기

const EatTheLand = () => {
  const solution = (land) => {
    for (let a = 1; a < land.length; a++) {
      for (let b = 0; b < land[0].length; b++) {
        land[a][b] += Math.max(
          ...land[a - 1].slice(0, b),
          ...land[a - 1].slice(b + 1)
        );
      }
    }
    return Math.max(...land[land.length - 1]);
  };
  return <div></div>;
};

export default EatTheLand;
