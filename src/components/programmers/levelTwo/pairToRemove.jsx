import React from 'react';

// 짝지어 제거하기

const PairToRemove = () => {
  const solution = (s) => {
    let arr = []
    for(let a = 0; a < s.length; a++){
      if( !arr.length || arr[arr.length-1] !== s[a] ){
        arr.push(s[a]);
      }else{
        arr.pop()
      };
    }
    return arr.length === 0 ? 1 : 0;
  }
  return (
    <div>

    </div>
  );
};

export default PairToRemove;
