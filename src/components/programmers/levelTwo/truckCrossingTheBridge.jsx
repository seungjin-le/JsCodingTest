import React from 'react';

// 다리를 지나는 트럭
const TruckCrossingTheBridge = () => {
  const solution = (bridge_length, weight, truck_weights) => {
    let answer = 0;
    // 다리의 길이만큼 0으로된 배열생성
    let arr = new Array(bridge_length).fill(0);
    // do는 반복문 while의 조건을 판단하기 전에 한번은 실행됩니다.
    do {
      // 첫번째 트럭이 다리에 올라가서 answer++
      answer++;
      // arr의 마지막 요소 삭제
      arr.pop();
      // unshift는 배열의 첫번째 위치에 요소를 추가해주는 함수
      // reduce함수를 이용해 arr의 총합과 대기중인 트럭(truck_weights)
      // 첫번째 요소를 더했을때 다리가 견딜수 있는 무게(weight)보다
      // 작거나 같으면 truck_weights의 첫번째 요소를
      // arr의 맨 앞자리에 추가
      // 다리가 견딜수 있는 무게보다 크다면 0을 추가
      arr.unshift(
        arr.reduce((a, b) => a + b) + truck_weights[0] <= weight
          ? truck_weights.shift()
          : 0
      );
      // do스코프 안에 코드를 한번 실행했으니 arr의 총합이
      // 0이 아니게되므로 반복문을 0이 될때까지 실행
    } while (arr.reduce((a, b) => a + b) !== 0);
    return answer;
  };
  return <div></div>;
};

export default TruckCrossingTheBridge;
