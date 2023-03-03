import React from 'react';

// 바탕화면 정리

const CleanUpYourDesktop = () => {
  const solution = (wallpaper) => {
    var answer = [0, 0, 0, 0];
    let indexs = [];

    wallpaper = wallpaper
      .map((v, i) => {
        const index = v.indexOf('#');
        const lastIndex = v.lastIndexOf('#') + 1;
        const check = v.includes('#');
        if (check) indexs.push(index, lastIndex);
        return check && i;
      })
      .filter((v) => v !== false);

    answer[0] = Math.min(...wallpaper);
    answer[2] = Math.max(...wallpaper) + 1;
    answer[1] = Math.min(...indexs);
    answer[3] = Math.max(...indexs);

    return answer;
  };
  return <div></div>;
};

export default CleanUpYourDesktop;
