import React from 'react';

// 롤케이크 자르기

const CuttingTheRollCake = () => {
  const solution = (topping) => {
    let arr = [Array(10001).fill(0), Array(10001).fill(0)];
    let set = [0, 0];
    let answer = 0;
    topping.map((v) => arr[1][v]++);

    set[1] = arr[1].filter((v) => v !== 0).length;

    topping.map((v) => {
      if (arr[0][v] === 0) set[0]++;
      arr[0][v]++;
      arr[1][v]--;
      if (arr[1][v] === 0) set[1]--;
      if (set[0] === set[1]) answer++;
      if (set[0] > set[1]) return answer;
    });
    return answer;
  };
  return <div></div>;
};

export default CuttingTheRollCake;
