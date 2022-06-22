import React from "react";

// 실패율

const FailureRate = () => {
  const solution = (N, stages) => {
    // 스테이지의 길이를 users 변수에 넣어줍니다.
    let users = stages.length;
    // 스테이지와 실패율 2개씩 담을 이차원배열
    let answer = [];
    // 스테이지 수만큼 반복
    for (let a = 1; a <= N; a++) {
      // 스테이지를 클리한 유저 stages 를 filter 함수를 이용해 순회 하면서 a와 v가 같으면 filter 배열에 넣어줍니다.
      let filter = stages.filter((v) => v === a);
      // a는 스테이지, filter.length : a 스테이지에 있는 유저의 수, users : 유저의 수  (filter.length / users) * 100 백분율을 구하는 공식
      answer.push([a, (filter.length / users) * 100]);
      // 총 유저수에서 a스테이지에 있는 유저의 수만큼 뺍니다.
      users -= filter.length;
    }
    // 이차원배열 에서  실페율이 높은 순으로 정렬
    answer.sort((a, b) => b[1] - a[1]);
    // 정렬한 배열을 스테이지만 빼서 다시 answer 배열에 넣어줍니다.
    answer = answer.map((v) => v[0]);
    return answer;
  };
  solution(5, [2, 1, 2, 6, 2, 4, 3, 3]);
  return <div></div>;
};

export default FailureRate;
