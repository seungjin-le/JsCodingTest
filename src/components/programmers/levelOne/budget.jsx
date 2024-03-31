import React from "react";

// 예산

const Dudget = () => {
  function solution(nums, max, index = 0, plus = 0) {
    // nums 배열을 받아와 작은순으로 순서대로 정렬해줍니다
    let answer = nums.sort((f, s) => f - s); // [ 1,2,2,2,3,3,4,4,6 ]
    // answer 배열의 index 위치에있는 값을 plus에 더해줍니다
    plus += answer[index];
    // plus가 max보다 작거나 같으면 현제 있는 값들을 매개변수로 현제 있는 함수를 다시 실행시키고
    // plus가 max보다 크다면 카운트한 index값을 리턴합니다
    return plus <= max ? solution(answer, max, index + 1, plus) : index;
  }
  return <div></div>;
};

export default Dudget;
