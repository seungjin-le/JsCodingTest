import React from 'react';

// 다음 큰 숫자

const NextBigNumber = () => {

  const solution = (n) => {
    // n보다 커야하니 시작은 n + 1
    let answer = n+1;
    // n과 answer을 2진수로 변환하고 0을 제거했을때 같을때까지 answer++ 반복
    while(answer.toString(2).replace(/0/g,'') !== n.toString(2).replace(/0/g,'')){
      answer++
    }
    // answer 리턴
    return answer;
  }

  return (
    <div>

    </div>
  );
};

export default NextBigNumber;
