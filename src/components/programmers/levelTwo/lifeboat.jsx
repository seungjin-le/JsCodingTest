import React from 'react';

// 구명보트

const Lifeboat = () => {
  const solution = (people, limit) => {
    // 배가 움직인 횟수
    let answer = 0;
    let arr = [0, people.length - 1];
    people.sort((a, b) => b - a);

    while (arr[0] < arr[1]) {
      let plus = people[arr[0]] + people[arr[1]];
      if (plus > limit) {
        arr[0]++;
      } else {
        arr[0]++;
        arr[1]--;
      }
      answer++;
    }
    if (arr[0] === arr[1]) answer++;
    return answer;
  };
  return <div></div>;
};

export default Lifeboat;
