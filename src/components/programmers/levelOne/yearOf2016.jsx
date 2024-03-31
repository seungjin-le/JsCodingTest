import React from 'react';

// 2016년

const YearOf2016 = () => {
  const solution = (a, b) => {
    // 요일의 데이터를 담은 배열
    let answer = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    // 2016년 a월 b일을 리턴
    return answer[new Date(`2016-${a}-${b}`).getDay()];
  };
  solution(4, 15);
  return <div></div>;
};

export default YearOf2016;
