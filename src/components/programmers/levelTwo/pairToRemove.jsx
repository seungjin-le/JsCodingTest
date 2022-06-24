import React from 'react';

// 짝지어 제거하기

const PairToRemove = () => {
  const solution = (s) => {
    s = s.split('')
    for(let a = 0; a < s.length; a++){
      if(s[a] === s[a+1]){
        s.splice(a,2)
        a--;
      }
    }
    return s[0] !== s[1] ? 0 : 1;
  }
  return (
    <div>

    </div>
  );
};

export default PairToRemove;
