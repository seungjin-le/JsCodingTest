import React from "react";

// 문자열 다루기 기본

const String = () => {
  const solution = (s) => {
    let reg = /[a-zA-Z]/g;
    if (s.search(reg) !== -1) {
      return false;
    }
    let q = s.replace(reg, "").length;
    return q === 4 || q === 6;
  };
  solution("a234");
  solution("1234");
  solution("1e23");

  return <div></div>;
};

export default String;
