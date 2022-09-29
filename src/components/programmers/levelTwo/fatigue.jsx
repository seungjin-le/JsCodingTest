import React from 'react';

// 피로도

const Fatigue = () => {
  const solution = (k, dungeons) => {
    let answer = [];
    let visited = dungeons.map((v) => 0);
    const dfs = (count, k) => {
      answer.push(count);
      for (let a = 0; a < dungeons.length; a++) {
        let current = dungeons[a];
        if (k >= current[0] && !visited[a]) {
          visited[a] = 1;
          dfs(count + 1, k - current[1]);
          visited[a] = 0;
        }
      }
    };
    dfs(0, k);
    return Math.max(...answer);
  };
  return <div></div>;
};

export default Fatigue;
