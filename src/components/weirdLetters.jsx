import React from "react";

const WeirdLetters = () => {
  const solution = (s) => {
    let answer = [];
    s = s.split(" ");
    s.map((v, i) => (answer[i] = v.split("")));
    answer = answer.map((v, i) =>
      v
        .map((value, index) =>
          index % 2 === 0 ? value.toUpperCase() : value.toLowerCase()
        )
        .join()
        .replace(/,/g, "")
    );
    return String(answer).replace(/,/g, " ");
  };
  return <div></div>;
};

export default WeirdLetters;
