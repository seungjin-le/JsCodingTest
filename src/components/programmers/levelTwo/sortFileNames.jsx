import React from 'react';

// [3차] 파일명 정렬

const SortFileNames = () => {
  const solution = (files) => {
    // d+는 숫자로 된 문자 1개 이상인 문자열을 의미하며 g는 모든 패턴을 찾으라는 의미입니다
    const regex = /\d+/g;
    files.sort((a, b) => {
      let [matchA, matchB] = [a.match(regex)[0], b.match(regex)[0]];
      const [headA, headB] = [
        a.slice(0, a.indexOf(matchA)).toLowerCase(),
        b.slice(0, b.indexOf(matchB)).toLowerCase(),
      ];
      [matchA, matchB] = [+matchA, +matchB];
      return headA < headB
        ? -1
        : headA > headB
        ? 1
        : matchA < matchB
        ? -1
        : matchA > matchB
        ? 1
        : 0;
    });
    return files;
  };
  return <div></div>;
};

export default SortFileNames;
