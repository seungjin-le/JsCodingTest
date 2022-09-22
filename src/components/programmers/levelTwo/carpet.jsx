import React from 'react';

// 카펫

const Carpet = () => {
  const solution = (brown, yellow) => {
    let answer = [];
    for (let a = 1; a <= yellow; a++) {
      if (yellow % a === 0) {
        if (brown === (yellow / a + 2) * 2 + a * 2) {
          answer.push(yellow / a + 2, a + 2);
          return answer;
        }
      }
    }
    return answer;
  };
  return <div></div>;
};

export default Carpet;
