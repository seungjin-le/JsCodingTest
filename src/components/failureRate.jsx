import React from "react";

// 실패율

const FailureRate = () => {
  const solution = (N, stages) => {
    let users = stages.length;
    let answer = [];
    for (let a = 1; a <= N; a++) {
      let filter = stages.filter((v) => v === a);
      answer.push([a, (filter.length / users) * 100]);
      users -= filter.length;
    }
    answer.sort((a, b) => b[1] - a[1]);
    answer = answer.map((v, i) => v[0]);
    return answer;
  };
  solution(5, [2, 1, 2, 6, 2, 4, 3, 3]);
  return <div></div>;
};

export default FailureRate;
