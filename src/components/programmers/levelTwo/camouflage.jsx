import React from 'react';

// 위장

const Camouflage = () => {
  const solution = (clothes) => {
    let answer = 1;
    let obj = {}

    for(let a = 0; a < clothes.length; a++){
      obj[clothes[a][1]] = (obj[clothes[a][1]] || 1) + 1;

    }
    for(let key in obj){
      answer *= obj[key];
    }
    return answer - 1;
  }
  return (
    <div>

    </div>
  );
};

export default Camouflage;
