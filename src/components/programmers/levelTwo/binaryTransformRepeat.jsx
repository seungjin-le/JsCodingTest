import React from "react";

// 이진 변환 반복하기

const BinaryTransformRepeat = () => {
  const solution = (s) => {
    // 삭제한 0의 개수
    let afterLen = 0;
    // 이진 변환 반복 횟수
    let count = 0;
    while (s !== "1") {
      let beforeLen = s.length;
      s = s.replace(/0/g, "");
      afterLen += beforeLen - s.length;
      s = s.length.toString(2);
      count++;
    }
    return [count, afterLen];
  };
  return <div></div>;
};

export default BinaryTransformRepeat;
