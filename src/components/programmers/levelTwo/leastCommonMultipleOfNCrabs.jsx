import React from 'react';

// N개의 최소공배수

const LeastCommonMultipleOfNCrabs = () => {
  const solution = (arr) => {
    let answer = 0;
    // 배열안에 있는 모든 수들의 공배수를 구해야 하니 가장 큰수를 찾아 변수에 넣습니다.
    let max = Math.max(...arr);
    // 계속해서 가장 큰수를 더해줘야하니 가장 크수부터 시작
    let count = max;

    // 반복문 안에 있는 조건문을 통과시 answer++, answer은 arr의 길이와 같으면 종료
    while (answer !== arr.length) {
      arr.map((v) => {
        // count를 arr안에 있는 값들로 나눴을때 0일때마다 answer++
        if (count % v === 0) {
          answer++;
        }
        return v;
      });
      // answer은 arr의 길이와 같으면 현제 공배수를 담은 count를 리턴
      if (answer === arr.length) {
        return count;
      }
      // count에 가장 큰수를 계속 더해줍니다.
      count += max;
      // 반복문이 끝날때마다 answer을 초기화
      answer = 0;
    }
  };
  return <div></div>;
};

export default LeastCommonMultipleOfNCrabs;
