import React from 'react';

// 크기가 작은 부분문자열

const SmallSubstring = () => {
  const solution = (t, p) => {
    // 작은수를 카운트할 변수
    let answer = 0;
    // t의 길이 - p의 길이 +1 만큼 반복
    for (let a = 0; a < t.length - p.length + 1; a++) {
      // 한자리씩 이동한다음 p의 길이만큼 잘라서 비교후
      // p가 크거나 같으면 answer++
      +p >= +t.substr(a, p.length) && answer++;
    }

    return answer;
  };
  return <div></div>;
};

export default SmallSubstring;
