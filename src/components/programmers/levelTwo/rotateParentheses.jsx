import React from 'react';

// 괄호 회전하기

const RotateParentheses = () => {
  const solution = (s) => {
    let answer = 0;
    s = s.split('');
    if (s.length === 1 || s.length % 2 !== 0) return 0;
    for (let a = 0; a < s.length; a++) {
      if (s[0] === '(' || s[0] === '{' || s[0] === '[') {
        answer += check(s);
      }
      s.push(...s.splice(0, 1));
    }
    return answer;
  };
  // 호이스팅 가능한 문자를 체크해주는 함수
  function check(s) {
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
