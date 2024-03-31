import React from 'react';

// 문자열 내마음대로 정렬

const SortingStringsMyOwnWay = () => {
  const solution = (strings, n) =>{
    // 문자열을 사전적 의미로 오름차순으로 정렬
    strings.sort()
    // 문자의 n번째 문자 비교를 통해 오름차순으로 정렬
    strings.sort((a,b) => a[n] < b[n] ? -1 : a[n] > b[n] ? 1 :  0)
    return strings;
  }
  return (
    <div>

    </div>
  );
};

export default SortingStringsMyOwnWay;
