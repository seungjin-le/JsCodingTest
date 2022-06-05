import React from 'react';

// 콜라츠 추측

const ColatzGuess = () => {
  const solution = (num) => {
    if(num !== 1){
      for(let a = 1; a <= 500; a++){
        num =  num % 2 === 0 ? num/2 : num*3+1;
        if(a === 500){
          return -1
        }
        if(num === 1){
          return a
        }
      }
    }else{
      return 0
    }
  }
  return (
    <div>

    </div>
  );
};

export default ColatzGuess;
