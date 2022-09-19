import React from 'react';

// 위장

const Camouflage = () => {
  const solution = (clothes) => {
    // 마지막에 의상 개수를 곱해야 하기 때문에 1로 할당
    let answer = 1;
    // 의상의 종류와 개수를 담을 객체 생성
    let obj = {}
    // 의상의 갯수만큼 반복
    for(let a = 0; a < clothes.length; a++){
      // 객체 안에 의상의 종류가 없을경우 1+1 할당 있을경우 현제 의상 종류의 개수 + 1
      obj[clothes[a][1]] = (obj[clothes[a][1]] || 1) + 1;
    }
    for(let key in obj){
      // 객체를 순회하면서 의상의 갯수만큼 곱하기
      answer *= obj[key];
    }
    // 의상의 갯수를 곱하기 위해 할당했던 초깃값 1을 빼줍니다.
    return answer - 1;
  }
  return (
    <div>

    </div>
  );
};

export default Camouflage;
