import React from "react";

// 핸드폰 번호 가리기

const HideCellPhoneNum = () => {
  const solution = (phone_number) => {
    let answer = Array.from(phone_number);
    let x = answer.map((i, j) => (j < answer.length - 4 ? "*" : i));
    return x.join("");
  };
  return <div></div>;
};

export default HideCellPhoneNum;
