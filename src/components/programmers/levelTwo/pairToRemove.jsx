import React from 'react';

// 짝지어 제거하기

const PairToRemove = () => {
  const solution = (s) => {
    //  빈배열 선언
    let arr = []
    //  s의 길이만큼 반복
    for(let a = 0; a < s.length; a++){
      //  배열 arr 의 마지막 요소가 s[a]와 다를경우 arr 에 push
      if(arr[arr.length-1] !== s[a] ){
        arr.push(s[a]);
      }else{
        //  같을 경우 arr 의 마지막 요소 제거
        arr.pop()
      };
    }
    //  arr 의 길이가 0 일경우 1을 반환하고 아니면 0을 반환
    return arr.length === 0 ? 1 : 0;
  }
  return (
    <div>

    </div>
  );
};

export default PairToRemove;
