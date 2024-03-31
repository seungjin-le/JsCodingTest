import React from 'react';

// 롤케이크 자르기

const CuttingTheRollCake = () => {
  const solution = (topping) => {
    // 길이가 10001까지 요소 0을 가지고 있는 배열 2개를 생성해 이차원 배열로 선언
    // ex ) arr = [ 철수가 가지고 있는 토핑의 개수, 동생이 가지고 있는 토핑의 개수 ]
    let arr = [Array(10001).fill(0), Array(10001).fill(0)];

    // 철수와 동생이 가지고 있는 토핑 가짓수를 카운트 할 배열
    // ex ) set = [ 철수, 동생 ]
    let set = [0, 0];

    // 동일한 가짓수를 유지하면서 롤케이크를 자를 수 있는 가짓수를 카운트
    let answer = 0;

    // topping을 순회하면서 arr[1][v] 카운트
    // ex ) v = 2,  arr[1](동생) = [ 0, 0, 1( 카운트 ), 0, 0, 0, 0]
    topping.map((v) => arr[1][v]++);

    // arr[1]의 요소 중 0이 아닌 요소들을 고른 후 개수를 set[1]에 추가
    set[1] = arr[1].filter((v) => v !== 0).length;

    // topping을 다시 순회
    topping.map((v) => {
      // arr[0]의 v번째 요소가 0이라면 철수가 가지고 있는 토핑이 아니였으므로
      // set[0](철수가 가지고 있는 토핑의 가짓수)을 카운트
      if (arr[0][v] === 0) set[0]++;

      // 철수가 가지고 있는 v라는 토핑을  + 1
      arr[0][v]++;

      // 철수가 하나 가지고 갔으므로
      // 동생이 가지고 있던 v라는 토핑을 - 1
      arr[1][v]--;

      // 동생이 가지고 있던 v라는 토핑이 0이라면
      // 동생이 가지고 있던 토핑의 가짓수에서 - 1
      if (arr[1][v] === 0) set[1]--;

      // 철수와 동생이 가지고 있는 토핑의 가짓수가 같으면 공평하게 롤케이크를 자른것이므로
      // answer++
      if (set[0] === set[1]) answer++;
    });
    return answer;
  };
  return <div></div>;
};

export default CuttingTheRollCake;
