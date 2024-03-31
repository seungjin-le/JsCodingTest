import React from 'react';

// Lv2 기능개발

const FunctionDevelopment = () => {
  const solution = (progresses, speeds) => {
    let answer = [0];
    let days = progresses.map((v, i) => Math.ceil((100 - v) / speeds[i]));
    let maxDay = days[0];
    console.log(days, maxDay);
    for (let i = 0, j = 0; i < days.length; i++) {
      days[i] <= maxDay
        ? (answer[j] += 1)
        : (() => {
            maxDay = days[i];
            answer[++j] = 1;
          })();
    }

    return answer;
  };
  console.log(solution([93, 30, 55], [1, 30, 5]));
  return <div></div>;
};

export default FunctionDevelopment;
