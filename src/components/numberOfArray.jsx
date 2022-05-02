import React from "react";

const NumberOfArray = () => {
  const solution = (n) => {
    let answer = [...String(n)];
    answer = answer.reverse().map((v) => Number(v));
    return answer;
  };
  return <div></div>;
};

export default NumberOfArray;
