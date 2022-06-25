import React from 'react';

// 짝지어 제거하기

const PairToRemove = () => {
  const solution = (s) => {
    let set = s.split('').filter((v,i) => s.indexOf(v) === i);
    set = set.map((v) => v+v) //.join('/');
    console.log(set)
    for(let a = 0; a < set.length; a++){
      s = s.replace(/`${set[a]}`/g , '');
    }
    console.log(s);
    return s[0] !== s[1] ? 0 : 1;
  }
  return (
    <div>

    </div>
  );
};

export default PairToRemove;
