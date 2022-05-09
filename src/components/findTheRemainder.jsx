import React from "react";

// 나머지가 1이 되는 숫자 찾기

const FindTheRemainder = () => {
  function solution(n) {
    for (let a = 0; a < n; a++) {
      if (n % a === 1) {
        n = a;
        return n;
      }
    }
  }
  return <div></div>;
};

export default FindTheRemainder;
