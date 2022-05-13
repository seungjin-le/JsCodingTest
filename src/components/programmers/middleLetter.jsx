import React from "react";

// 가운데 글자 가져오기

const MiddleLetter = () => {
  const solution = (s) => {
    // 문자열 s를 받아와 s의 길이를 2로 나눴을때
    return s.length % 2 === 0
      // 0 이면 길이를 2로 나는다음 -1 번째 값과 2를 나눈 값이 위치한 문자를 더한 값을 리턴
      ? s[s.length / 2 - 1] + s[s.length / 2]
      // 0이 아니면 2로 나누고 -0.5 번째 위치한 값을 리턴
      : s[s.length / 2 - 0.5];
  };
  return <div></div>;
};

export default MiddleLetter;
