import React from "react";

const Insufficient = () => {
  const solution = (price, money, count) => {
    let answer = 0;
    for (let a = 0; a <= count; a++) {
      answer += price * a;
    }
    return answer > money ? Math.abs(money - answer) : 0;
  };
  console.log(solution(3, 20, 4));
  return <div></div>;
};

export default Insufficient;
