import React from 'react';

// 달리기 경주

const RunningRace = () => {
  const solution = (players, callings) => {
    // players의 이름에 등수를 저장할 map선언
    // ex ) { name => 1}
    const playMap = new Map();

    // players의 등수에 이름을 저장할 map선언
    // ex ) { 1 => name}
    const scoreMap = new Map();

    // 배열 players를 순회하면서 2개에 map에
    // 등수와 이름을 저장
    players.map((v, i) => {
      playMap.set(v, i);
      scoreMap.set(i, v);
    });

    // 배열 callings를 순회
    callings.map((v) => {
      // 해설자가 부른 선수( v )가 현제 1등인경우 다음으로 넘어감
      if (playMap.get(v) === 0) return;

      // 해설자가 부른 선수의 이름, 선수의 현제 등수, 한 명을 제치고 상승한 등수를 변수에 저장
      const up = [v, playMap.get(v), playMap.get(v) - 1];

      // 해설자가 부른 선수의 한등수 앞선 선수의 이름, 선수의 현제 등수, 제쳐지고 떨어진 등수를 변수에 저장
      const down = [scoreMap.get(up[2]), up[2], up[1]];

      // 선수 이름에 등수가 저장된 map에서
      // 해설자가 부른 선수의 등수를 새로 초기화
      playMap.set(v, up[2]);
      // 제쳐진 선수의 등수를 새로 초기화
      playMap.set(down[0], up[1]);

      // 등수에 선수 이름이 저장된 map에서
      // 해설자가 부른 선수의 등수를 새로 초기화
      scoreMap.set(down[1], up[0]);
      // 제쳐진 선수의 등수를 새로 초기화
      scoreMap.set(up[1], down[0]);
    });

    return [...scoreMap].map((v) => v[1]);
  };
  return <div></div>;
};

export default RunningRace;
