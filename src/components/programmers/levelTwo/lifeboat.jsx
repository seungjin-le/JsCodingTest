import React from 'react';

// 구명보트

const Lifeboat = () => {
  const solution = (people, limit) => {
    // 배가 움직인 횟수
    let answer = 0;
    // people의 첫번째 위치와 마지막 위치
    let arr = [0, people.length - 1];
    // 내림차순으로 정렬
    people.sort((a, b) => b - a);
    // arr이 가지고 있는 people의 위치를 비교
    while (arr[0] < arr[1]) {
      // people의 첫번째 값과 마지막값을 더합니다.
      let plus = people[arr[0]] + people[arr[1]];
      // 만약 plus가 limit보다 크다면 배열의 첫번째 위치를 +1
      if (plus > limit) {
        arr[0]++;
      } else {
        // plus가 limit보다 작다면 첫번째 위치 +1, 마지막 위치 -1
        arr[0]++;
        arr[1]--;
      }
      // answer++
      answer++;
    }
    // arr익 가지고 있는 배열의 위치가 같다면 answer + 1;
    if (arr[0] === arr[1]) answer++;
    return answer;
  };
  return <div></div>;
};

export default Lifeboat;
