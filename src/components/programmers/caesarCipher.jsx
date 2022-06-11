import React from 'react';

// 시저 암호

const CaesarCipher = () => {
  const solution = (s, n) => {
    let answer = [];
    // 문자열 s의 길이만큼 반복
    for(let a = 0; a < s.length; a++){
      // 배열 answer[a]에 s.charCodeAt(a)로 문자열 s의 a번째 값을 아스키 코드로 변환해서 배열에 넣어줍니다.
      answer[a] = s.charCodeAt(a)
    }
    answer = answer.map((v) => {
      // 이동할 숫자인 n을 더하기전에 v 가 대문자인지 소문자인지 구분해줍니다.
      // 65 부터 90 까지는 대문자
      if(v >= 65 && v <= 90){
        // v + n 이 대문자 범위인 90을 넘으면 (v+n)-26 90을 못넘으면 v+n 을 리턴해 줍니다
        return v + n > 90 ? (v+n)-26 : v+n
        // 97 부터 122 까지는 소문자
      }else if(v >= 97 && v <= 122){
        // v + n 이 소문자 범위인 122를 넘으면 (v+n)-26 90을 못넘으면 v+n 을 리턴해 줍니다
        return v + n > 122 ? (v+n)-26 : v+n
      }else{
        // 문자열에 스페이스바도 있으니 위 조건에 걸리지 않으면 배열에 그냥 담아줍니다.
        // 스페이스바는 32입니다.
        return v
      }
    })
    // 이제 아스키코드가 담긴 배열을 순회하면서 String.fromCharCode(v)로 다시 문자로 만들어줍니다.
    answer = answer.map((v) => String.fromCharCode(v))
    // 문자 배열을 문자열로 치환
    return answer.join('');
  }
  return (
    <div>

    </div>
  );
};

export default CaesarCipher;
