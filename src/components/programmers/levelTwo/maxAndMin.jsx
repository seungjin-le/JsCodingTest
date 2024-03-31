import React from "react";

// 최댓값과 최솟값

const MaxAndMin = () => {
  const solution = (s) => {
    // 문자열 안에 숫자를 공백으로 나눴으니 공백을 기준으로 잘라 배열을 만들어줍니다.
    s = s.split(" ").map((v) => parseInt(v));
    // 템플릿 리터럴로 반환
    return `${Math.min(...s)} ${Math.max(...s)}`;
  };
  return <div></div>;
};

export default MaxAndMin;
