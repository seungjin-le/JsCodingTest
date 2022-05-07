import React from "react";

const DayOfTheWeek = () => {
  const solution = (a, b) => {
    let answer = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

    return answer[new Date(`2016-${a}-${b}`).getDay()];
  };
  solution(4, 15);
  return <div></div>;
};

export default DayOfTheWeek;
