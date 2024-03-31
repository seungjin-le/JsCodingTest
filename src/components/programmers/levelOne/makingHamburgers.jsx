import React from 'react';

// 햄버거 만들기

const MakingHamburgers = () => {
  // 정규식 (실패 : 메모리 부족)
  const solution = (ingredient) => {
    // ingredient의 초기 길이값을 저장
    const len = ingredient.length;
    // 숫자 배열을 문자열로 치환
    ingredient = ingredient.join('');
    // 문자열 ingredient 안에 문자열 '1231'이 있으면 반복
    while (ingredient.includes('1231')) {
      // 문자열 ingredient 앞에사부터 '1231' 반복해서 제거
      ingredient = ingredient.replace(/1231/, '');
    }
    // 문자열에서 4개씩 제거를 하니 초기 문자열의 길이 - 문자 제거후 길이
    // 문자열 길이를 뺀다음 나머지를 4로 나누면 제거한 '1231'의 갯수
    return (len - ingredient.length) / 4;
  };

  // 정답
  const solution2 = (ingredient) => {
    // ingredient의 초기 길이값을 저장
    const len = ingredient.length;
    // ingredient의 길이만큼 반복
    for (let a = 0; a <= ingredient.length; a++) {
      if (
        // ingredient의 a번째 값이 숫자열 1이면 다음 조건 확인
        ingredient[a] === 1 &&
        // ingredient의 (a + 1)번째 값이 숫자열 2이면 다음 조건 확인
        ingredient[a + 1] === 2 &&
        // ingredient의 (a + 2)번째 값이 숫자열 3이면 다음 조건 확인
        ingredient[a + 2] === 3 &&
        // ingredient의 (a + 3)번째 값이 숫자열 1이면 다음 조건 확인
        ingredient[a + 3] === 1
      ) {
        // ingredient배열의 a번째부터 뒤로 4칸 삭제
        ingredient.splice(a, 4);
        // a를 앞으로 4칸 이동
        a -= 4;
      }
    }
    // 문자열에서 4개씩 제거를 하니 초기 문자열의 길이 - 문자 제거후 길이
    // 문자열 길이를 뺀다음 나머지를 4로 나누면 제거한 '1231'의 갯수
    return (len - ingredient.length) / 4;
  };
  return <div></div>;
};

export default MakingHamburgers;
