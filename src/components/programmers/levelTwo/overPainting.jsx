import React from 'react';

// 덧칠하기

const OverPainting = () => {
  const solution = (n, m, section) => {
    // 페인트 칠한 휫수를 담은 변수 answer
    // 변수 a에 scetion의 첫번째 요소부터 페인틀 칠한 상태로 시작하기 때문에 answer = 1
    let answer = 1;
    // scetion의 첫번째 요소부터 시작하기 위해서 a = 1
    let a = section[0];
    // 배열 section 순회
    section.map((v) => {
      // 페인트를 칠하기 시작하는 위치( a ), 롤러의 길이( m ) -
      // 롤러는 a 다음부터 시작하지 않고 a부터 시작하기 때문에( -1 )
      // 페인트칠해야 하는 벽의 번호 ( v )

      // a + m - 1이 v보다 작다면
      if (a + m - 1 < v) {
        // a는 v
        a = v;
        // answer = answer + 1
        return answer++;
      }
    });
    return answer;
  };
  return <div></div>;
};

export default OverPainting;
