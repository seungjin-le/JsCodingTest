import React from 'react';

// 다음 큰 숫자

const NextBigNumber = () => {

  const solution = (n) => {
    let answer = n+1;
    while(answer.toString(2).replace(/0/g,'') !== n.toString(2).replace(/0/g,'')){
      answer++
    }
    return answer;
  }

  return (
    <div>

    </div>
  );
};

export default NextBigNumber;
