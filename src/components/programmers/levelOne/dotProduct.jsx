import React from "react";

// 내적

const DotProduct = () => {
  const solution = (a, b) => {
    // a.map함수를 이용해서 a[i] 와 b[i]의 값을 곱합니다
    let q = a.map((v, i) => v * b[i]);
    // reduce함수를 이용해서 배열을 순차적으로 돌며 값들을 더합니다
    return q.reduce((i, v) => i + v);
  };
  return <div></div>;
};

export default DotProduct;
