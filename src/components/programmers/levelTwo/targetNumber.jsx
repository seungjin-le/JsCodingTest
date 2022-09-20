import React from 'react';

const TargetNumber = () => {
  const solution = (numbers, target) => {
    let answer = 0;
    const counts = (count = 0, sum = 0) => {
      if (count === numbers.length) {
        if (target === sum) {
          answer++;
        }
        return;
      }

      counts(count + 1, sum + numbers[count]);
      counts(count + 1, sum - numbers[count]);
    };

    counts();
    return answer;
  };
  return <div></div>;
};

export default TargetNumber;
