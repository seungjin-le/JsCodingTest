import React from "react";

const PersonalityTypeCheck = () => {
  const solution = (survey, choices) => {
    let answer = "";
    let obj = {
      R: 0,
      T: 0,
      C: 0,
      F: 0,
      J: 0,
      M: 0,
      A: 0,
      N: 0,
    };
    choices.map((v, i) => {
      if (v !== 4) {
        if (v < 4) {
          obj[survey[i][0]] += 4 - v;
        } else {
          obj[survey[i][1]] += v - 4;
        }
      }
    });

    answer += obj.R < obj.T ? "T" : "R";
    answer += obj.C < obj.F ? "F" : "C";
    answer += obj.J < obj.M ? "M" : "J";
    answer += obj.A < obj.N ? "N" : "A";
    return answer;
  };
  return <div></div>;
};

export default PersonalityTypeCheck;
