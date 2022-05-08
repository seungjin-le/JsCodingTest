import React from "react";

// 숫자 문자열과 영단어

const NumStrEn = () => {
  function solution(s) {
    // 정규식으로 찾을 텍스트 배열 (0부터 9까지 순서대로 나열)
    // /gi 에서 g 는 global 문자열 속에서 조건에 맞으면 전부 변경
    // i 는 알파벳 대문자나 소문자 상관없이 적용
    const str = [
      /zero/gi,
      /one/gi,
      /two/gi,
      /three/gi,
      /four/gi,
      /five/gi,
      /six/gi,
      /seven/gi,
      /eight/gi,
      /nine/gi,
    ];
    // map 함수를 이용해 0부터 9까지 정규식으로 검사후
    //조건에 해당하면 전부 변경
    str.map((v, i) => (s = s.replace(v, i)));
    // 매개변수 s 는 문자열이기때문에 숫자로 변경
    s = parseInt(s);
    return s <= 0 ? 1 : s;
  }
  console.log(solution("2threethreethreethree45sixseventhreethree"));
  return <div></div>;
};

export default NumStrEn;
