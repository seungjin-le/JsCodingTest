import React from 'react';

// 평균 구하기

const Average = () => {
  const solution = (arr) =>{
    // arr을 순회하면서 더한다음 arr의 길이만큼 나눈 수를 리턴
    return arr.reduce((v,i) => v+i)/arr.length;
  }
  return (
    <div>

    </div>
  );
};

export default Average;
