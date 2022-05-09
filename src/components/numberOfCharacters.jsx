import React from "react";

// 문자열 내의 p와 y의 개수

const NumberOfCharacters = () => {
  const solution = (s) => {
    let a = [0, 0];
    s.toLowerCase()
      .split("")
      .map((v) => (v === "p" ? ++a[0] : v === "y" && ++a[1]));

    return a[0] === a[1];
  };
  return <div></div>;
};

export default NumberOfCharacters;
