import React from "react";

const String = () => {
  const solution = (s) => {
    let reg = /[a-zA-Z]/g;
    if (s.search(reg) !== -1) {
      return false;
    }
    let q = s.replace(reg, "").length;
    return q === 4 || q === 6 ? true : false;
  };
  solution("a234");
  solution("1234");
  solution("1e23");

  return <div></div>;
};

export default String;
