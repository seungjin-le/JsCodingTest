import React from 'react';

// 달리기 경주

const RunningRace = () => {
  function solution(players, callings) {
    const playMap = new Map();
    const scoreMap = new Map();
    players.map((v, i) => {
      playMap.set(v, i);
      scoreMap.set(i, v);
    });

    callings.map((v, i, arr) => {
      if (playMap.get(v) === 0) return;
      const up = [v, playMap.get(v), playMap.get(v) - 1];
      const down = [scoreMap.get(up[2]), up[2], up[1]];
      playMap.set(v, up[2]);
      playMap.set(down[0], up[1]);
      scoreMap.set(up[1], down[0]);
      scoreMap.set(down[1], up[0]);
    });

    return [...scoreMap].map((v) => v[1]);
  }
  return <div></div>;
};

export default RunningRace;
