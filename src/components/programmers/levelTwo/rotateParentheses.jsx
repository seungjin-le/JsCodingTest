import React from 'react';

// 괄호 회전하기

const RotateParentheses = () => {
  const solution = (s) => {
    // 올바른 괄호를 카운터
    let answer = 0;
    // 문자열 s를 문자 배열로 변환
    s = s.split('');
    // 올바른 문자열은 괄호, 중괄호, 대괄호 한쌍씩 있어야 하므로 문자열의 길이가
    // 절대 홀수가 나올수 없음
    if (s.length === 1 || s.length % 2 !== 0) return 0;
    // 배열의 길이만큼 반복;
    for (let a = 0; a < s.length; a++) {
      // 배열 s의 0번째 원소가 '(', '{', '[' 으로 시작하면 문자 배열을 체크해주는
      // 함수 실행후 실행 결과값을 더해줍니다.
      if (s[0] === '(' || s[0] === '{' || s[0] === '[') {
        answer += check(s);
      }
      // 조건문을 지나면 배열의 첫번째 요소를 뒤로 이동
      s.push(...s.splice(0, 1));
    }
    return answer;
  };
  // 호이스팅 가능한 문자를 체크해주는 함수
  function check(s) {
    // 배열 선언
    let arr = [];
    for (let b = 0; b <= s.length; b++) {
      switch (s[b]) {
        case '(':
          arr.push(s[b]);
          break;
        case '{':
          arr.push(s[b]);
          break;
        case '[':
          arr.push(s[b]);
          break;
        case ')':
          if (arr[arr.length - 1] !== '(') {
            return 0;
          }
          arr.pop();
          break;
        case '}':
          if (arr[arr.length - 1] !== '{') {
            return 0;
          }
          arr.pop();
          break;
        case ']':
          if (arr[arr.length - 1] !== '[') {
            return 0;
          }
          arr.pop();
          break;
      }
    }
    return arr.length === 0 ? 1 : 0;
  }
  return <div></div>;
};

export default RotateParentheses;
