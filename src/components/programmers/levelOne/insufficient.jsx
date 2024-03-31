import React from "react";

// 부족한 금액 계산하기

const Insufficient = () => {
  const solution = (price, money, count) => {
    // price 놀이기구 이용요금
    // money 처음에 가지고 있던 돈
    // count 놀이기구 이용 횟수
    let answer = 0;
    // 반복문을 count(놀이기구 이용 횟수) 만큼 반복
    for (let a = 0; a <= count; a++) {
      // 이용요금 * 이용횟수 를 answer에 계속 더해줍니다.
      answer += price * a;
    }
    // 만약 총 이용요금이 소지금액보다 높으면 부족한 금액을 리턴해줍니다.
    // 소지금액이 이용요금보다 많으면 0을 리턴
    return answer > money ? Math.abs(money - answer) : 0;
  };
  console.log(solution(3, 20, 4));
  return <div></div>;
};

export default Insufficient;
