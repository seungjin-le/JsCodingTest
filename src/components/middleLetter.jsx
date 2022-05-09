import React from "react";

// 가운데 글자 가져오기

const MiddleLetter = () => {
  const solution = (s) => {
    return s.length % 2 === 0
      ? s[s.length / 2 - 1] + s[s.length / 2]
      : s[s.length / 2 - 0.5];
  };
  return <div></div>;
};

export default MiddleLetter;
