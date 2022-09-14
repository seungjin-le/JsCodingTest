import React from "react";

// JadenCase 문자열 만들기

const JadenCaseCreateString = () => {
  const solution = (s) => {
    s = s
      .split(" ")
      .map((v) => v.charAt(0).toUpperCase() + v.slice(1).toLowerCase());
    return s.join(" ");
  };
  return <div></div>;
};
export default JadenCaseCreateString;
