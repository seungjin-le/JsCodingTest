import React from "react";

// 나누어 떨어지는 숫자 배열

const ArrDivision = () => {
  const solution = (arr, divisor) => {
    let answer = [];
    // 숫자배열 arr 을 map 로 순회하면서 divisor 로 나눴을시 나머지가 0이면 answer 에 push 합니다
    arr.map((v) => v % divisor === 0 && answer.push(v));
    // answer 의 길이가 0일시 -1을 리턴하기 위해 -1을 push 하고 길이가 0이 아니라면 정렬후 리턴
    answer.length !== 0 ? answer.sort((a, b) => a - b) : answer.push(-1);
    return answer;
  };
  solution([5, 9, 7, 10], 5);
  solution([2, 36, 1, 3], 1);
  solution([3, 2, 6], 10);
  return <div></div>;
};

export default ArrDivision;
