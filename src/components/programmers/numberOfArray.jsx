import React from "react";

// 자연수 뒤집어 배열 만들기

const NumberOfArray = () => {
  const solution = (n) => {
    let answer = [...String(n)];
    answer = answer.reverse().map((v) => Number(v));
    return answer;
  };
  return <div></div>;
};

export default NumberOfArray;
