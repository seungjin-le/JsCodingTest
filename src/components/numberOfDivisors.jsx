import React from "react";

const NumberOfDivisors = () => {
  const solution = (left, right) => {
    let answer = 0;
    for (let a = left; a <= right; a++) {
      let count = 0;
      for (let b = 1; b <= a; b++) {
        a % b === 0 && count++;
      }
      count % 2 === 0 ? (answer += a) : (answer -= a);
    }
    return answer;
  };
  return <div></div>;
};

export default NumberOfDivisors;
