import React from "react";
// 나누어 떨어지는 숫자 배열

const ArrDivision = () => {
  const solution = (arr, divisor) => {
    let answer = [];
    arr.map((v, i) => v % divisor === 0 && answer.push(v));
    answer.length !== 0 ? answer.sort((a, b) => a - b) : answer.push(-1);
    return answer;
  };
  solution([5, 9, 7, 10], 5);
  solution([2, 36, 1, 3], 1);
  solution([3, 2, 6], 10);
  return <div></div>;
};

export default ArrDivision;
