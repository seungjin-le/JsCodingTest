import React from "react";

const NumStrEn = () => {
  function solution(s) {
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
    str.map((v, i) => (s = s.replace(v, i)));
    s = parseInt(s);
    return s <= 0 ? 1 : s;
  }
  console.log(solution("2threethreethreethree45sixseventhreethree"));
  return <div></div>;
};

export default NumStrEn;
