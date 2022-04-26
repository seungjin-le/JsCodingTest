import React from "react";

const SamNumber = () => {
  const solution = (arr) => {
    let answer = [];
    arr.map((v, i) => v !== arr[i + 1] && answer.push(v));
    return answer;
  };
  console.log(solution([1, 1, 2, 3, 2, 2, 2, 4, 4, 4, 4, 4, 4, 3, 3]));
  return <div></div>;
};

export default SamNumber;
