import React from 'react';

// 소수 만들기

const MakeADecimal = () => {
  const solution = (nums) => {
    let answer = 0;
    // for 문을 3qjs 중첩해서 사용하기 때문에 코드 간결하게 쓰기위한 nums 길이를 담은 변수
    let len = nums.length;
    // 반복문 안에서 소수인지 확인할 함수
    const decimal = (n) => {
      // Math.sprt : 매개변수로 주어진 값의 제곱근을 구하는 내장함수
      for (let i = 2; i <= Math.sqrt(n); i++) {
        // 소수는 1과 자신 외에는 나누어지는 숫자가 없어야 하므로 나눠지면 false를 리턴
        if (n % i === 0) {
          return false;
        }
      }
      return true;
    }
    // 숫자를 선택할 3개중 1번째 자리 앞에 2개가 숫자를 선택할수 있도록 nums 길이의 -2까지만 반복
    for(let a = 0; a < len-2; a++){
      // 숫자를 선택할 3개중 2번째 자리 앞에 1개가 숫자를 선택할수 있도록 nums 길이의 -1까지만 반복
      for(let b = a+1; b < len-1; b++){
        // 숫자를 선택할 3개중 3번째 자리 마지막이니 nums 길이의 끝까지 반복
        for(let c = b+1; c < len; c++){
          // decimal 에 nums[a]+nums[b]+nums[c]를 매개변수로 넣어줍니다.
          if(decimal(nums[a]+nums[b]+nums[c])){
            // true 결과 리턴시 answer++
            answer++
          }
        }
      }
    }
    return answer;
  }
  return (
    <div>

    </div>
  );
};

export default MakeADecimal;
