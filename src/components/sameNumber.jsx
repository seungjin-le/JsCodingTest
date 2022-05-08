import React from "react";

// 같은 숫자는 싫어

const SamNumber = () => {
  const solution = (arr) => {
    let answer = [];
    // 매개변수로 받은 배열을 map함수로 순회하면서
    // 현제 값 을 다음 값과 비교 했을때
    // 다르다면 answer 배열에 담아줍니다.
    arr.map((v, i) => v !== arr[i + 1] && answer.push(v));
    return answer;
  };
  console.log(solution([1, 1, 2, 3, 2, 2, 2, 4, 4, 4, 4, 4, 4, 3, 3]));
  return <div></div>;
};

export default SamNumber;
