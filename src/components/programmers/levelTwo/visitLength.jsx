import React from 'react';

// 방문 길이

const VisitLength = () => {
  function solution(dirs) {
    let arr = [[0, 0, 0, 0]];
    let obj = {
      x: [],
      y: [],
    };

    dirs.split('').map((v, i) => {
      let start = arr[arr.length - 1].slice(2, 4);
      let end = [...start];
      if (v === 'U' && start[1] < 5) end[1]++;
      if (v === 'D' && start[1] > -5) end[1]--;
      if (v === 'L' && start[0] > -5) end[0]--;
      if (v === 'R' && start[0] < 5) end[0]++;
      if (JSON.stringify(start) === JSON.stringify(end)) return;
      if (v === 'U' || v === 'D') {
        const line = JSON.stringify([
          start[0],
          ...[start[1], end[1]].sort((a, b) => a - b),
        ]);
        !obj.x.includes(line) && obj.x.push(line);
      }
      if (v === 'L' || v === 'R') {
        const line = JSON.stringify([
          start[1],
          ...[start[0], end[0]].sort((a, b) => a - b),
        ]);
        !obj.y.includes(line) && obj.y.push(line);
      }
      arr.push([...start, ...end]);
    });

    return obj.x.length + obj.y.length;
  }
  return <div></div>;
};

export default VisitLength;
