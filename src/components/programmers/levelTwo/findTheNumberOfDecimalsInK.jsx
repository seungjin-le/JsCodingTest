import React from 'react';

// k진수에서 소수 개수 구하기

const FindTheNumberOfDecimalsInK = () => {
  const solution = (n, k) => {
    n = n
      // k 진수로 변환
      .toString(k)
      // 0을 기준으로 잘라 문자 배열로 치환
      .split('0')
      // split로 문자열을 자를때 '00'일경우 빈배열 생성되고
      // 문제에서 1은 소수가 아니므로 filter함수의 조건문을
      // v !== '1'( v는 1이 아니다 ), v(v가 빈 문자열일경우 filter함수가 걸러줍니다.)
      // 위 2개 조건을 통과하면 재귀함수 primeNumberCheck에 문자열(v)를 parseInt 함수를
      // 이용해 숫자로 변환후 매개 변수로 넣어줍니다.
      .filter((v) => v !== '1' && v && primeNumberCheck(parseInt(v))).length;
    return n;
  };

  function primeNumberCheck(n) {
    // Math.sqrt(n)를 이용해 n의 제곱근을 구하고 n까지 반복
    // 원리는 "에라토스테네스의 체" 참고
    const sqrt = Math.sqrt(n);
    for (let a = 3; a <= sqrt; a += 2) {
      // n을 a로 나눴을때 0 이 아니라면 소수가 아니니 false리턴
      if (n % a === 0) return false;
    }
    // 반복문을 통과하면 return리턴
    return true;
  }
  return <div></div>;
};

export default FindTheNumberOfDecimalsInK;
