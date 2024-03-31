import React from 'react';

// 자릿수 더하기

const AddNumbers = () => {
  const solution = (n) => {
    // 조건중 하나는 n은 숫자로 123 처럼 값이 전해짐.
    let answer = 0
    // n(123)을 문자열 '123'으로 만든후
    // split 로 한자리씩 끊어서 배열로 만듭니다.
    // 그후 map 함수로 배열을 순회하면서 문자값을 숫자값으로 변환후 answer 에 더해줍니다.
    String(n).split('').map((v) => answer += Number(v));
    return answer;
  }
  return (
    <div>

    </div>
  );
};

export default AddNumbers;
