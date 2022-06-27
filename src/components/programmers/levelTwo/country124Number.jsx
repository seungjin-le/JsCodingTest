import React from 'react';

// 124 나라의 숫자

const Country124Number = () => {
  const solution = (n) => {
    let answer = '';
    const numArr = ['4','1','2']
    while (n>0){
      const remainder = n % 3
      answer = numArr[remainder] + answer;
      n = Math.floor((n-1)/3)
    }
    return answer;
  }

  return (
    <div>

    </div>
  );
};

export default Country124Number;
