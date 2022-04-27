import React from "react";

const UndefinedNum = () => {
  const solution = (numbers) => {
    let answer = 0;
    for (let a = 0; a < 9; a++) {
      answer += numbers.includes(a) ? 0 : a;
    }
    return answer;
  };

  solution([5, 8, 4, 0, 6, 7, 9]);
  return <div></div>;
};

export default UndefinedNum;
