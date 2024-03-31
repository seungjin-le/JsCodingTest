import React from 'react';

// 수박수박수박수박수박수?

const StringRepetition = () => {
  const solution = (n) => {
    let answer = '';
    let r = Math.ceil(n/2);
    for(let a = 0; a < r; a++){
      answer+='수박'
    }
    if(n %2 === 1){
      answer = answer.slice(0, -1)
    }
    return answer;
  }
  return (
    <div>
      
    </div>
  );
};

export default StringRepetition;
