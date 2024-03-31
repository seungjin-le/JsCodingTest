import React from "react";

// JadenCase 문자열 만들기

const JadenCaseCreateString = () => {
  const solution = (s) => {
    // 공백을 기준으로 문자열을 나눠 배열로 만든후
    // map 함수로 배열을 순회하면서 문자열의 첫번재 문자를 대문자로 변경하고
    // 문자열의 첫번째 문자를 slice 로 자른후 toLowerCase 함수로 소문자로 변경후
    // 변경한 문자열들을 합쳐서 반환
    s = s
      .split(" ")
      .map((v) => v.charAt(0).toUpperCase() + v.slice(1).toLowerCase());
    // 문자 배열을 원소를 기준으로 공백을 넣어 문자열로 형 변환 후 반환
    return s.join(" ");
  };
  return <div></div>;
};
