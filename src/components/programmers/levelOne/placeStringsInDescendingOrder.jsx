import React from 'react';

// 문자열 내림차순으로 배치

const PlaceStringsInDescendingOrder = () => {
  const solution = (s) => {
    // 문자열을 배열로 변환
    let answer = s.split('')
    // 대문자를 담을 배열 a
    let a = [];
    // 소문자를 담을 배열 b
    let b = [];
    // 문자열 배열 answer 을 순회 하면서
    // v 가 v.toUpperCase()[대문자로 변환하는 함수]랑 같으면 a 아니면 b 에 push
    answer.map((v) => v === v.toUpperCase() ? a.push(v) : b.push(v))
    // 문자배열을 올림차순으로 정렬후 reverse 로 반전
    b = b.sort().reverse();
    a = a.sort().reverse();
    // 소문자배열 b 뒤에 대문자배열 a를 스프레드 문법으로 push
    b.push(...a);
    // 문자 배열을 문자열로 join
    b = b.join('')
    return b;
  }
  return (
    <div>

    </div>
  );
};

export default PlaceStringsInDescendingOrder;
