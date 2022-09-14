import React from "react";

// 이진 변환 반복하기

const BinaryTransformRepeat = () => {
  const solution = (s) => {
    // [ 이진 변환 반복 횟수, 삭제한 0의 개수 ]
    let answer = [0, 0];
    // s가 '1'이 될 때까지 반복
    while (s !== "1") {
      // 0을 제거하기 전 길이
      let beforeLen = s.length;
      s = s.replace(/0/g, "");
      // 0을 제거하기 전 길이 - 제거한 후 길이
      answer[1] += beforeLen - s.length;
      // 0을 제거한 후의 길이를 이진법으로 변환
      s = s.length.toString(2);
      answer[0]++;
    }
    return answer;
  };
  return <div></div>;
};

export default BinaryTransformRepeat;
