import React from 'react';

// 포켓몬

const Pokemon = () => {
  const solution = (nums) => {
    // nums 중복 제거
    let set = new Set(nums);
    let numSet = [...set];

    // 선택할 수 있는 포켓몬 개수
    let ln = nums.length/2;

    // 포켓몬 종류가 선택할수 있는 포켓몬 갯수보다 많으면 선택할 수 있는 포켓몬 개수 리턴
    if(ln < numSet.length || ln === numSet.length){
      return ln
      // 선택할 수 있는 포켓몬 개수가 포켓몬 종류보다 많으면 포켓몬 중류 리턴
    }else if(ln > numSet.length){
      return numSet.length
    }
  }
  return (
    <div>

    </div>
  );
};

export default Pokemon;
