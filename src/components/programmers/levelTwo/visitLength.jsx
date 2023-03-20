import React from 'react';

// 방문 길이

const VisitLength = () => {
  const solution = (dirs) => {
    let arr = [[0, 0, 0, 0]];
    let obj = {
      x: [],
      y: [],
    };
    const str = (pos, line) => {
      return JSON.stringify([pos, ...line.sort((a, b) => a - b)]);
    };
    dirs.split('').map((v) => {
      let start = arr[arr.length - 1].slice(2, 4);
      let end = [...start];
      if (v === 'U' && start[1] < 5) end[1]++;
      if (v === 'D' && start[1] > -5) end[1]--;
      if (v === 'L' && start[0] > -5) end[0]--;
      if (v === 'R' && start[0] < 5) end[0]++;
      if (JSON.stringify(start) === JSON.stringify(end)) return null;

      if (v === 'U' || v === 'D') {
        const line = str(start[0], [start[1], end[1]]);
        !obj.x.includes(line) && obj.x.push(line);
      }
      if (v === 'L' || v === 'R') {
        const line = str(start[1], [start[0], end[0]]);
        !obj.y.includes(line) && obj.y.push(line);
      }
      arr.push([...start, ...end]);
    });

    return obj.x.length + obj.y.length;
  };
  return <div></div>;
};

export default VisitLength;
//pos.splice(0, 2, ...pos.slice(2,4))
