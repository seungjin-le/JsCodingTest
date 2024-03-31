import React from 'react';

// 문자열 나누기

const SplitString = () => {
  const solution = (s) => {
    // 문자열을 나눈 횟수 카운트할 변수
    let answer = 0;

    // 문자열의 첫 번째 문자와 그렇지 않은 문자를 카운트해야 하기 때문에
    // sum은 문자열의 첫 번째 문자와 다른 문자를 카운트
    let obj = { sum: 0 };

    // 문자열 s를 배열로 치환하고 map 함수로 배열을 순회
    s.split('').map((v) => {
      // obj의 길이가 1이라면 s의 요소인 v라는 단어를 obj에 추가 후
      // return을 통해서 다음 순서로 진행
      if (Object.keys(obj).length === 1) return (obj[v] = 1);

      // 바로 위 조건문을 통해서 v라는 단어를 추가했기 때문에
      // obj 안에 v라는 단어가 있으면 obj[v] + 1
      // obj 안에 v라는 단어가 없으면 obj.sum + 1
      obj.hasOwnProperty(v) ? obj[v]++ : obj.sum++;

      // obj를 순회하면서 key가 sum이 아니고 obj.sum과 값이 같으면
      // answer++, obj를 초기화
      // obj를 초기화하면 obj의 길이는 다시 1이 되고
      // 첫 번째 조건문에서 obj의 길이가 1이라면
      // 해당 단어가 첫 번째 단어로 추가됩니다.
      Object.keys(obj).forEach((key) => {
        if (key !== 'sum' && obj[key] === obj.sum) {
          answer++;
          return (obj = { sum: 0 });
        }
      });
    });
    return Object.keys(obj).length > 1 ? answer + 1 : answer;
  };
  return <div></div>;
};

export default SplitString;
