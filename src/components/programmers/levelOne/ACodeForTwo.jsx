import React from 'react';

// 둘만의 암호

const ACodeForTwo = () => {
  const solution = (s, skip, index) => {
    // 소문자 알파벳 마지막인 z를 숫자로 변환
    const last = 'z'.charCodeAt();
    // 스킵할 알파벳 문자열을 배열로 변환하면서 숫자로 변환
    skip = skip.split('').map((v) => v.charCodeAt());
    // 문자열 s를 skip처럼 배열로 변환하면서 숫자로 변환
    return (
      s
        .split('')
        .map((v) => v.charCodeAt())
        .map((v) => {
          // 알파벳을 이동할때 카운트할 변수 newIndex선언
          let newIndex = index;
          for (let a = 0; a < newIndex; a++) {
            // 시작부터 알파벳이 z일수 있으니 v가 z일경우 v에 26을 빼줍니다.
            if (v === last) {
              v -= 26;
            }
            // 알파벳 뒤로 한칸 이동, ex) a > b
            v++;
            // 만약 이동한 알파벳이 skip에 포함되어 있을 경우 newIndex에 1을 더해 한 번 더 반복
            skip.includes(v) && newIndex++;
          }
          // 반복문이 끝나면 문자로 변환해서 리턴
          return String.fromCharCode(v);
        })
        // 배열을 문자열로 변환
        .join('')
    );
  };
  return <div></div>;
};

export default ACodeForTwo;
