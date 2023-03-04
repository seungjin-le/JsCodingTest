import React from 'react';

// 숫자 짝꿍

const NumberPartner = () => {
  function solution(X, Y) {
    let answer = '';
    // 문자열 X와 Y 중 길이가 짧은 문자열의 중복을 제거 후 배열로 치환.
    const arr = [...new Set(X.length < Y.length ? X.split('') : Y.split(''))]
      // 중복을 제거한 문자 배열을 값이 큰순으로 정렬
      .sort((a, b) => b - a);
    // 문자열 X와 Y의 길이를 배열에 담아줍니다.
    let lens = [X.length, Y.length];

    arr.map((v) => {
      // 중복을 제거한 값을 정규식을 이용해서 문자열 X와 Y에서
      // 제거해 준 다음 처음에 선언한 X와 Y의 길이와 제거 후 문자열의 길이를
      // 마이너스 한 후에 둘 중 하나라도 0이 있다면 서로 X와 Y는 서로
      // 중복되는 값이 없다는 뜻이며 둘 다 0이 아니라면
      // 마이너스한 값들 중 값이 더 작은 값을 찾아내
      // arr의 현제 요소를 작은 값만큼 repeat 함수를 이용해
      // 문자를 복사해 answer에 넣어줍니다.
      const reg = new RegExp(v, 'g');
      let aLen = lens[0] - X.replace(reg, '').length;
      let bLen = lens[1] - Y.replace(reg, '').length;
      if (lens[0] !== 0 && lens[1] !== 0)
        answer += v.repeat(aLen > bLen ? bLen : aLen);
    });
    // 처음 arr을 정렬할 때 큰 순으로 했는데
    // 문자열 answer의 첫 번째 값이 0이라면 0보다 큰 값이 없다는 뜻이므로
    // 문자열 0을 리턴
    if (answer[0] === '0') return '0';
    // arr.map을 통해 비교를 반복하면서 한 번도 조건문을 통과하지 못했다면
    // answer은 빈 문자열이므로 -1을 리턴 아니라면 answer을 리턴
    return !answer ? '-1' : answer;
  }
  return <div></div>;
};

export default NumberPartner;
